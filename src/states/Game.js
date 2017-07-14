import Utils from '../common/Utils.js';
import PlayerFactory from '../prefabs/PlayerFactory.js';

export default class Game extends Phaser.State {

    create() {
        //stage
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#282626';
        //factories
        this.playerFactory = new PlayerFactory(this.game);
        //player
        this.player = this.playerFactory.createPlayer('triangle');
        this.game.add.existing(this.player);
    }


    update() {

    }

}