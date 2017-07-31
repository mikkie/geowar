import Utils from '../../common/Utils.js';
import CanvasHelper from '../../common/CanvasHelper.js';
import weaponJson from '../../textures/weapons/weapon.json';

export default class Weapon {

    constructor(game) {
        this.game = game;
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


    fire(player) {
        if (this.game.time.now > this.bulletGate) {
            var bullet = this.bulletGroup.getFirstDead();
            var pos = this.initBulletPosition(player);
            if (bullet) {                   
                bullet.x = pos.x;
                bullet.y = pos.y;
                bullet.revive();
            }
            else {
                bullet = this.bulletGroup.create(pos.x, pos.y, this.bmd);
                bullet.isBullet = true;
                this.game.physics.p2.enable(bullet);
                bullet.checkWorldBounds = true;
                bullet.body.collideWorldBounds = false;
                bullet.events.onOutOfBounds.add(this.bulletOutOfBounds, this);
                var v = this.initBulletVelocity(player);
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
        bullet.body.onBeginContact.add(this.bulletContact);
    };

    bulletContact(otherBody) {
        //only kill the player
        if (otherBody && otherBody.sprite && typeof otherBody.sprite.isCurrentPlayer == 'function') {
            if (!otherBody.sprite.isCurrentPlayer()) {
                otherBody.sprite.kill();
            }
        }
    };


    bulletOutOfBounds(bullet) {
        bullet.kill();
    };


    initBulletVelocity(player) {
        var angle = player.body.angle;
        var v = 400;
        var x = Math.sin(angle * Math.PI / 180) * this.speed;
        var y = Math.cos(angle * Math.PI / 180) * this.speed * -1;
        return {
            x: x,
            y: y
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