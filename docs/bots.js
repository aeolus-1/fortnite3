var bots = {
    classRammer(mob) {

    },
    allAi(mob) {
        if (mob.closestFriend) {
            var smol = {dst:Infinity,en:undefined}
            for (let i = 0; i < mob.closestFriend.length; i++) {
                const fri = mob.closestFriend[i];
                var dst = getDistance(fri.pos, mob.pos)
                if (dst < smol.dst) {
                    smol.dst = dst
                    smol.en = fri
                }
            }
            if (smol.en != undefined) {
                var dst = getDistance(smol.en.pos, mob.pos)
                if (dst < 50 && smol.en.id != mob.id) {
                    mob.bot.movingDirection = getAngle(smol.en.pos, mob.pos)+(Math.PI*0.5)
                }
            }
        }
    },
    basic(mob) {
        if (mob.closestEnemyPlayer != undefined){

            let dst = getDistance(mob.pos, mob.closestEnemyPlayer.pos)

            if (mob.home && !mob.home.unload) {
                if (mob.bot.retreat && !mob.boss) {
                    if (mob.home) {
                        if (getDistance(mob.home.pos, mob.pos) > 250) {
                            var a = getAngle(mob.home.pos, mob.pos)
                            mob.bot.movingDirection = a
                            mob.bot.movingStrength = 1
                            mob.rotation = a
                        } else {
                            mob.bot.movingStrength = 0
                        }
                    } else {
                        var a = getAngle(mob.closestEnemyPlayer.pos, mob.pos)+Math.PI
                        mob.bot.movingDirection = a
                        mob.rotation = a
                    }
                    if (mob.build.health/mob.build.maxHealth>0.95&&!mob.boss) {
                        mob.bot.retreat = false
                    }
                } else if (mob.build.health/mob.build.maxHealth<0.45&&!mob.boss) {
                    mob.bot.retreat = true
                    
                }
            }

            if (dst < mob.build.sight*4) {
                mob.bot.moving = true
                if (!mob.bot.retreat) {
                    mob.bot.movingDirection = getAngle(mob.closestEnemyPlayer.pos, mob.pos)
                    mob.bot.movingStrength = 1

                }// + (Math.PI*(retreat?1:0))
                mob.rotation = getAngle(mob.closestEnemyPlayer.pos, mob.pos)
                
            } 
            var rangeDst = dst-mob.build.range
            if (Math.abs(rangeDst)> 50) {
                mob.bot.movingStrength = Math.sign(rangeDst)
            }
            if (mob.closestEnemy != undefined){
                if (mob.closestEnemy.id != mob.closestEnemyPlayer.id) {
                    var enDst = getDistance(mob.closestEnemy.pos, mob.pos)
                    if (enDst < 100 && !mob.boss) {
                        mob.bot.movingDirection = getAngle(mob.closestEnemy.pos, mob.pos)+(Math.PI)
                        mob.bot.movingStrength = 1

                    }
                }
            }


            
            
            var m = 0.5
            let addedVel = v((mob.closestEnemyPlayer.vel.x+mob.vel.x)*m*deltaTime, (mob.closestEnemyPlayer.vel.y+mob.vel.y)*m*deltaTime)
            
            let bulletSpeed = mob.build.guns[0].bullet.build.speed*deltaTime

            let newPos = Bot.leadMovingTarget(mob.pos, mob.closestEnemyPlayer.pos, addedVel, bulletSpeed)
            if (newPos == null) newPos = mob.closestEnemyPlayer.pos

            Mob.setAngle(mob, getAngle(newPos, mob.pos))
            mob.target = {...newPos}

            if (dst < mob.build.sight*0.85) {
                Tank.shoot(mob)
            }
            
            
        } else if (mob.closestFriend) {

            Bot.moveToAverage(mob)

        }
        

        //console.log(mob.bot.movingDirection)
    },

    heals(mob) {
        function fight() {
            if (mob.closestEnemyPlayer != undefined) {
                let dst = getDistance(mob.pos, mob.closestEnemyPlayer.pos)
                if (dst < mob.build.sight) {
                    mob.bot.moving = true
                    mob.bot.movingDirection = getAngle(mob.closestEnemyPlayer.pos, mob.pos)
                } 
                var rangeDst = dst-mob.build.range
                if (Math.abs(rangeDst)> 50) {
                    mob.bot.movingStrength = Math.sign(rangeDst)
                }
                if (mob.closestEnemyPlayer != undefined){
                    if (mob.closestEnemy.id != mob.closestEnemyPlayer.id) {
                        var enDst = getDistance(mob.closestEnemy.pos, mob.pos)
                        if (enDst < 100) {
                            mob.bot.movingDirection = getAngle(mob.closestEnemy.pos, mob.pos)+(Math.PI)
                            mob.bot.movingStrength = 1

                        }
                    }
                }


                
                
                var m = 0.2
                let addedVel = v((mob.closestEnemyPlayer.vel.x+mob.vel.x)*m*deltaTime, (mob.closestEnemyPlayer.vel.y+mob.vel.y)*m*deltaTime)
                
                let bulletSpeed = mob.build.guns[0].bullet.build.speed*deltaTime

                let newPos = Bot.leadMovingTarget(mob.pos, mob.closestEnemyPlayer.pos, addedVel, bulletSpeed)
                if (newPos == null) newPos = mob.closestEnemyPlayer.pos
                Mob.setAngle(mob, getAngle(newPos, mob.pos))
                mob.target = {...newPos}

                if (dst < mob.build.range) {
                    Tank.shoot(mob)
                }
            } else {
                mob.bot.movingStrength = 0
            }
            
            
        
        }  
        
        if (mob.closestFriend) {
            var lowestHealth = {en:undefined,health:Infinity}
            for (let i = 0; i < mob.closestFriend.length; i++) {
                const fri = mob.closestFriend[i];
                if (fri.id != mob.id) {
                    var friHealth = fri.build.health/fri.build.maxHealth
                    if (friHealth < lowestHealth.health) {
                        lowestHealth.en = fri
                        lowestHealth.health = friHealth
                    }
                }
            }
            if (lowestHealth.en && lowestHealth.health < 0.9) {
                var dst = getDistance(lowestHealth.en.pos, mob.pos)
                if (dst > 150) {
                    mob.bot.movingDirection = getAngle(lowestHealth.en.pos, mob.pos)//+(Math.PI)
                    mob.bot.movingStrength = 1
                }
                Mob.setAngle(mob, getAngle(lowestHealth.en.pos, mob.pos))
                Tank.shoot(mob)

            } else {
                if (mob.closestEnemyPlayer != undefined) {
                    fight()
                } else {
                    Bot.moveToAverage(mob)
                }
                
                    
                
            }
            

        } else {
            fight()
        }
        

        


        
    },

    motherShipHeals(mob) {
        
        
        
        if (mob.closestFriend) {
            
            var lowestHealth = {en:undefined,health:Infinity}
            for (let i = 0; i < mob.closestFriend.length; i++) {
                const fri = mob.closestFriend[i];

                if (fri.id != mob.id) {
                    var date = Math.floor(new Date().getTime()/5000),
                        hash = (xmur3(`${date}-${mob.id}-${fri.id}`)()*200)-100

                    var friHealth = fri.build.health/fri.build.maxHealth

                    if (friHealth < lowestHealth.health && getDistance(fri.pos, mob.pos) < 150) {
                        lowestHealth.en = fri
                        lowestHealth.health= friHealth
                    }
                }
            }
            if (lowestHealth.en && lowestHealth.health < 0.95) {
                var dst = getDistance(lowestHealth.en.pos, mob.pos)
                if (dst > 150) {
                    //lowestHealth.en.build.size += 0.05
                    mob.bot.movingDirection = getAngle(lowestHealth.en.pos, mob.pos)//+(Math.PI)
                    mob.bot.movingStrength = 1
                }
                Mob.setAngle(mob, getAngle(lowestHealth.en.pos, mob.pos))
                Tank.shoot(mob)

            }
        }
    },


    megaMine(mob) {

        if (mob.closestEnemyPlayer != undefined){

            let dst = getDistance(mob.pos, mob.closestEnemyPlayer.pos)

            mob.bot.moving = true
            mob.bot.movingDirection = getAngle(mob.closestEnemyPlayer.pos, mob.pos)

            mob.bot.movingStrength = (dst<200)?1:0.05


            
        } else if (mob.closestFriend) {
            Bot.moveToAverage(mob)
        }

        
    }
}