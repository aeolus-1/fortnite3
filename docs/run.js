function runMobs() {

    let loadedMobs = new Array()
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        let playerPos = v(player.chunkPos.x-2, player.chunkPos.y-2)

        let chunks = mainChunks.requestChunks(playerPos.x, playerPos.y, 5, 5)
        let mobs = mainChunks.getMobiles(chunks)
        loadedMobs = [...loadedMobs, ...mobs]
    }
    for (let i = 0; i < loadedMobs.length; i++) {
        let mob = loadedMobs[i];
        Mob.update(mob)
        if (mob.build.name != "dummy" || true) {
            Mob.runAi(mob)

            mob.closestEnemy = undefined
            mob.closestFriend = new Array()

            cEnemy = {mob:undefined, dst:Infinity}

            if (mob.unload) {
                mainChunks.removeMob(mob.chunkPos.x, mob.chunkPos.y, mob)
                delete mob
            } else {
                for (let i2 = 0; i2 < loadedMobs.length; i2++) {


                    const mob2 = loadedMobs[i2];
                    if (mob.team == mob2.team) {
                        mob.closestFriend.push(mob2)
                    }

                    if (mob.id != mob2.id) {

                        if (mob2.player && mob2.alpha > 0.2) {
                            let dst = getDistance(mob.pos, mob2.pos)
                            if (dst < cEnemy.dst) {
                                cEnemy.mob = mob2
                                cEnemy.dst = dst
                            }
                            mob.closestEnemy = cEnemy.mob
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

   
}

var players = new Array()

var camera = v(0, 0)


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


    deltaTime = Math.min(Math.max((fps/framerate), 0.1), 2)*0.3
}

function mainloop() {
    runKeys()

    let gameMouse = v(
        mouse.x-((window.innerWidth/2)-camera.x),
        mouse.y-((window.innerHeight/2)-camera.y)
    )


    player1.rotation = getAngle(gameMouse, player1.pos)

    player1.target = {...gameMouse}
    

    runMobs()


    requestAnimationFrame(renderLoop)

    fpsUpdateTicker -= 1
    if (fpsUpdateTicker <= 0) {
        requestAnimationFrame(updateFps)
        fpsUpdateTicker = fpsUpdateTickerCap
    }

}



setInterval(mainloop, fpsD)