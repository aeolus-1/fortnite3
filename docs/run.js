var loadedMobs = new Array()

var mobTeamCounts = {}

function runMobs() {
    mobTeamCounts = {}
    loadedMobs = new Array()
    for (let i = 0; i < players.length; i++) {
        const player = players[i];

        var loadRange = ((4)*2)+1

        let playerPos = v(player.chunkPos.x-(Math.floor(loadRange/2)), player.chunkPos.y-Math.floor(loadRange/2))

        let chunks = mainChunks.requestChunks(playerPos.x, playerPos.y, loadRange, loadRange)
        
        let mobs = mainChunks.getMobiles(chunks)
        loadedMobs = [...loadedMobs, ...mobs]
    }
    var alreadyDone = []
    for (let i = 0; i < loadedMobs.length; i++) {
        let mob = loadedMobs[i];
        if (mob.unload) {
            if (mob.build.size>0.5) {
                mob.build.size -= 0.3*deltaTime
                mob.gameAlpha = clamp(mob.gameAlpha-(0.08*deltaTime), 0, 1)
            } else {
                mainChunks.removeMob(mob.chunkPos.x, mob.chunkPos.y, mob)
                delete mob
            }
        }
        Mob.updateMovement(mob)
        if (!mob.unload && !alreadyDone.includes(mob.id)) {
            if (mobTeamCounts[mob.team] == undefined) mobTeamCounts[mob.team] = 0
            mobTeamCounts[mob.team] += 1
            Mob.update(mob)
            if (true) {
                Mob.runAi(mob)

                mob.closestEnemy = undefined
                mob.closestEnemyPlayer = undefined
                mob.enemyPlayers = []
                mob.closestFriend = new Array()

                cEnemy = {mob:undefined, dst:Infinity}
                cEnemyPlayer = {mob:undefined, dst:Infinity}

                if (mob.unload && mob.build.size < 1) {
                
                } if (!mob.unload) {
                    for (let i2 = 0; i2 < loadedMobs.length; i2++) {


                        const mob2 = loadedMobs[i2];

                        var dst = getDistance(mob2.pos, mob.pos)
                        if (dst < mob.build.sight*8) {

                            if (mob.team == mob2.team && (mob2.player || mob2.bot.active) && dst < Infinity) {
                                mob.closestFriend.push(mob2)
                            }

                            if (mob.id != mob2.id) {
                                if (mob.team != mob2.team) {
                                    if (mob2.alpha > 0.2) {
                                        mob.enemyPlayers.push(mob2)
                                        if (mob2.player || mob2.bot.active) {
                                            let dst = getDistance(mob.pos, mob2.pos)
                                            if (dst < cEnemyPlayer.dst) {
                                                cEnemyPlayer.mob = mob2
                                                cEnemyPlayer.dst = dst
                                            }
                                            mob.closestEnemyPlayer = cEnemyPlayer.mob
                                        }
                                        
                                        let dst = getDistance(mob.pos, mob2.pos)
                                        if (dst < cEnemy.dst) {
                                            cEnemy.mob = mob2
                                            cEnemy.dst = dst
                                        }
                                        mob.closestEnemy = cEnemy.mob
                                        
                                    }
                                }

                                if (true) {
                                    Mob.runCollisions(mob, mob2)
                                    Mob.runCollisions(mob2, mob)
                                }
                            }
                        
                        }


                    }
                }
            }
            alreadyDone.push(mob.id)
        }
        
    }

   
}
var respawnTimeout = undefined,
    wave = 0

function checkWaveSpawn() {

    if (mobTeamCounts["#ff0"] == undefined && respawnTimeout == undefined) {
        respawnTimeout = setTimeout(() => {
            var enemyMotherShip = spawnMob(v(playerMotherShip.pos.x-1000,playerMotherShip.pos.y), bossBuilds.mothership, "#ff0")
            players.push(enemyMotherShip)
            genMobs(5, 100, v(playerMotherShip.pos.x-1000,playerMotherShip.pos.y), "#ff0", enemyMotherShip)
            wave++
            Chat.submitMsg(`Wave ${wave}`)
            setTimeout(()=>{respawnTimeout = undefined},1000)
        }, 4500);
        
    }
}

var players = new Array()

var camera = v(0, 0),
    cameraTarget = v(0,0)


var preTime = (new Date).getTime(),
    framerate = 0,
    fpsUpdateTicker = 10,
    fpsUpdateTickerCap = fpsUpdateTicker,

    deltaTime = 1

var fps = 60,
    fpsD = (1000/fps)
function updateFps() {
    let time = (new Date).getTime(),
        diff = (time - preTime)/10000

    framerate = (1/diff)
    preTime = time


    deltaTime = (1/(Math.min(Math.max((fps/framerate), 0.1), 2)))*0.5
}

var preDim = v(
    window.innerWidth,
    window.innerHeight
)

function mainloop() {

    if (preDim.x != window.innerWidth || preDim.y != window.innerHeight) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        preDim = v(
            window.innerWidth,
            window.innerHeight
        )
    }

    let gameMouse = v(
        ((mouse.x)-((window.innerWidth/2)-(camera.x*globalScale)))/globalScale,
        ((mouse.y)-((window.innerHeight/2)-(camera.y*globalScale)))/globalScale
    )

    var targetA = getAngle(gameMouse, player1.pos)/(Math.PI/180),
        currentA = player1.rotation/(Math.PI/180)
    player1.rotation -= clamp((angleDiff(targetA, currentA))*(Math.PI/180)*player1.build.turningSpeed, -1, 1)

    player1.target = {...gameMouse}

    checkWaveSpawn()

    runKeys()

    

    runMobs()


    requestAnimationFrame(renderLoop)

    fpsUpdateTicker -= 1
    if (fpsUpdateTicker <= 0) {
        requestAnimationFrame(updateFps)
        fpsUpdateTicker = fpsUpdateTickerCap
    }

}



setInterval(mainloop, fpsD)