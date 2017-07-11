export default class Player extends Phaser.Sprite {

    constructor(game, x, y, width, height, color, shape) {
        super(game, x, y, game.make.bitmapData(width, height));
        this.canvas = this.key;
        this.color = color;
        this.shape = shape;

        this.draw();

        this.speed = 300;
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
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

    update(){
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        this.body.angularVelocity = 0;

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.body.angularVelocity = -200;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.body.angularVelocity = 200;
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.game.physics.arcade.velocityFromAngle(this.angle - 90, 300, this.body.velocity);
        }
        else if(this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            this.game.physics.arcade.velocityFromAngle(this.angle + 90, 300, this.body.velocity);
        }
    }

}