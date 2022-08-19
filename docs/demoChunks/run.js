function mainloop() {

    Mob.update(jacob)

    requestAnimationFrame(renderLoop)
}
function mousemove(e) {
    Mob.move(jacob, v(e.offsetX-(window.innerWidth/2), e.offsetY-(window.innerHeight/2)))
}
document.addEventListener("mousemove", mousemove)

setInterval(mainloop, 10)