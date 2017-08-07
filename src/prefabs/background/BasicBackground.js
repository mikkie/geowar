import CanvasHelper from '../../common/CanvasHelper.js';
import backgroundJson from '../../textures/backgrounds/basicbackground.json'

export default class BasicBackground extends Phaser.Image{

    constructor(x, y, width, height, game) {
       super(game, x, y, game.make.bitmapData(width, height), null);
       this.canvas = this.key;
       this.draw();
    }


    draw() {
        new CanvasHelper(this.canvas, backgroundJson).drawTexture();
    }

}