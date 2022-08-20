var cbuild = (prompt(Object.keys(badBuilds)) || "mine")
var player1 = new mob(v(0,0), badBuilds[cbuild]),
    player2 = new mob(v(500,0), badBuilds.megaMine)


Chat.submitMsg(`Started as ${cbuild.toUpperCase()}`)

player1.player = true
player1.shotBy = player1

player2.player = true
player2.shotBy = player2

player1.team = "#f0f"
player2.team = "#f0f"


player2.controls = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
player2.bot.active = true

players.push(player1)
//players.push(player2)



//genMobs(200)
genMobs(1, 300)