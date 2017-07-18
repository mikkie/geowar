export default class ConnectionHandler {

      constructor(game) {
            this.game = game;
      }

      handle(data) {
            if (data.type === 'connected') {
                  this.game.geowar.socketReady = true;
                  this.game.geowar.playerId = data.id;
                  console.log('playerId = ' + this.game.geowar.playerId + ' connected');
            }
            else if (data.type === 'disconnected') {
                  if (this.game.geowar.playerId == data.id) {
                        this.game.geowar.socketReady = false;
                        console.log('playerId = ' + this.game.geowar.playerId + 'disconnected');
                  }
                  else if (this.game.geowar.peerPlayers[data.id]) {
                        this.game.geowar.peerPlayers[data.id].destroy();
                        delete this.game.geowar.peerPlayers[data.id];
                  }
            }
      }

}