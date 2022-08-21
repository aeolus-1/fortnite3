function genMobs(num, range=10000, pos=v(0,0), team="#f00") {
    for (let i = 0; i < num; i++) {
    var range = range
        var a = randInt(0, 360)*(Math.PI/180),//(i/num)*Math.PI*2
            dst = randInt(Math.max(300, range*0.2), range)

        var rndPos = v(pos.x+(Math.cos(a)*dst), pos.y+(Math.sin(a)*dst))

        let cpos = mainChunks.posToChunkPos(rndPos),
            chunkM = mainChunks.requestChunk(cpos.x, cpos.y)

            var build = Object.keys(badBuilds),
                rnd = randInt(0, build.length-1),
                name = build[rnd]

            build = badBuilds[build[rnd]]

            build.name = name
        let m = new mob(rndPos, JSON.parse(JSON.stringify(build)), team)
        m.bot.active = true
        m.player = true
        m.shotBy = m

       


        
        mainChunks.insertMob(chunkM.pos.x, chunkM.pos.y, m)
    }
}

function spawnMob(pos, build, team) {
    let cpos = mainChunks.posToChunkPos(pos),
            chunkM = mainChunks.requestChunk(cpos.x, cpos.y)
    let m = new mob(pos, JSON.parse(JSON.stringify(build)), team)
        m.bot.active = true
        m.player = true
        m.shotBy = m

       return m


        
}


var mainChunks = new Chunks({})

var gameConfig = {
    friction:0.95,
}

var buildDefaultProps = {
    size:10,
    health:100,
    speed:0.9,
    size:15,
    bodyDamage:0.5,
    duration:300,
    guns:[],
    friction:0.9,

    sight:600,
    range:500,

    drone:false,
    drones:[],
    droneCap:6,
    replacesDrones:false,


    invisDur:0,
    durSeperation:0,
    damageMod:1,
    affects:[],
    teamAffects:[],
    static:false,
    baseValue:1,


    shape:1,

    penetration:1,

    isBullet:false,
    environment:false,

    autoShoot: false,
    bot:false,

    teamPenetration:1,


}
var gunDefaultProps = {
    pos:0,
    height:17,
    width:10,
    speed:200,
    spread:3,
    recoilMod:1,
    offset:0,
    autoShoot:false,
    bullet:{
        pos: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        rotation: 0,
        target: {
            x: 0,
            y: 0
        },
        alive: true,
        build: {
            health: 9,
            speed: 8,
            size: 8,
            maxHealth: 3,
            bodyDamage: 3.5,
            duration: 300,
            friction: 1,
            baseValue: 0,
            sight: 0,
            guns: [],
            CONFIG: {
                showHealthBar: false
            }
        },
        autoSpin: false,
        autoShoot: false,
        bot: false

    },
    recoilVel:0,
    shootCooldown:0,

    rmb:false,

}

var defaultAffectProps = {
    speed: 1,
    slow: 1,
    damage: 0,
    heal: 0,
    duration: 1000,
    shield: 1,
    weaken: 1,
    freeze: 1,
    stun: false,
    id: 1,
    stacks: false,
    targetsEnemy: true,
}

function testObjectForUndefined(ob, props) {
    for (var key of Object.keys(props)) {
        let prop = key,
            value = props[key]

        if (ob[prop] == undefined) {
            ob[prop] = value
        }

    }

    return ob
}


var teams = ["#ff0000", "#00ff00", "#0000ff"]

