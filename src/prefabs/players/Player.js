import CanvasHelper from '../../common/CanvasHelper.js';
import playerJson from '../../textures/players/Player.json';
import Utils from '../../common/Utils.js';

export default class Player extends Phaser.Sprite {

    constructor(game, x, y, width, height, weaponFactory, colorSet, needControl) {
        super(game, x, y, game.make.bitmapData(width, height));
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
        // this.weaponFactory = weaponFactory;
        // this.createWeapon();
    }


    draw() {
        new CanvasHelper(this.canvas, playerJson, this.colorSet).drawTexture();
    }

    update() {
        if (this.needControl) {

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.rotateLeft(100);
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.rotateRight(100);
            }
            else {
                this.body.setZeroRotation();
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.body.thrust(400);
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.body.reverse(400);
            }

            /*if (this.fireButton.isDown) {
                this.weapon.fire();
            }*/

        }

        this.pushState();
    }


    pushState() {
        this.game.geowar.socketHandler.push({ name: "playerMove", id: this.playerId, x: this.x, y: this.y, angle: this.angle, type: "triangle", colorSet: this.colorSet });
    }


    /*createWeapon() {
        this.weapon = this.weaponFactory.createWeapon('dirt');

        this.weapon.trackSprite(this, 0, (this.width/2 + 5) * -1, true);

        this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    }*/

}