import Utils from '../../common/Utils.js';
import CanvasHelper from '../../common/CanvasHelper.js';
import weaponJson from '../../textures/weapons/weapon.json';

export default class Weapon {

    constructor(game) {
        this.game = game;
        this.speed = 500;
        this.shotInterval = 300;
        this.bulletGate = 0;
        this.bulletGroup = this.game.add.group();
        this.createBullet();
        this.createWeapon();
    }


    createBullet() {
        this.bmd = this.game.make.bitmapData(12, 12);
        new CanvasHelper(this.bmd, weaponJson).drawTexture();
    }


    createWeapon() {
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


    fire(player) {
        if(this.game.time.now > this.bulletGate){
            var bullet = this.bulletGroup.getFirstDead();
            var pos = this.initBulletPosition(player);
            if (bullet) {
                bullet.x = pos.x;
                bullet.y = pos.y;
                bullet.revive();
            }
            else {
                bullet = this.bulletGroup.create(pos.x, pos.y, this.bmd);
                this.game.physics.p2.enable(bullet);
                bullet.outOfBoundsKill = true;
                bullet.checkWorldBounds = true;
            }
            var v = this.initBulletVelocity(player);
            bullet.body.velocity.x = v.x;
            bullet.body.velocity.y = v.y;

            this.bulletGate = this.game.time.now + this.shotInterval; 
        }
    }


    initBulletVelocity(player){
        var angle = player.body.angle;
        var v = 400;
        var x = Math.sin(angle * Math.PI / 180) * this.speed;
        var y = Math.cos(angle * Math.PI / 180) * this.speed * -1;
        return {
            x : x,
            y : y
        };     
    };


    initBulletPosition(player) {
        var headToBodyCenter = player.width / 2 + 5;
        var angle = player.body.angle;
        var x = player.x + Math.sin(angle * Math.PI / 180) * headToBodyCenter;
        var y = player.y - Math.cos(angle * Math.PI / 180) * headToBodyCenter;
        return {
            x: x,
            y: y
        };
    };

}