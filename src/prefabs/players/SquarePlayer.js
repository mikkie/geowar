import Player from './Player.js';
import CanvasHelper from '../../common/CanvasHelper.js';
import playerJson from '../../textures/players/squareplayer.json';

export default class SquarePlayer extends Player {

    draw() {
        new CanvasHelper(this.canvas,playerJson).drawTexture();
    }

    pushState() {
        this.game.geowar.socketHandler.push({ name: "player", id: this.game.geowar.playerId, x : this.x, y : this.y, angle : this.angle, type : "square" });
    }

    static drawPeer(canvas){
        new CanvasHelper(canvas, playerJson).drawTexture();
    }

}