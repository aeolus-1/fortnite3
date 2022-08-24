var mainChunks = new Chunks({})

var player1 = new mob(v(0,0), JSON.parse(JSON.stringify(badBuilds["starter"])), "#666"),

    basicBin = document.getElementById("basicBin"),
    bossBin = document.getElementById("bossBin")

var builds = Object.keys(badBuilds)
for (let i = 0; i < builds.length; i++) {
    const build = builds[i];
    var mainDiv = createElementFromHTML(`<div class="selection"><canvas id="canvas-${build}"></canvas><br>${build}</div>`)
    basicBin.append(mainDiv)
    var c = document.getElementById(`canvas-${build}`)
    c.ctx = c.getContext("2d")
    c.ctx.translate(c.width/2, c.height/2)
    c.ctx.scale(1.35, 1)
    c.mobile = new mob(v(0,0), JSON.parse(JSON.stringify(badBuilds[build])), "#666")
    c.mobile.rotation = randInt(0, 360)
    c.mobile.build.CONFIG.showHealthBar = false
    Mob.render(
        c.mobile,
        c.ctx
    )

    mainDiv.onclick = ()=>{
        window.open(`game.html#${build}`,"_self")
    }
}

var builds = Object.keys(bossBuilds)
for (let i = 0; i < builds.length; i++) {
    const build = builds[i];
    var mainDiv = createElementFromHTML(`<div class="selection"><canvas id="canvas-${build}"></canvas><br>${build}</div>`)
    bossBin.append(mainDiv)
    var c = document.getElementById(`canvas-${build}`)
    c.ctx = c.getContext("2d")
    c.ctx.translate(c.width/2, c.height/2)
    c.ctx.scale(1.35, 1)
    c.mobile = new mob(v(0,0), JSON.parse(JSON.stringify(bossBuilds[build])), "#666")
    c.mobile.rotation = randInt(0, 360)
    c.mobile.build.CONFIG.showHealthBar = false
    Mob.render(
        c.mobile,
        c.ctx
    )

    mainDiv.onclick = ()=>{
        window.open(`game.html#2${build}`,"_self")
    }
}

















function rotate() {
    var builds = Object.keys(badBuilds)
    for (let i = 0; i < builds.length; i++) {
        const build = builds[i];
        var c = document.getElementById(`canvas-${build}`)
        c.width = c.width
        c.ctx.translate(c.width/2, c.height/2)
        c.ctx.scale(1.35, 1)
        c.mobile.rotation += 0.02

        Mob.render(
            c.mobile,
            c.ctx
        )
    }
}

setInterval(rotate, 1000/60)