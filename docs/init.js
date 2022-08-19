var player1 = new mob(v(0,0), badBuilds[(prompt(Object.keys(badBuilds)) || "sniper")])
    //player2 = new mob(v(50,0), builds.starter)

player1.player = true
player1.shotBy = player1


//player2.controls = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]


players.push(player1)
//players.push(player2)



genMobs(200)