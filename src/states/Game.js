import Utils from '../common/Utils.js';
import PlayerFactory from '../prefabs/players/PlayerFactory.js';
import SocketHandler from "../socket/SocketHandler.js";

export default class Game extends Phaser.State {

    create() {
        //stage
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.stage.backgroundColor = '#282626';
        //factories
        this.playerFactory = new PlayerFactory(this.game);
        //player group
        var playersGroup = this.game.add.group();
        this.game.geowar.playersGroup = playersGroup;
        //player
        this.player = this.playerFactory.createPlayer();
        this.game.add.existing(this.player);
        playersGroup.add(this.player);
        //cache current player
        this.game.geowar.currentPlayer = this.player;
        //set up socket
        this.game.geowar.socketHandler = new SocketHandler(io(this.game.geowar.server), this.game);
    }


    update() {
    }

}