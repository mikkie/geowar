import CanvasHelper from '../../common/CanvasHelper.js';
import playerJson from '../../textures/players/Player.json';
import Utils from '../../common/Utils.js';

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
            if(otherBody.sprite.player != this){
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
                this.pushState({ name: "playerFire", id: this.playerId });
            }

            this.pushState({ name: "playerMove", id: this.playerId, x: this.x, y: this.y, angle: this.angle, type: this.getType(), colorSet: this.colorSet });
            //only push current player data to server and use socket.io to broadcase to peer players
        }
        //update peer player pos by data from socket.io
        else if (this.game.geowar.players[this.playerId]) {
            if (this.game.geowar.players[this.playerId].pos) {
                var pos = this.game.geowar.players[this.playerId].pos;
                this.body.x = pos.x;
                this.body.y = pos.y;
                this.body.angle = pos.angle;
            }
            if (this.game.geowar.players[this.playerId].fire) {
                this.weapon.fire(this);
                this.game.geowar.players[this.playerId].fire = false;
            }
        }
    }


    getType(){
        return "triangle";
    }


    pushState(data) {
        this.game.geowar.socketHandler.push(data);
    }


    createWeapon() {
        this.weapon = this.weaponFactory.createWeapon('basic',this);

        // this.weapon.trackSprite(this, 0, (this.width/2 + 5) * -1, true);

        this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    }

    isCurrentPlayer() {
        return this.needControl;
    }


    destroy(destroyChildren, destroyTexture){
        super.destroy(destroyChildren, destroyTexture);
        this.weapon.destroy();
    }

}