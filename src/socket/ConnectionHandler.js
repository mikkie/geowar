export default class ConnectionHandler {

      constructor(game) {
            this.game = game;
      }

      handle(data) {
            if (!this.game.geowar.players) {
                  this.game.geowar.players = {};
            }
            if (data.type === 'connected') {
                  this.game.geowar.socketReady = true;
                  //set current player id
                  this.game.geowar.currentPlayer.playerId = data.id;
                  //add to player map
                  this.game.geowar.players[data.id] = this.game.geowar.currentPlayer;
                  console.log('playerId = ' + this.game.geowar.currentPlayer.playerId + ' connected');
            }
            else if (data.type === 'disconnected') {
                  var needDestroy = true;
                  if (this.game.geowar.currentPlayer.playerId == data.id) {
                        needDestroy = false;
                        this.game.geowar.socketReady = false;
                        console.log('playerId = ' + this.game.geowar.currentPlayer.playerId + 'disconnected');
                  }
                  if (this.game.geowar.players[data.id]) {
                        if (needDestroy) {
                              this.game.geowar.players[data.id].destroy();
                        }
                        delete this.game.geowar.players[data.id];
                  }

            }
      }

}