import Player from './Player.js';
import CanvasHelper from '../../common/CanvasHelper.js';
import playerJson from '../../textures/players/circleplayer.json';

export default class CirclePlayer extends Player {

    draw() {
        new CanvasHelper(this.canvas,playerJson,this.colorSet).drawTexture();
    }


    getType(){
        return "CirclePlayer";
    }

}