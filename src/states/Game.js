import Utils from '../common/Utils.js';
import PlayerFactory from '../prefabs/players/PlayerFactory.js';

export default class Game extends Phaser.State {

    create() {
        //stage
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#282626';
        //factories
        this.playerFactory = new PlayerFactory(this.game);
        //player
        this.player = this.playerFactory.createPlayer();
        this.game.add.existing(this.player);
    }


    update() {
        this.game.geowar.socketHandler.push({name: "move" , id : this.game.geowar.playerId, x : this.player.x, y : this.player.y });
    }

}