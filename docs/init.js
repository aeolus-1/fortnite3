var text = "Select Build:"
for (let i = 0; i < Object.keys(badBuilds).length; i++) {
    const key = Object.keys(badBuilds)[i];
    text = text + `\n- ${key}`
}

var cbuild = location.href.split("#")[1],
    buildDat = badBuilds

if (cbuild == undefined) cbuild = "starter"
if (cbuild[0] == "2") {
    buildDat = bossBuilds
    cbuild = cbuild.slice(1,cbuild.length)
}
while (buildDat[cbuild] == undefined) {

    alert("not an build")
    cbuild = (prompt(text))
}



var player1 = new mob(v(1500,150), buildDat[cbuild])
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

var playerMotherShip = spawnMob(v(1500,0), bossBuilds.mothership, "#f0f")
players.push(playerMotherShip)
genMobs(5, 100, v(1500,0), "#f0f", playerMotherShip)

//var p = spawnMob(v(0,0), badBuilds.booster, "#ff0")
//p.home = spawnMob(v(0,0), badBuilds.destroyer, "#ff0")


