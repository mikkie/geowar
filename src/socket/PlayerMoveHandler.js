import PlayerFactory from '../prefabs/players/PlayerFactory.js';

export default class PlayerMoveHandler {

      constructor(game) {
            this.game = game;
            this.playerFactory = new PlayerFactory(this.game);
      }

      handle(data) {
            if (this.game.geowar.players[data.id]) {
                var peerPlayer = this.game.geowar.players[data.id]; 
                //cache the peer player pos meta data and update in update method. 
                peerPlayer.pos = {
                    x : data.x,
                    y : data.y,
                    angle : data.angle
                };
            }
            else{
                var peerPlayer = this.playerFactory.createPeerPlayer(data);
                this.game.add.existing(peerPlayer);
                this.game.geowar.playersGroup.add(peerPlayer);
                //cache peer player
                this.game.geowar.players[data.id] = {
                     sprite : peerPlayer 
                };
            }
      }

}