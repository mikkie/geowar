export default class Player extends Phaser.Sprite {

    constructor(game, x, y, width, height, color, weaponFactory) {
        super(game, x, y, game.make.bitmapData(width, height));
        this.canvas = this.key;
        this.color = color;
        
        this.draw();

        this.speed = 300;
        this.angle = -90;
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.drag.set(60);

        this.weaponFactory = weaponFactory;
        this.createWeapon();
    }


    draw() {
        var ctx = this.canvas.ctx;
        //body
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(0, 0);
        ctx.lineTo(this.canvas.height, this.canvas.height / 2);
        ctx.lineTo(0, this.canvas.height);
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

    update() {
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
            this.game.physics.arcade.velocityFromAngle(this.angle, 300, this.body.velocity);
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.game.physics.arcade.velocityFromAngle(this.angle, 300, this.body.velocity);
        }

        if (this.fireButton.isDown) {
            this.weapon.fire();
        }
    }

    createWeapon() {
        this.weapon = this.weaponFactory.createWeapon('dirt');

        this.weapon.trackSprite(this, this.width / 2, 0, true);

        this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    }

}