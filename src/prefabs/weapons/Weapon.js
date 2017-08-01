import Utils from '../../common/Utils.js';
import CanvasHelper from '../../common/CanvasHelper.js';
import weaponJson from '../../textures/weapons/weapon.json';

export default class Weapon {

    constructor(game,player) {
        this.game = game;
        this.player = player;
        this.speed = 500;
        this.shotInterval = 50;
        this.bulletGate = 0;
        this.bulletGroup = this.game.add.group();
        this.createBullet();
    }


    createBullet() {
        this.bmd = this.game.make.bitmapData(12, 12);
        new CanvasHelper(this.bmd, weaponJson).drawTexture();
    }


    fire() {
        if (this.game.time.now > this.bulletGate) {
            var bullet = this.bulletGroup.getFirstDead();
            var pos = this.initBulletPosition();
            if (bullet) {                   
                bullet.body.x = pos.x;
                bullet.body.y = pos.y;
                var v = this.initBulletVelocity();
                bullet.body.velocity.x = v.x;
                bullet.body.velocity.y = v.y;
                bullet.revive();
            }
            else {
                var bullet = this.bulletGroup.create(pos.x, pos.y, this.bmd);
                bullet.isBullet = true;
                this.game.physics.p2.enable(bullet);
                bullet.checkWorldBounds = true;
                bullet.body.collideWorldBounds = false;
                bullet.events.onOutOfBounds.add(this.bulletOutOfBounds, this);
                var v = this.initBulletVelocity();
                bullet.body.velocity.x = v.x;
                bullet.body.velocity.y = v.y;
                this.collideSetting(bullet);
            }

            this.bulletGate = this.game.time.now + this.shotInterval;
        }
    }

    collideSetting(bullet) {
        bullet.body.setCollisionGroup(this.game.geowar.bulletCollisionGroup);
        bullet.body.collides([this.game.geowar.playerCollisionGroup, this.game.geowar.bulletCollisionGroup]);
        bullet.body.onBeginContact.add(this.bulletContact,this);
    };

    bulletContact(otherBody) {
        //only kill the player
        if (otherBody && otherBody.sprite && typeof /Player/i.test(otherBody.sprite.constructor.name)) {
            if (otherBody.sprite != this.player){
                //not kill, directly kick player out
                otherBody.sprite.destroy();
            }
        }
    };


    bulletOutOfBounds(bullet) {
        bullet.kill();
    };


    initBulletVelocity() {
        var angle = this.player.body.angle;
        var v = 400;
        var x = Math.sin(angle * Math.PI / 180) * this.speed;
        var y = Math.cos(angle * Math.PI / 180) * this.speed * -1;
        return {
            x: x,
            y: y
        };
    };


    initBulletPosition() {
        var headToBodyCenter = this.player.width / 2 + 5;
        var angle = this.player.body.angle;
        var x = this.player.x + Math.sin(angle * Math.PI / 180) * headToBodyCenter;
        var y = this.player.y - Math.cos(angle * Math.PI / 180) * headToBodyCenter;
        return {
            x: x,
            y: y
        };
    };


    destroy(){
        this.bulletGroup.destroy();
    }

}