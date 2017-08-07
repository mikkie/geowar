import Utils from './Utils.js';

export default class CanvasHelper {

    constructor(canvas, json, colorSet) {
        this.canvas = canvas;
        this.texture = json;
        this.colorSet = colorSet;
    }

    drawTexture() {
        this.ctx = this.canvas.ctx;
        this.ctx.beginPath();
        for (var key in this.texture) {
            this.updateCtxProp(this.texture[key].ctxProp);
            for (var i in this.texture[key].draw) {
                var part = this.texture[key].draw[i];
                var x = this.parseExpress(part.x);
                var y = this.parseExpress(part.y);
                if (part.drawType == 'move') {
                    this.ctx.moveTo(x, y);
                }
                else if (part.drawType == 'line') {
                    this.ctx.lineTo(x, y);
                }
                else if (part.drawType == 'arc') {
                    var radius = this.parseExpress(part.radius);
                    var arc = this.parseExpress(part.arc);
                    this.ctx.arc(x, y, radius, 0, arc, false);
                }
            }
            this.ctx.closePath();
            if (this.texture[key].style == 'stroke') {
                this.ctx.strokeStyle = this.getColor(key);
                this.ctx.stroke();
            }
            else if (this.texture[key].style == 'fill') {
                this.ctx.fillStyle = this.getColor(key);
                this.ctx.fill();
            }
        }
    }


    updateCtxProp(ctxProp) {
        if (ctxProp) {
            for (var k in ctxProp) {
                this.ctx[k] = ctxProp[k];
            }
        }
    }



    getColor(key) {
        if (this.colorSet && this.colorSet[key]) {
            return this.colorSet[key];
        }
        return Utils.generateRandomColor();
    }


    parseExpress(pos) {
        if (/\$\{.*\}/.test(pos)) {
            pos = pos.replace(/canvas.height/gi, this.canvas.height).replace(/canvas.width/gi, this.canvas.width);
            pos = pos.substring(2, pos.length - 1);
            pos = eval(pos);
            return pos;
        }
        return pos
    }

}