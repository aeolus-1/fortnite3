var Chat = {
    log:new Array(),
    submitMsg(text) {
        Chat.log.push({msg:text})
    },


    render(ctx) {
        ctx.save()
        ctx.translate(0, window.innerHeight)
        ctx.scale(globalScale*2,globalScale*2)
        ctx.translate(0, -window.innerHeight)

        var font = 15
        ctx.font = `${font}px Arial`

        for (let i = 0; i < Chat.log.length; i++) {
            const log = Chat.log[i];
            ctx.fillText(log.msg, 10,(window.innerHeight-10)-(i*font))
        }
        ctx.restore()
    }
}

