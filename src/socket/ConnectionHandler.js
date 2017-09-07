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
                  //reconnected
                  if (this.game.geowar.currentPlayer.playerId) {
                        this.game.geowar.currentPlayer.prePlayerId = this.game.geowar.currentPlayer.playerId;
                        //notify peer destory previous player
                        this.game.geowar.socketHandler.push({ name: "connection", id: this.game.geowar.currentPlayer.prePlayerId, "type": "playerKilled" });
                  }
                  //set current player id
                  this.game.geowar.currentPlayer.playerId = data.id;
                  //add to player map
                  this.game.geowar.players[data.id] = {
                        sprite: this.game.geowar.currentPlayer
                  };
                  console.log('current playerId = ' + this.game.geowar.currentPlayer.playerId + ' connected');
            }
            else if (data.type === 'disconnected') {
                  var needDestroy = true;
                  if (this.game.geowar.currentPlayer.playerId == data.id) {
                        needDestroy = false;
                        this.game.geowar.socketReady = false;
                        console.log('current playerId = ' + data.id + 'disconnected');
                  }
                  else if (this.game.geowar.currentPlayer.prePlayerId == data.id) {
                        needDestroy = false;
                        console.log('current old playerId = ' + data.id + 'disconnected');
                  }
                  if (this.game.geowar.players[data.id]) {
                        if (needDestroy) {
                              this.game.geowar.players[data.id].sprite.destroy();
                              console.log('peer playerId = ' + data.id + 'disconnected');
                        }
                        delete this.game.geowar.players[data.id];
                  }

            }
            else if (data.type === 'playerKilled') {
                  if (this.game.geowar.players[data.id]) {
                        this.game.geowar.players[data.id].sprite.destroy();
                        delete this.game.geowar.players[data.id];
                        console.log('playerId = ' + data.id + 'killed');
                        if (this.game.geowar.currentPlayer.playerId == data.id) {
                              this.game.geowar.socketReady = false;
                        }
                  }
            }
      }
}