import PlayerFactory from '../prefabs/players/PlayerFactory.js';

export default class PlayerMoveHandler {

      constructor(game) {
            this.game = game;
            this.playerFactory = new PlayerFactory(this.game);
      }

      handle(data) {
            if (this.game.geowar.players[data.id]) {
                var peerPlayer = this.game.geowar.players[data.id]; 
                peerPlayer.x = data.x;
                peerPlayer.y = data.y;
                peerPlayer.angle = data.angle;   
            }
            else{
                var peerPlayer = this.playerFactory.createPeerPlayer(data);
                this.game.add.existing(peerPlayer);
                this.game.geowar.playersGroup.add(peerPlayer);
                //cache peer player
                this.game.geowar.players[data.id] = peerPlayer;
            }
      }

}