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

        this.speed = 300;
        this.angle = -90;
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.drag.set(150);

        this.weaponFactory = weaponFactory;
        this.createWeapon();
    }


    draw() {
        new CanvasHelper(this.canvas, playerJson, this.colorSet).drawTexture();
    }

    update() {
        if (this.needControl) {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            this.body.angularVelocity = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.angularVelocity = -200;
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.angularVelocity = 200;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.game.physics.arcade.velocityFromAngle(this.angle, 300, this.body.velocity);
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.game.physics.arcade.velocityFromAngle(this.angle + 180, 300, this.body.velocity);
            }

            if (this.fireButton.isDown) {
                this.weapon.fire();
            }

        }
        
        this.pushState();
    }


    pushState() {
        this.game.geowar.socketHandler.push({ name: "playerMove", id: this.playerId, x: this.x, y: this.y, angle: this.angle, type: "triangle", colorSet: this.colorSet });
    }


    createWeapon() {
        this.weapon = this.weaponFactory.createWeapon('dirt');

        this.weapon.trackSprite(this, this.width / 2 + 5, 0, true);

        this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    }

}