import CirclePlayer from '../players/CirclePlayer.js';

export default class AICirclePlayer extends CirclePlayer {

    constructor(game, x, y, width, height, weaponFactory, colorSet) {
        super(game, x, y, width, height, weaponFactory, colorSet, false, null);
    }

    update() {
        
    }

}