import Player from '../players/Player.js';

export default class AIPlayer extends Player {

    constructor(game, x, y, width, height, weaponFactory, colorSet) {
        super(game, x, y, width, height, weaponFactory, colorSet, false, null);
    }

    update() {
        
    }

}