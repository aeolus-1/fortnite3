function v(x=0, y=0) {
    return {x:x,y:y}
}

function rotate(t, n, e) {
    var r = e,
      o = Math.cos(r),
      u = Math.sin(r);
    return {
      x: o * (n.x - t.x) + u * (n.y - t.y) + t.x,
      y: o * (n.y - t.y) - u * (n.x - t.x) + t.y,
    };
  }
  function stopOverflow(t, n) {
    return ((t % n) + n) % n;
  }
  function angleDiff(angle1, angle2) {
    var diff = ( angle2 - angle1 + 180 ) % 360 - 180;
    return diff < -180 ? diff + 360 : diff;
  }
  function xmur3(t) {
    for (var n = 0, e = 1779033703 ^ t.length; n < t.length; n++)
      e = ((e = Math.imul(e ^ t.charCodeAt(n), 3432918353)) << 13) | (e >>> 19);
   return function () {
      return (
        (e = Math.imul(e ^ (e >>> 16), 2246822507)),
        (e = Math.imul(e ^ (e >>> 13), 3266489909)),
        ((e ^= e >>> 16) >>> 0) / 45e8
      );
    };
  }
  function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
}
var pSBC = (p, c0, c1, l) => {
    let r, g, b, P, f, t, h, i = parseInt,
        m = Math.round,
        a = typeof(c1) == "string";
    if (typeof(p) != "number" || p < -1 || p > 1 || typeof(c0) != "string" || (c0[0] != 'r' && c0[0] != '#') || (c1 && !a)) return null;
    if (!this.pSBCr) this.pSBCr = (d) => {
        let n = d.length,
            x = {};
        if (n > 9) {
            [r, g, b, a] = d = d.split(","), n = d.length;
            if (n < 3 || n > 4) return null;
            x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4)), x.g = i(g), x.b = i(b), x.a = a ? parseFloat(a) : -1
        } else {
            if (n == 8 || n == 6 || n < 4) return null;
            if (n < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : "");
            d = i(d.slice(1), 16);
            if (n == 9 || n == 5) x.r = d >> 24 & 255, x.g = d >> 16 & 255, x.b = d >> 8 & 255, x.a = m((d & 255) / 0.255) / 1000;
            else x.r = d >> 16, x.g = d >> 8 & 255, x.b = d & 255, x.a = -1
        }
        return x
    };
    h = c0.length > 9, h = a ? c1.length > 9 ? true : c1 == "c" ? !h : false : h, f = this.pSBCr(c0), P = p < 0, t = c1 && c1 != "c" ? this.pSBCr(c1) : P ? {
        r: 0,
        g: 0,
        b: 0,
        a: -1
    } : {
        r: 255,
        g: 255,
        b: 255,
        a: -1
    }, p = P ? p * -1 : p, P = 1 - p;
    if (!f || !t) return null;
    if (l) r = m(P * f.r + p * t.r), g = m(P * f.g + p * t.g), b = m(P * f.b + p * t.b);
    else r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5), g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5), b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5);
    a = f.a, t = t.a, f = a >= 0 || t >= 0, a = f ? a < 0 ? t : t < 0 ? a : a * P + t * p : 0;
    if (h) return "rgb" + (f ? "a(" : "(") + r + "," + g + "," + b + (f ? "," + m(a * 1000) / 1000 : "") + ")";
    else return "#" + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2)
}

function clamp(num, min, max) {
    if (num > max) {
        num = max
    }
    if (num < min) {
        num = min
    }
    return num
}
function inBounds(num, min, max) {
    if (num > max) {
        return false
    } else if (num < min) {
        return false
    } else {
        return true
    }
}

var nextId = 0
function newId() {
    return self.crypto.randomUUID()
}

function randInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function getDistance(a, b) {
    let xd = (a.x - b.x)
    let yd = (a.y - b.y)
    return Math.sqrt(Math.pow(xd, 2) + Math.pow(yd, 2))
}

function getAngle(a, b) {
    return -Math.atan2(a.x - b.x, a.y - b.y) + (Math.PI*0.5)
}