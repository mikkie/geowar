import Utils from '../../common/Utils.js';
import CanvasHelper from '../../common/CanvasHelper.js';
import weaponJson from '../../textures/weapons/weapon.json';

export default class Weapon {

    constructor(game, player) {
        this.game = game;
        this.player = player;
        this.speed = 500;
        this.shotInterval = 50;
        this.bulletGate = 0;
        this.bulletGroup = this.game.add.group();
        this.bulletCounts = this.game.geowar.initBulletCount;
        this.createBullet();
    }


    createBullet() {
        this.bmd = this.game.make.bitmapData(12, 12);
        new CanvasHelper(this.bmd, weaponJson, { body: this.player.colorSet.head }).drawTexture();
    }


    fire() {
        if (this.game.time.now > this.bulletGate && this.bulletCounts > 0) {
            var bullet = this.bulletGroup.getFirstDead();
            var pos = this.initBulletPosition();
            if (bullet) {
                bullet.bid = Utils.generateRandomNumber();
                bullet.body.x = pos.x;
                bullet.body.y = pos.y;
                var v = this.initBulletVelocity();
                bullet.body.velocity.x = v.x;
                bullet.body.velocity.y = v.y;
                bullet.revive();
            }
            else {
                var bullet = this.bulletGroup.create(pos.x, pos.y, this.bmd);
                bullet.bid = Utils.generateRandomNumber();
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
            this.bulletCounts--;
            this.bulletGate = this.game.time.now + this.shotInterval;
        }
    }


    push() {
        var bullets = this.getBullets();
        this.game.geowar.socketHandler.push({ name: "playerFire", id: this.player.playerId, bullets: bullets });
    }



    playPeerFire(bullets) {
        if (bullets && bullets.length > 0) {
            for (var i in bullets) {
                var children = this.bulletGroup.children;
                var found = false;
                if (children && children.length > 0) {
                    for (var j in children) {
                        if (children[j].bid == bullets[i].bid) {
                            children[j].body.x = bullets[i].x;
                            children[j].body.y = bullets[i].y;
                            children[j].body.angle = bullets[i].angle;
                            found = true;
                            break;
                        }
                    }
                }
                if (!found) {
                    var bullet = this.bulletGroup.getFirstDead();
                    if (bullet) {
                        bullet.bid = bullets[i].bid;
                        bullet.body.x = bullets[i].x;
                        bullet.body.y = bullets[i].y;
                        bullet.body.angle = bullets[i].angle;
                        bullet.revive();
                    }
                    else {
                        var bullet = this.bulletGroup.create(bullets[i].x, bullets[i].y, this.bmd);
                        bullet.bid = bullets[i].bid;
                        bullet.isBullet = true;
                        this.game.physics.p2.enable(bullet);
                        bullet.body.angle = bullets[i].angle;
                        bullet.checkWorldBounds = true;
                        bullet.body.collideWorldBounds = false;
                        bullet.events.onOutOfBounds.add(this.bulletOutOfBounds, this);
                        this.collideSetting(bullet);
                    }
                }
            }
            var children = this.bulletGroup.children;
            if (children && children.length > 0) {
                for (var i in children) {
                    var found = false;
                    for (var j in bullets) {
                        if (children[i].bid == bullets[j].bid) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        children[i].kill();
                    }
                }
            }
        }
        else {
            var children = this.bulletGroup.children;
            if (children && children.length > 0) {
                for (var i in children) {
                    children[i].kill();
                }
            }
        }
    }


    getBullets() {
        var bullets = this.bulletGroup.children;
        var json = [];
        if (bullets && bullets.length > 0) {
            for (var i in bullets) {
                if (bullets[i].alive) {
                    json.push({ bid: bullets[i].bid, x: bullets[i].x, y: bullets[i].y, angle: bullets[i].angle });
                }

            }
        }
        return json;
    }

    collideSetting(bullet) {
        bullet.body.setCollisionGroup(this.game.geowar.bulletCollisionGroup);
        bullet.body.collides([this.game.geowar.playerCollisionGroup, this.game.geowar.bulletCollisionGroup]);
        bullet.body.onBeginContact.add(this.bulletContact, this);
    };

    bulletContact(otherBody) {
        //only kill the player
        if (otherBody && otherBody.sprite && typeof otherBody.sprite.getType == 'function' && /Player/i.test(otherBody.sprite.getType())) {
            if (otherBody.sprite != this.player) {
                //not kill, directly kick player out
                this.game.geowar.socketHandler.push({ name: "connection", id: otherBody.sprite.playerId, "type" : "playerKilled" });
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


    destroy() {
        this.bulletGroup.destroy();
    }

}