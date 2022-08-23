var mainChunks = new Chunks({})

var player1 = new mob(v(0,0), JSON.parse(JSON.stringify(badBuilds["starter"])), "#666")

var builds = Object.keys(badBuilds)
for (let i = 0; i < builds.length; i++) {
    const build = builds[i];
    var mainDiv = createElementFromHTML(`<div class="selection"><canvas id="canvas-${build}"></canvas><br>${build}</div>`)
    document.body.append(mainDiv)
    var c = document.getElementById(`canvas-${build}`),
        ctx = c.getContext("2d")
    ctx.translate(c.width/2, c.height/2)
    Mob.render(
        new mob(v(0,0), JSON.parse(JSON.stringify(badBuilds[build])), "#666"),
        ctx
    )

    mainDiv.onclick = ()=>{
        window.open(`game.html#${build}`,"_self")
    }
}