

// Mobiles will require
// .pos ? v()
// .chunkPos ? v()
// .id ? newId()





function chunkArray2d(e, t, n = {}, r = v(1, 1), c) {
    let a = new Array(e);
    for (let e = 0; e < a.length; e++) {
        a[e] = new Array(t);
        for (let t = 0; t < a[e].length; t++)
            a[e][t] = new cChunk(v(e * r.x, t * r.y), c);
    }
    return { array: a, data: n };
}
function tileArray2d(e, t, n, r, c) {

    let a = new Array(e);
    for (let e = 0; e < a.length; e++) {
        a[e] = new Array(t);
        for (let t = 0; t < a[e].length; t++)
            a[e][t] = new cTile(
                e + (n * c.options.rows),
                t + (r * c.options.columns)
            );
    }
    return a;
}

function getTileValue(x, y) {


    var config = {
	greenLandWidth:40, // Width of the non-wasteland
	
	landSectionWidth:20, // Height of water/land sections
	shallowWaterFrequency:3, // Frequency of shallow water
    }


    var val = "grass"


    // Shallow Water
    if ((Math.floor((y-12)/config.landSectionWidth) % config.shallowWaterFrequency) == 0) {
        val = "water"
    }

    // Wasteland
    if (Math.abs(x)>(config.greenLandWidth/2) ) {
	val = "wasteland"
    }
    return val



    /*
t < -5 && (Math.floor(t)%25===0  Math.floor(t+1)%25===0  Math.floor(t+2)%25===0)? this.type = "shallowWater" : 
    e > 9.9  e < -10  t > 9.9 ? this.type = "water" : (t > 6.9 ? this.type = "wasteland" : this.type = "grass")
*/
}

function cTile(e, t, n = !0) {
    this.pos = v(e, t)
    this.type = getTileValue(e, t)

}
function cChunk(e, t) {
    if ((`${e.x}`).includes(".")) {
        throw console.error("position not formated correctkly")
    }
    this.id = newId();
    (this.mobiles = new Array()),
        (this.grid = tileArray2d(t.options.rows, t.options.columns, e.x, e.y, t)),
        (this.pos = e);
}
;
let startingSize = 5;

class Chunks {
    constructor(options) {
        this.options = {
            rows: 5,
            columns: 5,
            width: 120,
            height: 120,
            xSet: 1,
            ySet: 1,
            ...options,
        }

        this.chunkMaps = {
            x1y1array: chunkArray2d(startingSize, startingSize, "x1y1", v(1, 1), this),
            x0y1array: chunkArray2d(startingSize, startingSize, "x0y1", v(-1, 1), this),
            x1y0array: chunkArray2d(startingSize, startingSize, "x1y0", v(1, -1), this),
            x0y0array: chunkArray2d(startingSize, startingSize, "x0y0", v(-1, -1), this),
        }
    }
    requestChunk(e, t) {
        let n = e < 0 ? (t < 0 ? "x0y0" : "x0y1") : t < 0 ? "x1y0" : "x1y1",
            r = this.chunkMaps[n + "array"].array;
        let a = e < 0 ? -1 * e : e,
            l = t < 0 ? -1 * t : t;
        return (
            r.length - 1 < a &&
            ((r[a] = new Array()), (r[a][l] = new cChunk(v(e, t), this))),
            null == r[a] && (r[a] = new Array()),
            r[a].length - 1 < l && (r[a][l] = new cChunk(v(e, t), this)),
            null == r[a][l] && (r[a][l] = new cChunk(v(e, t), this)),
            r[a][l]
        );
    }
    requestTile(e, t) {
        let n = v(Math.floor(e / this.options.rows), Math.floor(t / this.options.columns)),
            tileP = v(e - n.x * this.options.rows, t - n.y * this.options.columns)
        return (
            
            this.requestChunk(n.x, n.y).grid[tileP.x][tileP.y]
        );
    }
    requestChunks(e, t, n, r) {
        let a = new Array();
        for (let l = n; l > 0; l--)
            for (let n = 0; n < r; n++) {/*console.log(n, t);*/a.push(this.requestChunk(l + e, n + t));}
        return a;
    }
    getMobiles(e) {
        let t = new Array(),
            n = new Array();
        for (let r = 0; r < e.length; r++) {
            const a = e[r];
            for (let e = 0; e < a.mobiles.length; e++) {
                const n = a.mobiles[e];
                n.chunkPos = a.pos
                t.push(n);
            }
           
        }
        return t
    }
    removeMob(e, t, n) {
        let r = this.requestChunk(e, t);

        for (let e = 0; e < r.mobiles.length; e++) {
            if (r.mobiles[e].id == n.id) {
                r.mobiles.splice(e, 1);
                break;
            }
        }
    }
    insertMob(e, t, n) {
        let r = this.requestChunk(e, t);
        return this.removeMob(e, t, n.id), r.mobiles.push(n), n;
    }
    revaulateMobile(mobile) {
        var tilePos = v(Math.floor(mobile.pos.x/64), Math.floor(mobile.pos.y/64)),
            chunkPos = v(Math.floor(tilePos.x/this.options.rows), Math.floor(tilePos.y/this.options.columns))

        if (!vc(chunkPos, mobile.chunkPos)) {
            this.removeMob(mobile.chunkPos.x, mobile.chunkPos.y, mobile)
            this.insertMob(chunkPos.x, chunkPos.y, mobile)

        }
    }
    posToChunkPos(pos) {
        return v((Math.floor((pos.x/this.options.width)/this.options.rows)), Math.floor((pos.y/this.options.height)/this.options.columns))
    }
};
