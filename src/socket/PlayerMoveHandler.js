import PlayerFactory from '../prefabs/players/PlayerFactory.js';

export default class PlayerMoveHandler {

      constructor(game) {
            this.game = game;
            this.playerFactory = new PlayerFactory(this.game);
      }

      handle(data) {
            if (!this.game.geowar.peerPlayers) {
                  this.game.geowar.peerPlayers = {};
            }
            if (this.game.geowar.peerPlayers[data.id]) {
                var peerPlayer = this.game.geowar.peerPlayers[data.id]; 
                peerPlayer.x = data.x;
                peerPlayer.y = data.y;
                peerPlayer.angle = data.angle;   
            }
            else{
                var peerPlayer = this.playerFactory.createPeerPlayer(data);
                this.game.add.existing(peerPlayer);
                //cache peer player
                this.game.geowar.peerPlayers[data.id] = peerPlayer;
            }
      }

}