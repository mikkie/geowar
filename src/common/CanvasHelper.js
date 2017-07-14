import Utils from './Utils.js';

export default class CanvasHelper{

    constructor(canvas,json,colorSet){
        this.canvas = canvas;
        this.texture = json;
        this.colorSet = colorSet;  
    }

    drawTexture() {
        var ctx = this.canvas.ctx;
        ctx.beginPath();
        for (var key in this.texture) {
            for (var i in this.texture[key].draw) {
                var part = this.texture[key].draw[i];
                var x = this.parseExpress(part.x);
                var y = this.parseExpress(part.y);
                if (part.drawType == 'move') {
                    ctx.moveTo(x, y);
                }
                else if (part.drawType == 'line') {
                    ctx.lineTo(x, y);
                }
            }
            ctx.closePath();
            if (this.texture[key].style == 'stroke') {
                ctx.strokeStyle = this.getColor(key);
                ctx.stroke();
            }
            else if (this.texture[key].style == 'fill') {
                ctx.fillStyle = this.getColor(key);
                ctx.fill();
            }
        }
    }



    getColor(key){
       if(this.colorSet && this.colorSet[key]){
          return this.colorSet[key]; 
       }
       return Utils.generateRandomColor();
    }


    parseExpress(pos){
       if(isNaN(pos) && /\$\{.*\}/.test(pos)){
          pos = pos.replace(/canvas.height/gi,this.canvas.height).replace(/canvas.width/gi,this.canvas.width); 
          pos = pos.substring(2,pos.length - 1);
          pos = eval(pos);
          return pos;   
       }
       return pos 
    }

}