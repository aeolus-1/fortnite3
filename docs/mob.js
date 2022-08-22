class mob {
    constructor(pos, build, team = teams[randInt(0, teams.length - 1)]) {
        this.pos = pos;
        this.id = newId();

        this.vel = v(0, 0);

        this.controls = ["w", "s", "a", "d"];

        this.chunkPos = mainChunks.posToChunkPos(this.pos);

        this.chunk = mainChunks.requestChunk(this.chunkPos.x, this.chunkPos.y);

        mainChunks.insertMob(this.chunk.pos.x, this.chunk.pos.y, this);

        this.team = team;

        this.build = testObjectForUndefined(build, buildDefaultProps);

        this.build.duration += randInt(-5, 5);

        for (let i = 0; i < this.build.guns.length; i++) {
            this.build.guns[i] = testObjectForUndefined(
                this.build.guns[i],
                gunDefaultProps
            );
        }

        this.rotation = 90;
        this.ai = {
            target: v(0, 0),
        };

        this.unload = false;

        this.bot = {
            active: this.build.bot,

            movingDirection: 0,
            movingStrength: 0,
            moving: false,
        };
        this.boss = this.build.boss;

        this.build.maxHealth = this.build.health;

        this.drones = [];

        this.invisA = this.build.invisDur;
        this.alpha = 1;

        this.effects = {};
        this.effectsConfig = {
            speed: 1,
            reloadSpeed: 1,
        };

        
        this.enemyPlayers = new Array()
    }
}

var eMob = mob;

var Mob = {
    update: function (mob) {
        mob.rotation = stopOverflow(mob.rotation, Math.PI*2)
        var r = mob.vel.x;

        mob.chunk = mainChunks.requestChunk(mob.chunkPos.x, mob.chunkPos.y);

        if (!mob.stunned)
            this.move(
                mob,
                v(mob.pos.x + mob.vel.x * deltaTime, mob.pos.y + mob.vel.y * deltaTime)
            );

        var f = 1 - (1 - mob.build.friction) * 1.5;

        mob.vel.x *= Math.pow(f, deltaTime);
        mob.vel.y *= Math.pow(f, deltaTime);

        //==================================================================

        for (let i = 0; i < mob.build.guns.length; i++) {
            let gun = mob.build.guns[i];
            if (gun.shootCooldown > 0)
                gun.shootCooldown -= 1 * 3 * deltaTime * mob.effectsConfig.reloadSpeed;
        }

        var d = getDistance(v(0, 0), mob.vel);

        if (d < 0.2) {
            //mob.build.health = clamp(mob.build.health*1.0025, 0, mob.build.maxHealth)
        }

        if (mob.build.invisDur != 0) {
            mob.invisA += Math.pow(d, 5) / 100;

            mob.invisA = clamp(mob.invisA - 1, 0, mob.build.invisDur);
            mob.alpha = mob.invisA / mob.build.invisDur;
        }

        mob.stunned = false;
        mob.effectsConfig = {
            speed: 1,
            reloadSpeed: 1,
        };

        var keys = Object.keys(mob.effects);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i],
                effect = mob.effects[key];

            effect.duration -= 1 * deltaTime;
            if (effect.duration < 0) {
                delete mob.effects[key];
            } else {
                mob.effectsConfig.reloadSpeed /= effect.freeze;
                Mob.damage(mob, effect.damage * 2 * deltaTime, effect.shotBy);
                if (effect.stun && (mob.player || mob.bot.active)) mob.stunned = true;
            }
        }

        if (mob.build.duration > 0 && mob.build.duration != undefined) {
            if (mob.build.duration != Infinity && !mob.player) {
                mob.build.duration -= 1 * deltaTime;
            }
        } else {
            Mob.kill(mob);
            mob.unload = true;
        }

        if (mob.build.health <= 0) {
            Mob.kill(mob);
            mob.unload = true;
        }

        if (mob.build.drone && !mob.bot.active) {
            var a = getAngle(mob.shotBy.target, mob.pos);
            Mob.setAngle(mob, a)
            mob.vel.x += Math.cos(a) * mob.build.speed * 0.05;
            mob.vel.y += Math.sin(a) * mob.build.speed * 0.05;
        }

        if (mob.bot.active) {
            mob.bot.movingDirection = mob.bot.movingDirection || 0;
            Mob.moveMobiles(mob, mob.bot.movingDirection, mob.bot.movingStrength);
        }
    },
    damage(mob, damage, shotBy) {
        var h = mob.build.health;
        mob.build.health = clamp(mob.build.health - damage, 0, mob.build.maxHealth);
        if (h > 0 && mob.build.health <= 0) {
            if (mob.id == cameraTarget.id) {
                Chat.submitMsg(`Died by ${shotBy.build.name.toUpperCase()}'s hands`);
                cameraTarget = shotBy;
                players.push(shotBy);
            }
            if (shotBy.id == cameraTarget.id) {
                Chat.submitMsg(`Killed ${mob.build.name.toUpperCase()}`);
            }
            if (mob.player && mob.team == player1.team) {
                Chat.submitMsg(`${mob.build.name.toUpperCase()} was killed`);
            }
        }
    },
    setAngle(mob, angle) {
        var targetA = angle/(Math.PI/180),
            currentA = mob.rotation/(Math.PI/180)

        if (!mob.stunned) mob.rotation -= clamp((angleDiff(targetA, currentA))*(Math.PI/180)*mob.build.turningSpeed, -1, 1)
    },
    spawn(
        pos = v(0, 0),
        mobM = new mob(v(0, 0), builds.starter),
        chunkArray = mainChunks
    ) {
        chunkM = mainChunks.requestChunk(mobM.chunkPos.x, mobM.chunkPos.y);

        mainChunks.insertMob(mobM.chunkPos.x, mobM.chunkPos.y, mobM);
    },
    kill(mob) {
        if (mob.build.exploding && !mob.unload) {
            Mob.explode(mob);
        }
        if (mob.drones.length > 0) {
            for (let i = 0; i < mob.drones.length; i++) {
                const drone = mob.drones[i];
                drone.build.health = 0;
                console.log(drone)
            }
        }
    },
    explode(mob) {
        if (mob.build.exploding) {
            for (let i = 0; i < mob.build.exploding.strength; i++) {
                let tbullet = new eMob(
                    { ...mob.pos },
                    JSON.parse(JSON.stringify(mob.build.exploding.bullet.build))
                );

                tbullet.team = mob.team;
                tbullet.shotBy = mob.shotBy;
                tbullet.isBullet = true;
                tbullet.build.autoShoot = true;
                tbullet.rotation =
                    (360 / mob.build.exploding.strength) * i * (Math.PI / 180);

                var a =
                    mob.rotation +
                    (360 / mob.build.exploding.strength) * i * (Math.PI / 180);
                tbullet.vel.x += Math.cos(a) * mob.build.exploding.strength;
                tbullet.vel.y += Math.sin(a) * mob.build.exploding.strength;
            }
        }
    },
    runCollisions(mob1, mob2) {
        if (getDistance(mob1.pos, mob2.pos) < mob1.build.size + mob2.build.size) {
            let angle = getAngle(mob2.pos, mob1.pos),
                strength =
                    Math.pow(1 / clamp(getDistance(mob2.pos, mob1.pos), 0.1, 100), 1.1) *
                    10;

            var p =
                mob1.team == mob2.team
                    ? mob2.build.teamPenetration * mob1.build.teamPenetration
                    : mob2.build.penetration * mob1.build.penetration;

            var a =
                mob1.team == mob2.team ? mob1.build.teamAffects : mob1.build.affects;
            for (let i = 0; i < a.length; i++) {
                Mob.applyAffect(mob2, a[i], mob1.shotBy);
            }

            mob2.vel.x +=
                Math.cos(angle) *
                strength *
                (mob1.build.size / 10) *
                deltaTime *
                0.15 *
                p;
            mob2.vel.y +=
                Math.sin(angle) *
                strength *
                (mob1.build.size / 10) *
                deltaTime *
                0.15 *
                p;

            if (mob1.team != mob2.team) {
                Mob.damage(mob2, mob1.build.bodyDamage * deltaTime, mob1.shotBy);

                mob2.invisA += Math.pow(mob1.build.bodyDamage * deltaTime, 5);
            }
        }
    },
    applyAffect(mobM, affect, shotBy) {
        var a = testObjectForUndefined(affect, defaultAffectProps),
            e = mobM.effects,
            id = a.id;

        if (affect.stacks) {
            id = id + `${newId()}`;
        }
        e[id] = { ...a, shotBy: shotBy };
    },
    move(mob, pos) {
        let preChunk = { ...mob.chunk };
        mob.pos = pos;
        mob.chunkPos = mainChunks.posToChunkPos(mob.pos);

        let newChunk = mainChunks.requestChunk(mob.chunkPos.x, mob.chunkPos.y);

        if (preChunk && mob.chunk && preChunk.id != newChunk.id) {
            mob.chunk = newChunk;

            mainChunks.removeMob(preChunk.pos.x, preChunk.pos.y, mob);
            mainChunks.insertMob(mob.chunk.pos.x, mob.chunk.pos.y, mob);
        }
    },
    render(mob, ctx) {
        ctx.save();

        if (mob.stunned) {
            ctx.translate(randInt(-4, 4), randInt(-4, 4));
        }

        ctx.globalAlpha =
            mob.team == player1.team ? (mob.alpha + 0.2) * 0.8333333333 : mob.alpha;

        for (let i = 0; i < mob.build.guns.length; i++) {
            let gun = mob.build.guns[i];
            ctx.save();

            ctx.translate(mob.pos.x, mob.pos.y);
            ctx.rotate(mob.rotation + gun.pos * (Math.PI / 180));
            ctx.translate(-mob.pos.x, -mob.pos.y);

            if (gun.auto) {
                ctx.translate(mob.pos.x + mob.build.size, mob.pos.y);
                ctx.rotate(gun.rotation);
                ctx.translate(-(mob.pos.x + mob.build.size), -mob.pos.y);
            }

            ctx.fillStyle = "#000000";
            ctx.fillRect(
                mob.pos.x + (gun.height * 0.3) + (mob.build.size * 0.8) - (gun.auto?0:mob.build.size),
                mob.pos.y - gun.width / 2 + gun.offset,
                gun.height+(gun.auto?0:mob.build.size),
                gun.width
            );
            ctx.strokeStyle = "#707070";
            ctx.lineWidth = 2;

            if (gun.auto) {
                ctx.beginPath();
                ctx.arc(
                    mob.pos.x + mob.build.size,
                    mob.pos.y,
                    gun.width * 0.7,
                    0,
                    Math.PI * 2
                );
                ctx.closePath();
                ctx.fillStyle = "#000";
                ctx.strokeStyle = "#999";
                ctx.stroke();
                ctx.fill();
            }

            ctx.restore();
        }

        ctx.fillStyle = mob.team;
        ctx.save();
        ctx.beginPath();

        if (mob.build.shape != 1) {
            var numberOfSides = mob.build.shape,
                size = mob.build.size,
                Xcenter = mob.pos.x,
                Ycenter = mob.pos.y;
            ctx.translate(Xcenter, Ycenter);
            ctx.rotate(mob.rotation + Math.PI * 0.25 + 5 * (Math.PI / 180));
            ctx.translate(-Xcenter, -Ycenter);

            ctx.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

            for (var i = 1; i <= numberOfSides; i += 1) {
                ctx.lineTo(
                    Xcenter + size * Math.cos((i * 2 * Math.PI) / numberOfSides),
                    Ycenter + size * Math.sin((i * 2 * Math.PI) / numberOfSides)
                );
            }
        } else {
            ctx.arc(mob.pos.x, mob.pos.y, mob.build.size, 0, Math.PI * 2);
        }
        ctx.closePath();
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.strokeStyle = pSBC(-0.5, mob.team);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        let length = 25,
            width = 5,
            height = 20;

        if (mob.build.CONFIG.showHealthBar) {
            ctx.fillStyle = "#696969";
            ctx.fillRect(
                mob.pos.x - length / 2,
                mob.pos.y - height - width - mob.build.size,
                length,
                width
            );

            ctx.fillStyle = "#7fff7f";
            ctx.fillRect(
                mob.pos.x - length / 2,
                mob.pos.y - height - width - mob.build.size,
                length * (mob.build.health / mob.build.maxHealth),
                width
            );
        }

        ctx.restore();
    },
    runAi(mob) {
        if (!mob.stunned) {
            if (mob.bot.active) {
                //console.log(mob.build.name)
                if (mob.build.guns.length != 0) {
                    bots["basic"](mob);

                }
                if (bots[mob.build.name] != undefined) {
                    bots[mob.build.name](mob);
                } 
            }
            if (mob.bot.active && mob.build.drone) {
                var dst = getDistance(mob.pos, mob.shotBy.pos);
                //console.log(dst)
                if (dst > 400) {
                    mob.bot.movingStrength = 1;
                    mob.bot.movingDirection = getAngle(mob.pos, mob.shotBy.pos) + Math.PI;
                }
            }

            if (mob.build.seeking) {
                if (mob.closestEnemy != undefined) {
                    var a = getAngle(mob.closestEnemy.pos, mob.pos);

                    mob.vel.x += Math.cos(a) * mob.build.speed * 0.2 * deltaTime;
                    mob.vel.y += Math.sin(a) * mob.build.speed * 0.2 * deltaTime;
                }
            }

            if (mob.build.autoShoot) {
                Tank.shoot(mob);
            }
            for (let i = 0; i < mob.build.guns.length; i++) {
                const gun = mob.build.guns[i];
                if (gun.autoShoot) {
                    Tank.shootGun(mob, gun, gun.rmb);
                }
                if (gun.auto) {
                    var gunPos = v(
                        mob.pos.x +
                        Math.cos(mob.rotation + gun.pos * (Math.PI / 180)) *
                        mob.build.size,
                        mob.pos.y +
                        Math.sin(mob.rotation + gun.pos * (Math.PI / 180)) *
                        mob.build.size
                    )
                    var closeEn = { dst: Infinity, en: undefined }
                    for (let i = 0; i < mob.enemyPlayers.length; i++) {
                        const enMob = mob.enemyPlayers[i];
                        if (enMob.player || enMob.bot.active) {
                            var a = Math.abs(angleDiff(
                                getAngle(gunPos,enMob.pos,)/(Math.PI / 180),
                                ((mob.rotation + (gun.pos * (Math.PI / 180)))/(Math.PI / 180))-180
                            ))
                            if (a < 95) {
                                var dst = getDistance(enMob.pos, gunPos)
                                if (dst < closeEn.dst) {
                                    closeEn.dst = dst
                                    closeEn.en = enMob
                                }
                            }
                        }
                    }
                    if (closeEn.en != undefined) {
                        var en = closeEn.en

                        var m = 1,
                            addedVel = v((-mob.vel.x)*deltaTime*m, (mob.vel.y)*deltaTime*m)


                        var newPos = Bot.leadMovingTarget(mob.pos, en.pos, addedVel, gun.bullet.build.speed*deltaTime)

                        var a = (getAngle(newPos,
                            v(
                                mob.pos.x +
                                Math.cos(mob.rotation + gun.pos * (Math.PI / 180)) *
                                mob.build.size,
                                mob.pos.y +
                                Math.sin(mob.rotation + gun.pos * (Math.PI / 180)) *
                                mob.build.size
                            )
                        ) - (mob.rotation)) - (gun.pos * (Math.PI / 180))
                        gun.rotation = a
                        Tank.shootGun(mob, gun, false)
                    
                    }

                    
                }
            }
            if (mob.build.autoSpin) {
                mob.rotation += 1.5 * (Math.PI / 180) * deltaTime;
            }
        }
    },
    moveMobiles(mob, angle, strength) {
        strength = clamp(strength, -1, 1); //*(mob.player?0.3:1)

        mob.vel.x += Math.cos(angle) * mob.build.speed * 0.2 * deltaTime * strength;
        mob.vel.y += Math.sin(angle) * mob.build.speed * 0.2 * deltaTime * strength;
    },
};

var Tank = {
    shootGun(mobM, gun, rmb) {
        var d = [...mobM.shotBy.drones],
            dl = d.length;
        for (let i = 0; i < dl; i++) {
            const drone = d[i];
            if (drone.unload) {
                mobM.shotBy.drones.splice(i, 1);
            }
        }
        if (
            gun.shootCooldown <= 0 &&
            gun.rmb == rmb &&
            (gun.bullet.build.drone
                ? mobM.shotBy.drones.length < mobM.build.droneCap
                : true)
        ) {
            var offsetPos = v(
                Math.cos(mobM.rotation + gun.pos * (Math.PI / 180) + Math.PI * 0.5) *
                gun.offset,
                Math.sin(mobM.rotation + gun.pos * (Math.PI / 180) + Math.PI * 0.5) *
                gun.offset
            );
            let bulletPos = v(
                mobM.pos.x +
                Math.cos(mobM.rotation + gun.pos * (Math.PI / 180)) *
                (gun.height * 1.5) +
                offsetPos.x,
                mobM.pos.y +
                Math.sin(mobM.rotation + gun.pos * (Math.PI / 180)) *
                (gun.height * 1.5) +
                offsetPos.y
            );

            bulletPos = rotate(
                v(
                    mobM.pos.x +
                    Math.cos(mobM.rotation + gun.pos * (Math.PI / 180)) *
                    mobM.build.size,
                    mobM.pos.y +
                    Math.sin(mobM.rotation + gun.pos * (Math.PI / 180)) *
                    mobM.build.size
                ),
                bulletPos,
                -gun.rotation
            );

            let bullet = new mob(
                bulletPos,
                JSON.parse(JSON.stringify(gun.bullet.build)),
                mobM.team
            );

            if (!bullet.build.drone && !bullet.bot.active) {
                bullet.build.teamPenetration = 0;
            }

            var randomMovement =
                (randInt(-gun.spread, gun.spread) / 300) * Math.PI * 2;

            var angle =
                (gun.pos + 180) * (Math.PI / 180) +
                mobM.rotation +
                gun.rotation;

            var bulletMod = (bullet.build.size / 15) * (bullet.build.speed / 3);

            mobM.vel.x += Math.cos(angle) * gun.recoilMod * 0.4 * bulletMod;
            mobM.vel.y += Math.sin(angle) * gun.recoilMod * 0.4 * bulletMod;

            bullet.vel = v(
                Math.cos(
                    randomMovement +
                    mobM.rotation +
                    gun.pos * (Math.PI / 180) +
                    gun.rotation
                ) *
                (gun.height * 1.5) *
                0.05 *
                bullet.build.speed,
                Math.sin(
                    randomMovement +
                    mobM.rotation +
                    gun.pos * (Math.PI / 180) +
                    gun.rotation
                ) *
                (gun.height * 1.5) *
                0.05 *
                bullet.build.speed
            );
            bullet.vel.x += mobM.vel.x * 0.15;
            bullet.vel.y += mobM.vel.y * 0.15;

            bullet.rotation = mobM.rotation;

            bullet.build.isBullet = true;

            bullet.shotBy = mobM.shotBy;


            gun.shootCooldown = gun.speed;
            if (bullet.build.drone) {
                mobM.shotBy.drones.push(bullet);
            }
        }
    },
    shoot(mobM, rmb = false) {
        if (!mobM.stunned) {
            for (let i = 0; i < mobM.build.guns.length; i++) {
                let gun = mobM.build.guns[i];
                Tank.shootGun(mobM, gun, rmb);
            }
        }
    },
    getRenderData(mob) {
        let gunData = [];
        for (let i = 0; i < mob.build.guns.length; i++) {
            const gun = mob.build.guns[i];
            gunData.push({
                height: gun.height,
                width: gun.width,
                pos: gun.pos,
            });
        }

        return {
            id: mob.id,
            pos: mob.pos,
            size: mob.build.size,
            team: mob.team,
            rotation: mob.rotation,

            guns: gunData,
        };
    },
};
