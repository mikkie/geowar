import Utils from '../common/Utils.js';

export default class Player extends Phaser.Sprite {

    constructor(game, x, y, width, height, color, shape) {
        super(game, x, y, game.make.bitmapData(width, height));
        this.canvas = this.key;
        this.color = color;
        this.shape = shape;

        this.draw();

        this.speed = 300;
        this.angle = -90;
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.drag.set(60);

        this.createWeapon();
    }


    draw() {
        if ('triangle' == this.shape) {
            var ctx = this.canvas.ctx;
            //body
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.moveTo(0,0);
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

        if(this.fireButton.isDown){
            this.weapon.fire();
        }
    }
    

    createBullet(){
       var bmd = this.game.make.bitmapData(12, 12);
       var ctx = bmd.ctx;
       ctx.beginPath();
       ctx.fillStyle = Utils.generateRandomColor();
       ctx.arc(6, 6, 6, 0, 2 * Math.PI, false);
       ctx.closePath();
       ctx.fill();
       return bmd;
    }

    createWeapon() {
        //  Creates 30 bullets, using the 'bullet' graphic
        this.weapon = this.game.add.weapon(30, this.createBullet());

        //  The bullet will be automatically killed when it leaves the world bounds
        this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

        //  The speed at which the bullet is fired
        this.weapon.bulletSpeed = 400;

        //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
        this.weapon.fireRate = 60;

        //  Add a variance to the bullet speed by +- this value
        this.weapon.bulletSpeedVariance = 200;

        //  Tell the Weapon to track the 'player' Sprite, offset by 14px horizontally, 0 vertically
        this.weapon.trackSprite(this, this.width / 2, 0, true);

        this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    }

}