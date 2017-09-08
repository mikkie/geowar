import CanvasHelper from '../../common/CanvasHelper.js';
import Utils from '../../common/Utils.js';
import explosionJson from '../../textures/weapons/explosionparticle.json';

export default class ExplosionParticle extends Phaser.Particle {

    constructor(game, x, y, key, frame) {
        super(game, x, y, game.make.bitmapData(12, 12), frame);
        this.canvas = this.key;
        this.colorSet = {
            body: Utils.generateRandomColor()
        };

        this.draw();
    }


    draw() {
        new CanvasHelper(this.canvas, explosionJson, this.colorSet).drawTexture();
    }

}