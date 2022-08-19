


var player1 = new mob(v(-500,0), badBuilds[(prompt("build") || "sniper")]),
    player2 = new mob(v(50,0), builds.starter)

player1.player = true
player1.shotBy = player1


player2.controls = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]


players.push(player1)
players.push(player2)



genMobs(10)