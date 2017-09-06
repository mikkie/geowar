export default class PlayerFireHandler {

      constructor(game) {
            this.game = game;
      }

      handle(data) {
            if (this.game.geowar.players[data.id]) {
                var peerPlayer = this.game.geowar.players[data.id]; 
                //cache the peer player pos meta data and update in update method. 
                peerPlayer.fire = {
                    bullets :  data.bullets 
                };
            }
      }

}