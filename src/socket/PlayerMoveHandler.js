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
            else if (this.game.geowar.peerPlayers[data.id]) {
                  this.game.geowar.peerPlayers[data.id].destroy();
                  delete this.game.geowar.peerPlayers[data.id];
            }
            var sprite = this.playerFactory.createPeerPlayer(data);
            this.game.geowar.peerPlayers[data.id] = sprite;
      }

}