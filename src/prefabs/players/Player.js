import CanvasHelper from '../../common/CanvasHelper.js';
import playerJson from '../../textures/players/player.json';
import Utils from '../../common/Utils.js';
import ExplosionParticle from '../weapons/ExplosionParticle.js';

export default class Player extends Phaser.Sprite {

    constructor(game, x, y, width, height, weaponFactory, colorSet, needControl) {
        super(game, x, y, game.make.bitmapData(width, height));
        this.width = width;
        this.height = height;
        this.canvas = this.key;
        this.needControl = needControl;
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


    destroy(destroyChildren, destroyTexture) {
        this.triggerExplode();
        super.destroy(destroyChildren, destroyTexture);
        //coz the weapon not children, need to destory too
        this.weapon.destroy();
    }


    triggerExplode() {
        var emitter = this.game.add.emitter(this.x, this.y, 50);
        emitter.particleClass = ExplosionParticle;
        emitter.makeParticles();
        emitter.setAlpha(1, .2, 3000);
        emitter.setScale(1,2,1,2, 3000);
        emitter.explode(3400,15);
    }

    getType() {
        return "Player";
    }

}