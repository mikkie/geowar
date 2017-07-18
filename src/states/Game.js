import Utils from '../common/Utils.js';
import PlayerFactory from '../prefabs/players/PlayerFactory.js';
import SocketHandler from "../socket/SocketHandler.js";

export default class Game extends Phaser.State {

    create() {
        //stage
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#282626';
        //factories
        this.playerFactory = new PlayerFactory(this.game);
        this.game.geowar.socketHandler = new SocketHandler(io('http://localhost:3000'), this.game);
        //player
        this.player = this.playerFactory.createPlayer();
        this.game.add.existing(this.player);
    }


    update() {
        var peerPlayers = this.game.geowar.peerPlayers;
        if(peerPlayers){
           for(var k in peerPlayers){
              this.game.physics.arcade.collide(this.player,peerPlayers[k],null,null);
           }
        }
    }

}