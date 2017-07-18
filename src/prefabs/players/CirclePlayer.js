import Player from './Player.js';
import CanvasHelper from '../../common/CanvasHelper.js';
import playerJson from '../../textures/players/circleplayer.json';

export default class CirclePlayer extends Player {

    draw() {
        new CanvasHelper(this.canvas,playerJson,this.colorSet).drawTexture();
    }

    pushState() {
        this.game.geowar.socketHandler.push({ name: "player", id: this.game.geowar.playerId, x : this.x, y : this.y, angle : this.angle, type : "circle", colorSet : this.colorSet });
    }

}