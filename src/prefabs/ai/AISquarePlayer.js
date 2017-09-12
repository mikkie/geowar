import SquarePlayer from '../players/SquarePlayer.js';

export default class AISquarePlayer extends SquarePlayer {

    constructor(game, x, y, width, height, weaponFactory, colorSet) {
        super(game, x, y, width, height, weaponFactory, colorSet, false, null);
    }

    update() {
        
    }

}