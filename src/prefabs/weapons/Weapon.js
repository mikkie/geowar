import Utils from '../../common/Utils.js';
import CanvasHelper from '../../common/CanvasHelper.js';
import weaponJson from '../../textures/weapons/weapon.json';

export default class Weapon {

    constructor(game) {
        this.game = game;
        this.createBullet();
        this.createWeapon();
    }


    createBullet() {
        this.bmd = this.game.make.bitmapData(12, 12);
        new CanvasHelper(this.bmd,weaponJson).drawTexture();
    }


    createWeapon(){
        this.weapon = this.game.add.weapon(30, this.bmd);

        //  The bullet will be automatically killed when it leaves the world bounds
        this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

        //  The speed at which the bullet is fired
        this.weapon.bulletSpeed = 400;

        //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
        this.weapon.fireRate = 60;

        //  Add a variance to the bullet speed by +- this value
        this.weapon.bulletSpeedVariance = 200;
    }


    trackSprite(sprite, x, y, rotation) {
        this.weapon.trackSprite(sprite, x, y, rotation);
    }


    fire() {
        this.weapon.fire();
    }

}