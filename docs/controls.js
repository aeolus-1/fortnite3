var mouse = {
    x:0,
    y:0,
    down:false,
}
var keys = {

}

function mousemove(e) {
    mouse.x = e.offsetX
    mouse.y = e.offsetY
}
document.onkeydown = function(e) {
    keys[e.key] = true
    console.log(e.key)
}
document.onkeyup = function(e) {
    keys[e.key] = false
}
document.onmousedown = function(e) {
    mouse.down = true
}
document.onmouseup = function(e) {
    mouse.down = false
}

document.addEventListener("mousemove", mousemove)



function runKeys() {

    if (mouse.down) {
        Tank.shoot(player1)
    }
    if (keys[" "]) {
        Tank.shoot(player1, true)
    }
    for (let i = 0; i < players.length; i++) {
        let player = players[i];

        let movement = v(0, 0)

        if (keys[player.controls[0]]) movement.y += 1
        if (keys[player.controls[1]]) movement.y -= 1
        if (keys[player.controls[2]]) movement.x += 1
        if (keys[player.controls[3]]) movement.x -= 1

        if (movement.x != 0 || movement.y != 0) {

            let angle = getAngle(v(0,0), movement)
            
            player.vel.x += Math.cos(angle) * 0.2 * player.build.speed
            player.vel.y += Math.sin(angle) * 0.2 * player.build.speed

            
        }
    }

    
}