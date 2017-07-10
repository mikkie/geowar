export default class Player extends Phaser.Sprite {

    constructor(game, x, y, width, height, color, shape) {
        super(game, x, y, game.make.bitmapData(width, height));
        this.canvas = this.key;
        this.color = color;
        this.shape = shape;
        this.draw();
    }


    draw() {
        if ('triangle' == this.shape) {
            var ctx = this.canvas.ctx;
            //head
            ctx.beginPath();
            ctx.lineWith = 2;
            ctx.strokeStyle = this.color;
            ctx.moveTo(this.canvas.width / 2, 0);
            ctx.lineTo(this.canvas.width / 2, 5);
            ctx.closePath();
            ctx.stroke();
            //body
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.moveTo(this.canvas.width / 2, 5);
            ctx.lineTo(0, this.canvas.height);
            ctx.lineTo(this.canvas.width, this.canvas.height);
            ctx.closePath();
            ctx.fill();
        }
    }

}