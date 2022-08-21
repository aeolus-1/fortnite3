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

function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false; }
  }
var mobi = isMobile()
if (mobi) {
    var touch = {pos:v(),start:v(),down:false}
    document.addEventListener("touchstart", (e)=>{
        touch.down = true
        touch.start.x = e.touches[0].clientX
        touch.start.y = e.touches[0].clientY
    })
    document.addEventListener("touchend", (e)=>{
        touch.down = false
        
    })
    document.addEventListener("touchmove", (e)=>{
        touch.pos.x = e.touches[0].clientX
        touch.pos.y = e.touches[0].clientY
    })
}

function runKeys() {

    if (mobi && touch.down) {
        var a = getAngle(touch.start, touch.pos)+Math.PI
        player1.rotation = a
        Mob.moveMobiles(player1, a, 1)
        Tank.shoot(player1)
    }

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
            
            Mob.moveMobiles(player1, angle, 1)


        }
    }

    
}