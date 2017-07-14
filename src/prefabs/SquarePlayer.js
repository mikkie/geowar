import Player from './Player.js';
import CanvasHelper from '../common/CanvasHelper.js';
import playerJson from '../textures/squareplayer.json';

export default class SquarePlayer extends Player {

    draw() {
        // var ctx = this.canvas.ctx;
        // //body
        // ctx.beginPath();
        // ctx.fillStyle = this.color;
        // ctx.moveTo(0, 0);
        // ctx.lineTo(this.canvas.height, 0);
        // ctx.lineTo(this.canvas.height, this.canvas.height);
        // ctx.lineTo(0, this.canvas.height);
        // ctx.closePath();
        // ctx.fill();
        // //head
        // ctx.beginPath();
        // ctx.lineWith = 2;
        // ctx.strokeStyle = this.color;
        // ctx.moveTo(this.canvas.height, this.canvas.height / 2);
        // ctx.lineTo(this.canvas.width, this.canvas.height / 2);
        // ctx.closePath();
        // ctx.stroke();
        new CanvasHelper(this.canvas,playerJson).drawTexture();
    }

}