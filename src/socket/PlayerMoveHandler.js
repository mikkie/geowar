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
                var sprite = this.game.geowar.peerPlayers[data.id]; 
                sprite.x = data.x;
                sprite.y = data.y;
                sprite.angle = data.angle;   
            }
            else{
                var sprite = this.playerFactory.createPeerPlayer(data);
                this.game.geowar.peerPlayers[data.id] = sprite;
            }
      }

}