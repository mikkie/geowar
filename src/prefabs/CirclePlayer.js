import Player from './Player.js';

export default class CirclePlayer extends Player {

    draw() {
        var ctx = this.canvas.ctx;
        //body
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(15, 15, 14, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
        //head
        ctx.beginPath();
        ctx.lineWith = 2;
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.canvas.height, this.canvas.height / 2);
        ctx.lineTo(this.canvas.width, this.canvas.height / 2);
        ctx.closePath();
        ctx.stroke();
    }

}