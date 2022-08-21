var text = "Select Build:"
for (let i = 0; i < Object.keys(badBuilds).length; i++) {
    const key = Object.keys(badBuilds)[i];
    text = text + `\n- ${key}`
}

var cbuild = (prompt(text))
while (badBuilds[cbuild] == undefined) {
    alert("not an build")
    cbuild = (prompt(text))
}
var player1 = new mob(v(1500,150), badBuilds[cbuild])
    //player2 = new mob(v(2000,0), bossBuilds.mothership)


Chat.submitMsg(`Started as ${cbuild.toUpperCase()}`)

player1.player = true
player1.shotBy = player1

cameraTarget = player1

player1.team = "#f0f"
/*player2.team = "#ff0"


player2.player = true
player2.shotBy = player2





player2.controls = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
player2.bot.active = true
*/


players.push(player1)
//players.push(player2)

players.push(spawnMob(v(1200,0), bossBuilds.mothership, "#f0f"))
genMobs(6, 100, v(1500,0), "#f0f")


players.push(spawnMob(v(-1200,0), bossBuilds.mothership, "#ff0"))
genMobs(6, 100, v(-1500,0), "#ff0")
