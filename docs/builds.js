var effects = {
    /*
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
    
    */
    immuneShield: {
        id:"immuneShield",

        shield: 0,
        duration: 500,
        targetsEnemy: true,
    },
    speedSpeed: {
        id:"speedSpeed",

        speed: 1.2,
        duration:1500,
        targetsEnemy:false,
        stacks:true,
    },

    toxicPosion: {
        id:"toxicPosion",

        damage: 0.0225,
        duration: 583,
        targetsEnemy: true,


    },
    injectionPosion: {
        id:"injectionPosion",


        damage: 0.004,
        duration: 400,
        stacks: true,
        targetsEnemy: true,


    },
    healsHeal: {
        id:"healsHeal",
        

        damage: -0.4,

        duration: 10,
        targetsEnemy: false,
    },
    healsShield: {
        id:"healsShield",


        shield: 0.2,

        duration: 15,
        targetsEnemy: false,
    },
    boosterSlow: {
        id:"boosterSlow",


        slow: 0.8,

        duration: 600,
        targetsEnemy: true,

    },
    spreadSlow: {
        id:"spreadSlow",

        slow: 0.8,

        duration: 1000,
        targetsEnemy: true,

    },
    tankWeaken: {
        id:"tankWeaken",


        weaken: 0.75,
        duration: 1800,
        targetsEnemy: true,

    },
    carrionFreeze: {
        id:"carrionFreeze",

        freeze: 1.5,
        duration: 1000,
        targetsEnemy: true,

    },
    shockyStun: {
        id:"shockyStun",

        stun: true,
        duration: 200,
        targetsEnemy: true,

    },

}


var builds = {
    starter: {
        name:"starter",
        health: 130,
        speed: 0.9,
        size: 15,
        maxHealth: 100,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        range:100,
        guns: [
            {
                pos: 0,
                height: 17,
                ogLength: 0,
                width: 10,
                speed: 300,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 10,
                        speed: 8,
                        size: 8,
                        maxHealth: 1.5,
                        bodyDamage: 0.5,
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
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
}

var badBuilds = {
    
    port_a_fort: {
        name:"port_a_fort",
        health: 60,
        speed: 0.7,
        size: 20,
        maxHealth: 60,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 800,
        range: 300,
        guns: [
            {
                pos: 0,
                height: 10,
                ogLength: 0,
                width: 20,
                speed: 800,
                spread: 1,
                recoilMod: 20,
                rmb: true,
                bullet: {
                    build: {
                        health: 0.1,
                        speed: 3,
                        size: 5,
                        maxHealth: 3,
                        bodyDamage: 2,
                        duration: 100,
                        friction: 0.98,
                        baseValue: 0,
                        sight: 0,
                        exploding: {
                            strength: 12,
                            bullet: {
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
                                    health: 350,
                                    speed: 13,
                                    size: 17,
                                    maxHealth: 5,
                                    bodyDamage: 0.98,
                                    duration: 50,
                                    friction: 0.9,
                                    baseValue: 0,
                                    sight: 0,
                                    teamPenetration:0,
                                    
                                    exploding: {
                                        strength: 1,
                                        bullet: {
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
                                                health: 800,
                                                speed: 80,
                                                size: 25,
                                                maxHealth: 5,
                                                bodyDamage: 0.1,
                                                duration: 1000,
                                                durSeperation: 100,

                                                friction: 0.5,
                                                baseValue: 0,
                                                static: true,
                                                sight: 0,

                                                teamPenetration:0,

                                                guns: [],

                                                CONFIG: {
                                                    showHealthBar: false
                                                }
                                            },
                                            autoSpin: false,
                                            autoShoot: false,
                                            bot: false

                                        }
                                    },
                                    guns: [],

                                    CONFIG: {
                                        showHealthBar: false
                                    }
                                },
                                autoSpin: false,
                                autoShoot: false,
                                bot: false

                            }
                        },
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: true,
                    bot: false,

                },
                recoilVel: 0,
                autoShoot: false,
                shootCooldown: 0
            },
            
            {
                pos: 0,
                height: 10,
                ogLength: 0,
                width: 20,
                speed: 600,
                spread: 1,
                recoilMod: 5,
                bullet: {
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
                        health: 10,
                        speed: 6,
                        size: 15,
                        maxHealth: 3,
                        bodyDamage: 1,
                        duration: 650,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,


                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    bot: false,

                },
                recoilVel: 0,
                autoShoot: true,
                shootCooldown: 0
            },
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    flameThrower: {
        name:"flameThrower",
        health: 100,
        speed: 0.83,
        size: 15,
        maxHealth: 200,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        range: 100,
        guns: [
            {
                pos: 0,
                height: 25,
                ogLength: 0,
                width: 12,
                speed: 5,
                spread: 3,
                recoilMod: 5,
                bullet: {
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
                        health: 30,
                        speed: 2,
                        size: 5,
                        maxHealth: Infinity,
                        bodyDamage: 0.5,
                        duration: 80,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        penetration:0.01,

                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    starter: {
        name:"starter",
        health: 130,
        speed: 0.9,
        size: 15,
        maxHealth: 100,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.9,
        sight: 600,
        guns: [
            {
                pos: 0,
                height: 17,
                ogLength: 0,
                width: 10,
                speed: 200,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    destroyer: {
        name:"destroyer",
        health: 350,
        speed: 0.93,
        size: 20,
        maxHealth: 250,
        bodyDamage: 5,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        range: 0,
        guns: [

        ],
        CONFIG: {
            showHealthBar: true
        }

    },
    drone: {
        name:"drone",
        health: 90,
        speed: 0.8,
        size: 15,
        maxHealth: 100,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 1000,
        droneCap:10,
        guns: [
            {
                pos: 90,
                height: 8,
                ogLength: 0,
                width: 16,
                speed: 100,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 1,
                        speed: 1.3,
                        size: 9,
                        maxHealth: 85,
                        bodyDamage: 3,
                        duration: 9999999,
                        friction: 0.985,
                        baseValue: 0,
                        shape:3,
                        sight: 0,
                        guns: [],
                        drone: true,
                        teamPenetration:0.5,
                        CONFIG: {
                            showHealthBar: false
                        }
                    },

                    autoShoot: true,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 270,
                height: 8,
                ogLength: 0,
                width: 16,
                speed: 1200,
                spread: 3,
                recoilMod: 1,
                rmb:true,
                bullet: {
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
                        health: 3,
                        speed: 1.3,
                        size: 14,
                        maxHealth: 85,
                        bodyDamage: 3,
                        teamBodyDamage: 5,
                        duration: 9999999,
                        friction: 0.985,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        seeking: true,
                        exploding: {
                            strength: 14,
                            bullet: {
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
                                    health: 40,
                                    speed: 3,
                                    size: 5,
                                    maxHealth: 40,
                                    bodyDamage: 1.2,
                                    duration: 60,
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

                            }
                        },
                        CONFIG: {
                            showHealthBar: false
                        }
                    },

                    autoShoot: true,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        },
        autoSpin: true,
        autoShoot: true,


    },
    manager: {
        name:"manager",
        health: 60,
        speed: 0.75,
        size: 15,
        maxHealth: 100,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 1500,
        range:1500,
        droneCap:5,
        invisDur:500,
        guns: [
            {
                pos: 90,
                height: 8,
                ogLength: 0,
                width: 16,
                speed: 1200,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 45,
                        speed: 1.3,
                        size: 9,
                        maxHealth: 85,
                        bodyDamage: 3,
                        duration: 9999999,
                        friction: 0.985,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        drone: true,
                        teamPenetration:0.5,

                        CONFIG: {
                            showHealthBar: false
                        }
                    },

                    autoShoot: true,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 270,
                height: 8,
                ogLength: 0,
                width: 16,
                speed: 1200,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 45,
                        speed: 1.3,
                        size: 9,
                        maxHealth: 85,
                        bodyDamage: 3,
                        teamBodyDamage: 5,
                        duration: 9999999,
                        friction: 0.985,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        drone: true,
                        teamPenetration:0.5,
                        CONFIG: {
                            showHealthBar: false
                        }
                    },

                    autoShoot: true,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        },
        autoSpin: true,
        autoShoot: true,


    },
    overseer: {
        name:"overseer",
        health: 100,
        speed: 0.8,
        size: 15,
        maxHealth: 100,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        droneCap: 24,
        damageMod: 5,
        guns: [
            {
                pos: 90,
                height: 8,
                ogLength: 0,
                width: 16,
                speed: 100,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 0.2,
                        speed: 0.6,
                        size: 5,
                        maxHealth: 6,
                        bodyDamage: 0.05,
                        duration: 100,
                        friction: 0.985,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        drone: true,
                        CONFIG: {
                            showHealthBar: false
                        }
                    },

                    autoShoot: true,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },

        ],
        CONFIG: {
            showHealthBar: true
        },
        autoSpin: true,
        autoShoot: true,


    },
    octo: {
        name:"octo",
        health: 130,
        speed: 0.65,
        size: 15,
        maxHealth: 120,
        bodyDamage: 0.9,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        damageMod: 0.85,
        droneCap: Infinity,
        guns: [
            {
                pos: 0,
                height: 5,
                ogLength: 0,
                width: 8,
                speed: 40,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 2,
                        speed: 8,
                        size: 4,
                        maxHealth: 3,
                        bodyDamage: 2,
                        duration: 200,
                        shape:3,
                        friction: 0.95,
                        baseValue: 0,
                        sight: 0,
                        drone: true,
                        teamPenetration:0,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 300,
                height: 5,
                ogLength: 0,
                width: 8,
                speed: 40,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 1,
                        speed: 8,
                        size: 3,
                        maxHealth: 3,
                        bodyDamage: 3,
                        duration: 200,
                        friction: 0.95,
                        shape:3,
                        baseValue: 0,
                        sight: 0,
                        drone: true,
                        teamPenetration:0,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 60,
                height: 5,
                ogLength: 0,
                width: 8,
                speed: 40,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 1,
                        speed: 8,
                        size: 3,
                        maxHealth: 3,
                        bodyDamage: 2,
                        duration: 200,
                        friction: 0.95,
                        shape:3,
                        baseValue: 0,
                        sight: 0,
                        drone: true,
                        teamPenetration:0,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 180,
                height: 5,
                ogLength: 0,
                width: 18,
                speed: 500,
                spread: 3,
                recoilMod: 1,
                rmb:true,
                bullet: {
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
                        health: 1,
                        speed: 3,
                        size: 14,
                        maxHealth: 3,
                        bodyDamage: 0.2,
                        duration: 500,
                        friction: 0.95,
                        baseValue: 0,
                        sight: 0,
                        autoShoot:true,
                        autoSpin:true,
                        
                        guns: [
                            {
                                pos: 180,
                                height: 5,
                                ogLength: 0,
                                width: 18,
                                speed: 30,
                                spread: 3,
                                recoilMod: 1,
                                bullet: {
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
                                        health: 1,
                                        speed: 3,
                                        size: 8,
                                        maxHealth: 3,
                                        bodyDamage: 0.2,
                                        duration: 500,
                                        friction: 0.94,
                                        baseValue: 0,
                                        sight: 1000,

                                        seeking:true,
                                        
                                        guns: [],
                                        CONFIG: {
                                            showHealthBar: false
                                        }
                                    },
                                    autoSpin: false,
                                    autoShoot: false,
                                    bot: false
                
                                },
                                recoilVel: 0,
                                shootCooldown: 0
                            },
                        ],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            



        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    gunner: {
        name:"gunner",
        health: 100,
        speed: 0.8,
        size: 15,
        maxHealth: 100,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        guns: [
            {
                pos: 0,
                height: 15,
                ogLength: 0,
                width: 12,
                speed: 10,
                spread: 6,
                recoilMod: 1,
                bullet: {
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
                        health: 1,
                        speed: 8,
                        size: 3,
                        maxHealth: 3,
                        bodyDamage: 1.2,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    flank: {
        name:"flank",
        health: 100,
        speed: 1,
        size: 15,
        maxHealth: 100,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        guns: [
            {
                pos: 0,
                height: 12,
                ogLength: 0,
                width: 8,
                speed: 80,
                spread: 6,
                recoilMod: 1,
                bullet: {
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
                        health: 2,
                        speed: 7.5,
                        size: 5,
                        maxHealth: 3,
                        bodyDamage: 5,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: -90,
                height: 12,
                ogLength: 0,
                width: 8,
                speed: 20,
                spread: 6,
                recoilMod: 1,
                bullet: {
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
                        health: 1,
                        speed: 9,
                        size: 3,
                        maxHealth: 3,
                        bodyDamage: 0.5,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 90,
                height: 12,
                ogLength: 0,
                width: 8,
                speed: 20,
                spread: 6,
                recoilMod: 1,
                bullet: {
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
                        health: 1,
                        speed: 9,
                        size: 3,
                        maxHealth: 3,
                        bodyDamage: 0.5,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    spread: {
        name:"spread",
        health: 130,
        speed: 0.805,
        size: 15,
        maxHealth: 150,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 500,
        range: 60,
        damageMod: 1,
        guns: [
            {
                pos: 0,
                height: 15,
                ogLength: 0,
                width: 15,
                speed: 140,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 2.5,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 2,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [effects.spreadSlow],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 5,
                height: 15,
                ogLength: 0,
                width: 15,
                speed: 140,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 2.5,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 2,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [effects.spreadSlow],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: -10,
                height: 15,
                ogLength: 0,
                width: 15,
                speed: 140,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 2.5,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 2,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [effects.spreadSlow],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: -5,
                height: 15,
                ogLength: 0,
                width: 15,
                speed: 140,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 2.5,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 2,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [effects.spreadSlow],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 10,
                height: 15,
                ogLength: 0,
                width: 15,
                speed: 140,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 2.5,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 2,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [effects.spreadSlow],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    jumper: {
        name:"jumper",
        health: 140,
        speed: 0.6,
        size: 15,
        maxHealth: 150,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 500,
        range: 60,
        damageMod: 1,
        guns: [
            {
                pos: 0,
                height: 15,
                ogLength: 0,
                width: 15,
                speed: 80,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 10,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 1.2,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [effects.spreadSlow],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 5,
                height: 15,
                ogLength: 0,
                width: 15,
                speed: 80,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 10,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 1.2,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [effects.spreadSlow],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: -10,
                height: 15,
                ogLength: 0,
                width: 15,
                speed: 80,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 10,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 1.2,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [effects.spreadSlow],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: -5,
                height: 15,
                ogLength: 0,
                width: 15,
                speed: 80,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 10,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 1.2,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [effects.spreadSlow],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 10,
                height: 15,
                ogLength: 0,
                width: 15,
                speed: 80,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 10,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 1.2,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [effects.spreadSlow],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 180,
                height: 13,
                ogLength: 0,
                width: 14,
                speed: 350,
                spread: 3,
                rmb: true,
                recoilMod: 100,
                bullet: {
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
                        health: 35,
                        speed: 1.5,
                        size: 12,
                        maxHealth: 20,
                        bodyDamage: 2,
                        duration: 500,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        affects: [effects.tankWeaken],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }

        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    booster: {
        name:"booster",
        health: 130,
        speed: 1,
        size: 15,
        maxHealth: 120,
        bodyDamage: 3,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        range: 5,
        guns: [
            {
                pos: 0,
                height: 15,
                ogLength: 0,
                width: 10,
                speed: 150,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 9,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 0.6,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [effects.boosterSlow],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 180,
                height: 10,
                ogLength: 0,
                width: 10,
                speed: 20,
                spread: 8,
                recoilMod: 3.5,
                bullet: {
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
                        health: 1,
                        speed: 3,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 0.5,
                        duration: 40,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 210,
                height: 10,
                ogLength: 0,
                width: 10,
                speed: 20,
                spread: 8,
                recoilMod: 3.5,
                bullet: {
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
                        health: 1,
                        speed: 3,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 0.5,
                        duration: 40,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 150,
                height: 10,
                ogLength: 0,
                width: 10,
                speed: 20,
                spread: 8,
                recoilMod: 3.5,
                bullet: {
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
                        health: 1,
                        speed: 3,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 0.5,
                        duration: 40,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            

        ],
        CONFIG: {
            showHealthBar: true
        }



    },
    /*
    turret: {
        name:"turret",
        health: 200,
        speed: 0.8,
        size: 15,
        maxHealth: 200,
        bodyDamage: 1.5,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        guns: [
            {
                pos: 0,
                height: 15,
                ogLength: 0,
                width: 8,
                speed: 100,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 140,
                        speed: 2.5,
                        size: 5,
                        maxHealth: 140,
                        bodyDamage: 3,
                        duration: 1000,
                        friction: 0.98,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 120,
                height: 15,
                ogLength: 0,
                width: 8,
                speed: 100,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 140,
                        speed: 2.5,
                        size: 5,
                        maxHealth: 140,
                        bodyDamage: 3,
                        duration: 1000,
                        friction: 0.98,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 240,
                height: 15,
                ogLength: 0,
                width: 8,
                speed: 100,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 140,
                        speed: 2.5,
                        size: 5,
                        maxHealth: 140,
                        bodyDamage: 3,
                        duration: 1000,
                        friction: 0.98,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }

        ],
        CONFIG: {
            showHealthBar: true
        }
    },*/
    sniper: {
        name:"sniper",
        health: 60,
        speed: 0.8,
        size: 15,
        maxHealth: 60,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 1250,
        guns: [
            {
                pos: 0,
                height: 30,
                ogLength: 0,
                width: 8,
                speed: 500,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 70,
                        speed: 15,
                        size: 8,
                        bodyDamage: 10,
                        duration: 400,
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
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    rocketeer: {
        name:"rocketeer",
        health: 60,
        speed: 0.75,
        size: 15,
        maxHealth: 60,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.5,
        sight: 1000,
        guns: [
            {
                pos: 0,
                height: 30,
                ogLength: 0,
                width: 14,
                speed: 300,
                spread: 0,
                recoilMod: 30,
                bullet: {
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
                        health: 1,
                        speed: 15,
                        size: 9,
                        maxHealth: 3,
                        bodyDamage: 2,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        autoShoot: true,

                        exploding: {
                            strength: 10,
                            bullet: {
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
                                    health: 40,
                                    speed: 4,
                                    size: 5,
                                    maxHealth: 4,
                                    bodyDamage: 1.2,
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

                            }
                        },
                        guns: [
                            {
                                pos: 180,
                                height: 7,
                                ogLength: 0,
                                width: 12,
                                speed: 1000,
                                spread: 15,
                                recoilMod: 0,
                                bullet: {
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
                                        health: 1,
                                        speed: 6,
                                        size: 5.5,
                                        maxHealth: 3,
                                        bodyDamage: 3,
                                        duration: 40,
                                        friction: 1,
                                        baseValue: 0,
                                        sight: 0,
                                        guns: [],
                                        autoShoot: true,
                                        CONFIG: {
                                            showHealthBar: false
                                        }
                                    },
                                    autoSpin: false,
                                    bot: false,

                                },
                                recoilVel: 0,
                                shootCooldown: 10
                            },
                            
                        ],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    spiral: {
        name:"spiral",
        health: 60,
        speed: 0.8,
        size: 15,
        maxHealth: 60,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 1000,
        guns: [
            {
                pos: 0,
                height: 30,
                ogLength: 0,
                width: 17,
                speed: 500,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 250,
                        speed: 2,
                        size: 13,
                        maxHealth: 10,
                        bodyDamage: 2.5,
                        duration: 500,
                        friction: 1,
                        baseValue: 0,
                        sight: 600,
                        autoShoot: true,
                        autoSpin:true,
                        guns: [
                            {
                                pos: 0,
                                height: 8,
                                ogLength: 0,
                                width: 12,
                                speed: 50,
                                spread: 3,
                                recoilMod: 1,
                                bullet: {
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
                                        health: 5,
                                        speed: 5,
                                        size: 4,
                                        maxHealth: 10,
                                        bodyDamage: 1,
                                        teamBodyDamage: 0.5,
                                        duration: 50,
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
                                    bot: false,

                                },
                                recoilVel: 0,
                                shootCooldown: 0
                            },
                            {
                                pos: 270,
                                height: 8,
                                ogLength: 0,
                                width: 12,
                                speed: 50,
                                spread: 3,
                                recoilMod: 1,
                                bullet: {
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
                                        health: 5,
                                        speed: 5,
                                        size: 4,
                                        maxHealth: 10,
                                        bodyDamage: 1,
                                        teamBodyDamage: 0.5,
                                        duration: 50,
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
                                    bot: false,

                                },
                                recoilVel: 0,
                                shootCooldown: 0
                            },
                            {
                                pos: 180,
                                height: 8,
                                ogLength: 0,
                                width: 12,
                                speed: 50,
                                spread: 3,
                                recoilMod: 1,
                                bullet: {
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
                                        health: 5,
                                        speed: 5,
                                        size: 4,
                                        maxHealth: 10,
                                        bodyDamage: 1,
                                        teamBodyDamage: 0.5,
                                        duration: 50,
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
                                    bot: false,

                                },
                                recoilVel: 0,
                                shootCooldown: 0
                            },
                            {
                                pos: 90,
                                height: 8,
                                ogLength: 0,
                                width: 12,
                                speed: 50,
                                spread: 3,
                                recoilMod: 1,
                                bullet: {
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
                                        health: 5,
                                        speed: 5,
                                        size: 4,
                                        maxHealth: 10,
                                        bodyDamage: 1,
                                        teamBodyDamage: 0.5,
                                        duration: 50,
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
                                    bot: false,

                                },
                                recoilVel: 0,
                                shootCooldown: 0
                            },



                        ],
                        CONFIG: {
                            showHealthBar: true
                        }
                    },


                    autoShoot: true,
                    bot: false,

                },
                recoilVel: 0,

                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    tank: {
        name:"tank",
        health: 100,
        speed: 0.8,
        size: 17,
        maxHealth: 100,
        bodyDamage: 0.4,
        duration: Infinity,
        friction: 0.98,
        sight: 800,
        guns: [
            {
                pos: 0,
                height: 13,
                ogLength: 0,
                width: 14,
                speed: 350,
                spread: 3,
                recoilMod: 35,
                bullet: {
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
                        health: 35,
                        speed: 1.5,
                        size: 12,
                        maxHealth: 20,
                        bodyDamage: 2,
                        duration: 500,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        affects: [effects.tankWeaken],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    bigTank: {
        name:"bigTank",
        health: 100,
        speed: 0.8,
        size: 20,
        maxHealth: 100,
        bodyDamage: 0.4,
        duration: Infinity,
        friction: 0.98,
        sight: 800,
        guns: [
            {
                pos: 0,
                height: 13,
                ogLength: 0,
                width: 50,
                speed: 350,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 60,
                        speed: 10,
                        size: 35,
                        maxHealth: 20,
                        bodyDamage: 2,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        affects: [effects.tankWeaken],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    seekerTank: {
        name:"seekerTank",
        health: 100,
        speed: 0.8,
        size: 17,
        maxHealth: 100,
        bodyDamage: 0.4,
        duration: Infinity,
        friction: 0.98,
        sight: 800,
        guns: [
            {
                pos: 0,
                height: 18,
                ogLength: 0,
                width: 14,
                speed: 600,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 20,
                        speed: 1,
                        size: 12,
                        maxHealth: 20,
                        bodyDamage: 3,
                        duration: 450,
                        friction: 0.98,
                        baseValue: 0,
                        sight: 0,
                        seeking: true,
                        guns: [],
                        affects: [effects.tankWeaken],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    mine: {
        name:"mine",
        health: 90,
        speed: 0.8,
        size: 15,
        maxHealth: 60,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 700,
        range: 0,
        droneCap:1,
        guns: [
            {
                pos: 0,
                height: 10,
                ogLength: 0,
                width: 14,
                speed: 90,
                spread: 1,
                recoilMod: 15,
                bullet: {
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
                        
                        health: 1,
                        speed: 8,
                        size: 9,
                        maxHealth: 3,
                        bodyDamage: 0,
                        duration: 50,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        exploding: {
                            strength: 5,
                            bullet: {
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
                                    health: 40,
                                    speed: 3,
                                    size: 5,
                                    maxHealth: 40,
                                    bodyDamage: 1.2,
                                    duration: 60,
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

                            }
                        },
                        guns: [

                        ],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: true,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 180,
                height: 8,
                ogLength: 0,
                width: 17,
                speed: 800,
                spread: 1,
                recoilMod: 20,
                rmb:true,
                bullet: {
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
                        health: 0.00001,
                        speed: 2,
                        size: 15,
                        maxHealth: 0,
                        bodyDamage: 0.1,
                        duration: 250,
                        friction: 0.98,
                        baseValue: 0,
                        drone:true,
                        sight: 0,
                        exploding: {
                            strength: 16,
                            bullet: {
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
                                    health: 40,
                                    speed: 4.5,
                                    size: 10,
                                    maxHealth: 40,
                                    bodyDamage: 3,
                                    duration: 60,
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

                            }
                        },
                        guns: [

                        ],
                        CONFIG: {
                            showHealthBar: true
                        }
                    },
                    autoSpin: false,
                    autoShoot: true,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    heals: {
        name:"heals",
        health: 100,
        speed: 0.95,
        size: 15,
        maxHealth: 100,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        guns: [
            {
                pos: 0,
                height: 15,
                ogLength: 0,
                width: 8,
                speed: 35,
                spread: 7,
                recoilMod: 1,
                bullet: {
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
                        health: 0.1,
                        speed: 8,
                        size: 5,
                        maxHealth: 3,
                        bodyDamage: 0,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        teamAffects: [effects.healsHeal],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 0,
                height: 10,
                ogLength: 0,
                width: 11,
                speed: 140,
                spread: 1.5,
                recoilMod: 1,
                bullet: {
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
                        health: 5,
                        speed: 6,
                        size: 7,
                        maxHealth: 3,
                        bodyDamage: 1.5,
                        duration: 250,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    toxic: {
        name:"toxic",
        health: 120,
        speed: 0.9,
        size: 15,
        maxHealth: 100,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        guns: [
            {
                pos: 0,
                height: 17,
                ogLength: 0,
                width: 10,
                speed: 200,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 30,
                        speed: 5.5,
                        size: 9.5,
                        maxHealth: 1,
                        bodyDamage: 0.8,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        affects: [effects.toxicPosion],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: -15,
                height: 17,
                ogLength: 0,
                width: 10,
                speed: 200,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 5,
                        size: 8,
                        maxHealth: 1,
                        bodyDamage: 0.8,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        affects: [effects.toxicPosion],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 15,
                height: 17,
                ogLength: 0,
                width: 10,
                speed: 200,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 5,
                        size: 8,
                        maxHealth: 1,
                        bodyDamage: 0.7,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        affects: [effects.toxicPosion],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    injection: {
        name:"injection",
        health: 90,
        speed: 0.9,
        size: 15,
        maxHealth: 60,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 1200,
        guns: [
            {
                pos: 0,
                height: 30,
                ogLength: 0,
                width: 12,
                speed: 250,
                spread: 0,
                recoilMod: 1,
                bullet: {
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
                        health: 40,
                        speed: 8,
                        size: 7,
                        maxHealth: 3,
                        bodyDamage: 0.01,
                        duration: 400,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        affects: [effects.injectionPosion],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    carrion: {
        name:"carrion",
        health: 100,
        speed: 0.9,
        size: 15,
        maxHealth: 100,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 600,
        guns: [
            {
                pos: 0,
                height: 17,
                ogLength: 0,
                width: 10,
                speed: 200,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 30,
                        speed: 7,
                        size: 8,
                        maxHealth: 1,
                        bodyDamage: 1,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        affects: [effects.carrionFreeze],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: -15,
                height: 17,
                ogLength: 0,
                width: 10,
                speed: 200,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 7,
                        size: 8,
                        maxHealth: 1,
                        bodyDamage: 1,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        affects: [effects.carrionFreeze],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 15,
                height: 17,
                ogLength: 0,
                width: 10,
                speed: 200,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 3,
                        speed: 7,
                        size: 8,
                        maxHealth: 1,
                        bodyDamage: 1,
                        duration: 200,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        guns: [],
                        affects: [effects.carrionFreeze],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            }
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    shocky: {
        name:"shocky",
        health: 130,
        speed: 0.85,
        size: 15,
        maxHealth: 150,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.98,
        sight: 500,
        range: 60,
        damageMod: 1,
        guns: [
            {
                pos: 0,
                height: 15,
                ogLength: 0,
                width: 15,
                speed: 15,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 0.5,
                        speed: 4.5,
                        size: 4,
                        maxHealth: 3,
                        bodyDamage: 3,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        guns: [],
                        affects: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 0,
                height: 8,
                rmb: true,
                ogLength: 0,
                width: 15,
                speed: 1900,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 1000,
                        speed: 20,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 0.05,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        penetration:0,
                        guns: [],
                        affects: [effects.shockyStun],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: -10,
                height: 8,
                rmb: true,
                ogLength: 0,
                width: 15,
                speed: 1900,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 1000,
                        speed: 20,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 0.05,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        penetration:0,

                        guns: [],
                        affects: [effects.shockyStun],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: -5,
                height: 8,
                rmb: true,
                ogLength: 0,
                width: 15,
                speed: 1900,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 1000,
                        speed: 20,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 0.05,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        penetration:0,

                        guns: [],
                        affects: [effects.shockyStun],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 5,
                height: 8,
                rmb: true,
                ogLength: 0,
                width: 15,
                speed: 1900,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 1000,
                        speed: 20,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 0.05,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        penetration:0,

                        guns: [],
                        affects: [effects.shockyStun],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 10,
                height: 8,
                rmb: true,
                ogLength: 0,
                width: 15,
                speed: 1900,
                spread: 1,
                recoilMod: 1,
                bullet: {
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
                        health: 1000,
                        speed: 20,
                        size: 8,
                        maxHealth: 3,
                        bodyDamage: 0.05,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        seeking: false,
                        penetration:0,

                        guns: [],
                        affects: [effects.shockyStun],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false,

                },
                recoilVel: 0,
                shootCooldown: 0
            },


        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    megaMine: {
        name:"megaMine",
        health: 300,
        speed: 1.2,
        size: 17,
        invisDur: 300,
        maxHealth: 110,
        bodyDamage: 8,
        duration: Infinity,
        friction: 0.98,
        sight: 800,
        range: 0,
        guns: [

        ],
        CONFIG: {
            showHealthBar: true
        }

    },
    averageJake: {
        name:"megaMine",
        health: 30,
        speed: 1.2,
        size: 17,
        invisDur: 300,
        maxHealth: 110,
        bodyDamage: 0.1,
        duration: Infinity,
        friction: 0.98,
        sight: 800,
        range: 0,
        guns: [

        ],
        exploding:{
            strength:50,
            bullet: {
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
                    health: 40,
                    speed: 4,
                    size: 5,
                    maxHealth: 4,
                    bodyDamage: 1.2,
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

            }
        },
        CONFIG: {
            showHealthBar: true
        }

    },
    auto: {
        name:"auto",
        health: 130,
        speed: 0.9,
        size: 15,
        maxHealth: 100,
        bodyDamage: 0.5,
        duration: Infinity,
        friction: 0.9,
        sight: 600,
        guns: [
            {
                pos: 0,
                height: 25,
                ogLength: 0,
                width: 10,
                speed: 200,
                spread: 3,
                recoilMod: 1,
                auto:true,
                bullet: {
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
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 180,
                height: 25,
                ogLength: 0,
                width: 10,
                speed: 200,
                spread: 3,
                recoilMod: 1,
                auto:true,
                bullet: {
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
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 90,
                height: 25,
                ogLength: 0,
                width: 10,
                speed: 200,
                spread: 3,
                recoilMod: 1,
                auto:true,
                bullet: {
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
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                pos: 270,
                height: 25,
                ogLength: 0,
                width: 10,
                speed: 200,
                spread: 3,
                recoilMod: 1,
                auto:true,
                bullet: {
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
                recoilVel: 0,
                shootCooldown: 0
            },
        ],
        CONFIG: {
            showHealthBar: true
        }
    },
    

}

var bossBuilds = {}


let mothershipDroneGun = {
    pos: 0,
    height: 25,
    width: 25,
    spread: 3,
    speed:700,
    recoilMod: 1,
    autoShoot:true,
    bullet: {
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
            name:"Mothership Drone",
            health: 60,
            speed: 0.5,
            size: 10,
            shape:8,
            maxHealth: 100,
            bodyDamage: 0.5,
            duration: 5000,
            friction: 0.98,
            sight: 1000,
            range:800,
            bot:true,
            drone:true,

            guns: [
                {
                    pos: 0,
                    height: 17,
                    ogLength: 0,
                    width: 10,
                    speed: 300,
                    spread: 3,
                    recoilMod: 1,
                    
                    bullet: {
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
                            health: 10,
                            speed: 8,
                            size: 8,
                            maxHealth: 1.5,
                            bodyDamage: 1.3,
                            duration: 300,
                            friction: 1,
                            baseValue: 0,
                            sight: 0,
                            teamPenetration:0,
                            guns: [],
                            CONFIG: {
                                showHealthBar: false
                            }
                        },
                        autoSpin: false,
                        autoShoot: false,
                        bot: false

                    },
                    recoilVel: 0,
                    shootCooldown: 0
                }
            ],
            CONFIG: {
                showHealthBar: true
            }
        },
        autoSpin: false,
        autoShoot: false,
        bot: false

    },
    recoilVel: 0,
    shootCooldown: 0
}
let mothershipAutoGun = {
    pos: 0,
    height: 30,
    ogLength: 0,
    width: 10,
    speed: 48,
    spread: 3,
    recoilMod: 1,
    auto:true,
    bullet: {
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
            health: 3.5,
            speed: 8,
            size: 6,
            maxHealth: 3,
            bodyDamage: 1.3,
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
        autoShoot: true,
        bot: false

    },
    recoilVel: 0,

    shootCooldown: 0
}

bossBuilds.mothership = {
        name:"mothership",
        boss:true,
        health: 1200,
        speed: 0.7,
        size: 60,
        shape:8,
        maxHealth: 100,
        bodyDamage: 0.9,
        duration: Infinity,
        friction: 0.98,
        sight: 1000,
        range:500,
        droneCap:7,
        turningSpeed:0.03,
        guns: [
            {
                pos: 0,
                height: 20,
                ogLength: 0,
                width: 75,
                speed: 300,
                spread: 3,
                recoilMod: 1,
                bullet: {
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
                        health: 150,
                        speed: 6,
                        size: 30,
                        bodyDamage: 3.5,
                        duration: 300,
                        friction: 1,
                        baseValue: 0,
                        sight: 0,
                        teamPenetration:0,
                        guns: [],
                        CONFIG: {
                            showHealthBar: false
                        }
                    },
                    autoSpin: false,
                    autoShoot: false,
                    bot: false

                },
                recoilVel: 0,
                shootCooldown: 0
            },
            {
                ...mothershipAutoGun,
                pos:65,
            },
            {
                ...mothershipAutoGun,
                pos:-65,
            },
            {
                ...mothershipDroneGun,
                pos:180,
                offset:45
            },
            {
                ...mothershipDroneGun,
                pos:180,
                offset:-45
            },
            {
                ...mothershipDroneGun,
                pos:180,
                offset:15
            },
            {
                ...mothershipDroneGun,
                pos:180,
                offset:-15
            },
            
        ],
        CONFIG: {
            showHealthBar: true
        }
}









let gunShipAutoGun = {
    pos: 0,
    height: 30,
    ogLength: 0,
    width: 10,
    speed: 20,
    spread: 3,
    recoilMod: 0.3,
    auto:true,
    bullet: {
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
            health: 3.5,
            speed: 8,
            size: 6,
            maxHealth: 3,
            bodyDamage: 1.3,
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
        autoShoot: true,
        bot: false

    },
    recoilVel: 0,

    shootCooldown: 0
}


bossBuilds.gunShip = {
    name:"gunShip",
    boss:true,
    health: 2000,
    speed: 0.7,
    size: 60,
    shape:8,
    maxHealth: 100,
    bodyDamage: 0.9,
    duration: Infinity,
    friction: 0.98,
    sight: 1000,
    range:200,
    droneCap:7,
    turningSpeed:0,
    guns: [
        {
            ...gunShipAutoGun,
            pos:0,
        },
        {
            ...gunShipAutoGun,
            pos:36,
        },
        {
            ...gunShipAutoGun,
            pos:72,
        },
        {
            ...gunShipAutoGun,
            pos:108,
        },
        {
            ...gunShipAutoGun,
            pos:144,
        },
        {
            ...gunShipAutoGun,
            pos:180,
        },
        {
            ...gunShipAutoGun,
            pos:216,
        },
        {
            ...gunShipAutoGun,
            pos:252,
        },
        {
            ...gunShipAutoGun,
            pos:288,
        },
        {
            ...gunShipAutoGun,
            pos:324,
        },
        
    ],
    CONFIG: {
        showHealthBar: true
    }
}