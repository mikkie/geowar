export default class PlayerMoveHandler {

      constructor(game) {
            this.game = game;
      }

      handle(data) {
            if (!this.game.geowar.peerPlayers) {
                  this.game.geowar.peerPlayers = {};
            }
            else if (this.game.geowar.peerPlayers[data.id]) {
                  this.game.geowar.peerPlayers[data.id].destroy();
                  delete this.game.geowar.peerPlayers[data.id];
            }
            var bmd = this.game.make.bitmapData(35, 30);
            bmd.canvas = data.canvas;
            var sprite = this.game.add.sprite(data.x, data.y, bmd);
            this.game.geowar.peerPlayers[data.id] = sprite;
      }

}