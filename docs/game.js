function genMobs(num) {
    for (let i = 0; i < num; i++) {
    var range = 150
        var rndPos = v(randInt(-range, range),randInt(-range, range))
        let pos = mainChunks.posToChunkPos(rndPos),
            chunkM = mainChunks.requestChunk(pos.x, pos.y)

            var build = Object.keys(badBuilds),
                rnd = randInt(0, build.length-1),
                name = build[rnd]

            build = badBuilds[build[rnd]]

            build.name = name
        let m = new mob(rndPos, JSON.parse(JSON.stringify(build)))
        m.bot.active = true
        m.player = true
        m.shotBy = m

       


        
        mainChunks.insertMob(chunkM.pos.x, chunkM.pos.y, m)
    }
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

    penetration:1,


    isBullet:false,
    environment:false,

    autoShoot: false,

    teamPenetration:0,


}
var gunDefaultProps = {
    pos:0,
    height:17,
    width:10,
    speed:200,
    spread:3,
    recoilMod:1,
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

