class mob {
    constructor(pos, build, team=teams[randInt(0, teams.length-1)]) {
        this.pos = pos
        this.id = newId()


        this.vel = v(0, 0)

        this.controls = ["w", "s", "a", "d"]

        this.chunkPos = mainChunks.posToChunkPos(this.pos)

        this.chunk = mainChunks.requestChunk(this.chunkPos.x, this.chunkPos.y)

        mainChunks.insertMob(this.chunk.pos.x, this.chunk.pos.y, this)

        this.team = team

        this.build = testObjectForUndefined(build, buildDefaultProps)

        for (let i = 0; i < this.build.guns.length; i++) {
            this.build.guns[i] = testObjectForUndefined(this.build.guns[i], gunDefaultProps)
        }
        
        this.rotation = 90
        this.ai = {
            target:v(0,0)
        }

        this.unload = false

        this.bot = {
            active:false,

            movingDirection:0,
            moving:false,
        }


        this.build.maxHealth = this.build.health

        this.drones = []

        this.invisA = this.build.invisDur
        this.alpha = 1

        this.effects = {}


    }
    
}

var eMob = mob

var Mob = {
    update:function(mob){


        mob.chunk = mainChunks.requestChunk(mob.chunkPos.x, mob.chunkPos.y)

        this.move(mob, v(mob.pos.x+(mob.vel.x*deltaTime), mob.pos.y+(mob.vel.y*deltaTime)))

        var f = 1-((1-mob.build.friction)*1.5)

        mob.vel.x *= Math.pow(f, deltaTime)
        mob.vel.y *= Math.pow(f, deltaTime)


        for (let i = 0; i < mob.build.guns.length; i++) {
            let gun = mob.build.guns[i]
            if (gun.shootCooldown > 0) gun.shootCooldown -= 1 * 3 * deltaTime
        }



        var d = getDistance(v(0,0), mob.vel)
        

        if (mob.build.invisDur != 0) {
            mob.invisA += (d*5)

            mob.invisA = clamp(mob.invisA-1, 0, mob.build.invisDur)
            mob.alpha = mob.invisA/mob.build.invisDur
        }
        var keys = Object.keys(mob.effects)
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i],
                effect = mob.effects[key]

            effect.duration -= 1 * deltaTime
            if (effect.duration < 0) {
                delete mob.effects[key]
            } else {
                mob.build.health -= effect.damage*2
            }
        }







        if (mob.build.duration > 0 && mob.build.duration != undefined) {

            if (mob.build.duration != Infinity && !mob.player) {
                mob.build.duration -= 1 * deltaTime
            } 
        } else {
            Mob.kill(mob)
            mob.unload = true
        }

        if (mob.build.health <= 0) {
            Mob.kill(mob)
            mob.unload = true
        }

        if (mob.build.drone) {
            var a = getAngle(mob.shotBy.target, mob.pos)
            mob.vel.x += Math.cos(a)*mob.build.speed*0.05
            mob.vel.y += Math.sin(a)*mob.build.speed*0.05

        }

        
        

        

    },
    spawn(pos=v(0,0), mobM=new mob(v(0,0), builds.starter), chunkArray=mainChunks) {
        
        chunkM = mainChunks.requestChunk(mobM.chunkPos.x, mobM.chunkPos.y)
        
        mainChunks.insertMob(mobM.chunkPos.x, mobM.chunkPos.y, mobM)

     },
     kill(mob) {
         if (mob.build.exploding && !mob.unload) {
            console.log("boom")
            Mob.explode(mob)

         }
     },
     explode(mob) {
         
        if (mob.build.exploding) {
            for (let i = 0; i < mob.build.exploding.strength; i++) {
                let tbullet = new eMob(v(0,0), JSON.parse(JSON.stringify(mob.build.exploding.bullet.build)))



                tbullet.pos = {
                    ...mob.pos
                }
                tbullet.team = mob.team
                tbullet.shotBy = mob.shotBy
                tbullet.isBullet = true
                tbullet.build.autoShoot = true
                tbullet.rotation = ((360 / mob.build.exploding.strength) * i)*(Math.PI/180)



                var a = (mob.rotation + (((360 / mob.build.exploding.strength) * i)*(Math.PI/180)))
                tbullet.vel.x += Math.cos(a)*mob.build.exploding.strength
                tbullet.vel.y += Math.sin(a)*mob.build.exploding.strength

            }
        }
    },
    runCollisions(mob1,mob2) {
            if (getDistance(mob1.pos, mob2.pos) < mob1.build.size+mob2.build.size) {
                let angle = getAngle(mob2.pos, mob1.pos),
                    strength = Math.pow(1/clamp(getDistance(mob2.pos, mob1.pos), 0.1, 100), 1.1)*10
                
                    var p = ((mob1.team == mob2.team)?
                    mob2.build.teamPenetration * mob1.build.teamPenetration:
                    mob2.build.penetration * mob1.build.penetration)

                    var a = ((mob1.team == mob2.team)?
                    mob1.build.teamAffects:
                    mob1.build.affects)

                    for (let i = 0; i < a.length; i++) {
                        Mob.applyAffect(mob2, a[i])
                        
                    }

                    mob2.vel.x += (Math.cos(angle) * strength * (mob1.build.size/10)) * deltaTime * 0.15 * p
                    mob2.vel.y += (Math.sin(angle) * strength * (mob1.build.size/10)) * deltaTime * 0.15 * p

                    

                    if (mob1.team != mob2.team) {mob2.build.health -= mob1.build.bodyDamage * deltaTime}
                    
            
        }
    },

    applyAffect(mobM, affect) {
        var a = testObjectForUndefined(affect, defaultAffectProps),
            e = mobM.effects,
            id = a.id
        
        if (affect.stacks) {
            id = id + `${newId()}`
        }
        e[id] = {...a}
        console.log(e, id)
    },

    move(mob, pos) {
        let preChunk = {...mob.chunk}
        mob.pos = pos
        mob.chunkPos = mainChunks.posToChunkPos(mob.pos)


        console.log(mob.chunkPos)
        let newChunk = mainChunks.requestChunk(mob.chunkPos.x, mob.chunkPos.y)


        if ((preChunk && mob.chunk) && preChunk.id != newChunk.id) {
            mob.chunk = newChunk
            

            mainChunks.removeMob(preChunk.pos.x, preChunk.pos.y, mob)
            mainChunks.insertMob(mob.chunk.pos.x, mob.chunk.pos.y, mob)
        }
    },
    render(mob, ctx) {

        ctx.save()
        ctx.globalAlpha = mob.alpha

        for (let i = 0; i < mob.build.guns.length; i++) {
            let gun = mob.build.guns[i];
            ctx.save()

            ctx.translate(mob.pos.x, mob.pos.y)
            ctx.rotate((mob.rotation + (gun.pos * (Math.PI/180))))
            ctx.translate(-mob.pos.x, -mob.pos.y)
            

            ctx.fillStyle = "#000000"
            ctx.fillRect(mob.pos.x+(mob.build.size*0.8), mob.pos.y - ((gun.width) / 2), (gun.height*1.5), gun.width)
            ctx.strokeStyle = "#707070"
            ctx.lineWidth = 2

            ctx.restore()
        }

        ctx.fillStyle = mob.team

        ctx.beginPath()
        ctx.arc(mob.pos.x, mob.pos.y, mob.build.size, 0, Math.PI*2)
        ctx.closePath()
        ctx.fill()
        ctx.strokeStyle = pSBC(-0.5, mob.team)
        ctx.lineWidth = 2
        ctx.stroke()

        let length = 25,
            width = 5,
            height = 20

        if (!mob.build.isBullet) {

            ctx.fillStyle = "#696969"
            ctx.fillRect(mob.pos.x-(length/2), mob.pos.y-height-width, length, width)

            ctx.fillStyle = "#7fff7f"
            ctx.fillRect(mob.pos.x-(length/2), mob.pos.y-height-width, length*(mob.build.health/mob.build.maxHealth), width)
        }
            

ctx.restore()
    },
    runAi(mob) {
        if (mob.bot.active) {
            if (bots[mob.build.name] != undefined) {
                bots[mob.build.name](mob)

            } else if (mob.build.guns.length != 0) {
                bots["starter"](mob)

            }
        }

        if (mob.build.autoShoot) {
            Tank.shoot(mob)
        }
    }
}

var Tank = {
    shoot(mobM, rmb=false) {
        
        for (let i = 0; i < mobM.build.guns.length; i++) {
            let gun = mobM.build.guns[i]
            var d = [...mobM.shotBy.drones],
                dl = d.length
            for (let i = 0; i < dl; i++) {
                const drone = d[i];
                if (drone.unload) {
                    mobM.shotBy.drones.splice(i, 1)
                }
            }
            if (gun.shootCooldown <= 0 && gun.rmb == rmb && ((gun.bullet.build.drone)?(mobM.shotBy.drones.length<mobM.build.droneCap):true)) {
                let bulletPos = v(
                    mobM.pos.x+(Math.cos(mobM.rotation+(gun.pos*(Math.PI/180)))*(gun.height*1.5)),
                    mobM.pos.y+(Math.sin(mobM.rotation+(gun.pos*(Math.PI/180)))*(gun.height*1.5))
                )

                let bullet = new mob(bulletPos, JSON.parse(JSON.stringify(gun.bullet.build)), mobM.team)
                    
                var randomMovement = (randInt(-gun.spread, gun.spread)/300)*Math.PI*2

                    
                var angle = ((gun.pos+180)*(Math.PI/180))+mobM.rotation
                mobM.vel.x += Math.cos(angle)*gun.recoilMod*0.01
                mobM.vel.y += Math.sin(angle)*gun.recoilMod*0.01

                bullet.vel = v(
                    Math.cos(randomMovement+mobM.rotation+(gun.pos*(Math.PI/180)))*(gun.height*1.5)*0.05*bullet.build.speed,
                    Math.sin(randomMovement+mobM.rotation+(gun.pos*(Math.PI/180)))*(gun.height*1.5)*0.05*bullet.build.speed
                )
                bullet.vel.x += mobM.vel.x*0.15
                bullet.vel.y += mobM.vel.y*0.15

                bullet.rotation = mobM.rotation

                bullet.build.isBullet = true

                bullet.shotBy = mobM.shotBy

                Mob.spawn(bulletPos, bullet, mainChunks)
                
                gun.shootCooldown = gun.speed

                if (bullet.build.drone) {
                    mobM.shotBy.drones.push(bullet)
                }

            } 

        }

    },
    getRenderData(mob) {

        let gunData = []
        for (let i = 0; i < mob.build.guns.length; i++) {
            const gun = mob.build.guns[i];
            gunData.push({
                height:gun.height,
                width:gun.width,
                pos:gun.pos
            })
        }

        return {
            id:mob.id,
            pos:mob.pos,
            size:mob.build.size,
            team:mob.team,
            rotation:mob.rotation,
            
            guns:gunData,
            
        }


    }
}
