import Utils from '../common/Utils.js';

export default class WeaponFactory {

    constructor(game) {
        this.game = game;
    }


    createBasicWeapon() {
        //basic bullet
        var bmd = this.game.make.bitmapData(12, 12);
        var ctx = bmd.ctx;
        ctx.beginPath();
        ctx.fillStyle = Utils.generateRandomColor();
        ctx.arc(6, 6, 6, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();

        //  Creates 30 bullets, using the 'bullet' graphic
        var weapon = this.game.add.weapon(30, bmd);

        //  The bullet will be automatically killed when it leaves the world bounds
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

        //  The speed at which the bullet is fired
        weapon.bulletSpeed = 400;

        //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
        weapon.fireRate = 60;

        //  Add a variance to the bullet speed by +- this value
        weapon.bulletSpeedVariance = 200;

        return weapon;
    }

}