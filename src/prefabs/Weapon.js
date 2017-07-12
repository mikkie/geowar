import Utils from '../common/Utils.js';

export default class Weapon {

    constructor(game) {
        this.game = game;

        var bmd = this.game.make.bitmapData(12, 12);
        var ctx = bmd.ctx;
        ctx.beginPath();
        ctx.fillStyle = Utils.generateRandomColor();
        ctx.arc(6, 6, 6, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();

        this.weapon = this.game.add.weapon(30, bmd);

        //  The bullet will be automatically killed when it leaves the world bounds
        this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

        //  The speed at which the bullet is fired
        this.weapon.bulletSpeed = 400;

        //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
        this.weapon.fireRate = 60;

        //  Add a variance to the bullet speed by +- this value
        this.weapon.bulletSpeedVariance = 200;
    }


    trackSprite(sprite, x, y, rotation){
        this.weapon.trackSprite(sprite, x, y, rotation);   
    }


    fire(){
        this.weapon.fire();
    }

}