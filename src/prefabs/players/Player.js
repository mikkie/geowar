import CanvasHelper from '../../common/CanvasHelper.js';
import playerJson from '../../textures/players/player.json';
import Utils from '../../common/Utils.js';
import ExplosionParticle from '../weapons/ExplosionParticle.js';

export default class Player extends Phaser.Sprite {

    constructor(game, x, y, width, height, weaponFactory, colorSet, needControl, signals) {
        super(game, x, y, game.make.bitmapData(width, height));
        this.width = width;
        this.height = height;
        this.canvas = this.key;
        this.alpha = 0;
        this.needControl = needControl;
        this.signals = signals;
        this.blood = 20;
        if (colorSet) {
            this.colorSet = colorSet;
        }
        else {
            this.colorSet = {
                head: Utils.generateRandomColor(),
                body: Utils.generateRandomColor()
            };
        }

        this.draw();

        this.game.physics.p2.enable(this);
        this.anchor.setTo(0.5, 0.57);
        this.collideSetting();
        this.weaponFactory = weaponFactory;
        this.createWeapon();
        this.game.add.tween(this).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
    }



    collideSetting() {
        this.body.setCollisionGroup(this.game.geowar.playerCollisionGroup);
        this.body.collides([this.game.geowar.bulletCollisionGroup, this.game.geowar.playerCollisionGroup]);
        this.body.onBeginContact.add(this.contact);
    }


    contact(otherBody) {
        if (otherBody && otherBody.sprite && otherBody.sprite.isBullet) {
            if (otherBody.sprite.player != this) {
                //kill for reuse bullet
                otherBody.sprite.kill();
            }
        }
    };


    draw() {
        new CanvasHelper(this.canvas, playerJson, this.colorSet).drawTexture();
    }

    update() {
        if (this.needControl) {

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.rotateLeft(50);
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.rotateRight(50);
            }
            else {
                this.body.setZeroRotation();
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.body.thrust(300);
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.body.reverse(300);
            }

            if (this.fireButton.isDown) {
                this.weapon.fire(this);
            }

            for (var i = 0; i < this.game.input.pointers.length; i++) {
                if (this.game.input.pointers[i].isDown) {
                    var pointer = {
                        x: this.game.input.pointers[i].x,
                        y: this.game.input.pointers[i].y
                    };
                    if (this.game.geowar.touchAreA.contains(pointer.x, pointer.y)) {
                        this.body.rotateLeft(50);
                    }
                    else if (this.game.geowar.touchAreD.contains(pointer.x, pointer.y)) {
                        this.body.rotateRight(50);
                    }
                    else {
                        this.body.setZeroRotation();
                    }
                    if (this.game.geowar.touchAreW.contains(pointer.x, pointer.y)) {
                        this.body.thrust(300);
                    }
                    else if (this.game.geowar.touchAreS.contains(pointer.x, pointer.y)) {
                        this.body.reverse(300);
                    }

                    if (this.game.geowar.touchAreF.contains(pointer.x, pointer.y)) {
                        this.weapon.fire(this);
                    }
                }
            }

            //only push current player data to server and use socket.io to broadcase to peer players
            this.pushState({ name: "playerMove", id: this.playerId, x: this.x, y: this.y, angle: this.angle, type: this.getType(), colorSet: this.colorSet });
            this.weapon.push();
        }
        //update peer player pos by data from socket.io
        else if (this.game.geowar.players[this.playerId]) {
            if (this.game.geowar.players[this.playerId].pos) {
                var pos = this.game.geowar.players[this.playerId].pos;
                if (this.game.geowar.enablePredict && this.timestamp == pos.timestamp) {
                    predictPeerPlayerMove(pos);
                }
                else {
                    this.previous = {
                        x: this.body.x,
                        y: this.body.y,
                        angle: this.body.angle,
                        timestamp: this.timestamp
                    }
                    this.body.x = pos.x;
                    this.body.y = pos.y;
                    this.body.angle = pos.angle;
                    this.timestamp = pos.timestamp;
                }
            }
            if (this.game.geowar.players[this.playerId].fire) {
                this.weapon.playPeerFire(this.game.geowar.players[this.playerId].fire.bullets);
                this.game.geowar.players[this.playerId].fire = null;
            }
        }
    }



    predictPeerPlayerMove(posFromSocket) {

    }


    pushState(data) {
        this.game.geowar.socketHandler.push(data);
    }


    createWeapon() {
        this.weapon = this.weaponFactory.createWeapon('basic', this);

        this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    }


    winBullet() {
        this.weapon.addBullet(this.game.geowar.winBulletCount);
    }


    destroy(destroyChildren, destroyTexture) {
        this.triggerExplode();
        //myself killed 
        if (this.game.geowar.currentPlayer.playerId == this.playerId && this.signals && this.signals.replay) {
            this.signals.replay.dispatch();
        }
        //kill other  
        else if (this.game.geowar.currentPlayer.playerId != this.playerId && this.game.geowar.currentPlayer.signals && this.game.geowar.currentPlayer.signals.kill) {
            this.game.geowar.currentPlayer.signals.kill.dispatch();
            this.game.geowar.currentPlayer.winBullet();
        }
        super.destroy(destroyChildren, destroyTexture);
        //coz the weapon not children, need to destory too
        this.weapon.destroy();
    }


    triggerExplode() {
        var emitter = this.game.add.emitter(this.x, this.y, 50);
        emitter.gravity = 0;
        emitter.particleClass = ExplosionParticle;
        emitter.makeParticles();
        emitter.setAlpha(1, .2, 3000);
        emitter.setScale(1, 2, 1, 2, 3000);
        emitter.explode(3400, 15);
    }

    getType() {
        return "Player";
    }

}