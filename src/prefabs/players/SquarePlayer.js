import Player from './Player.js';
import CanvasHelper from '../../common/CanvasHelper.js';
import playerJson from '../../textures/players/squareplayer.json';

export default class SquarePlayer extends Player {

    draw() {
        new CanvasHelper(this.canvas,playerJson,this.colorSet).drawTexture();
    }

    getType(){
        return "square";
    }

}