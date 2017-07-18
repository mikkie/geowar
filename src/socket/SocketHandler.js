import ConnectionHandler from './ConnectionHandler.js';
import PlayerMoveHandler from './PlayerMoveHandler.js';

export default class SocketHandler {
    constructor(sio, game) {
        this.sio = sio;
        this.game = game;
        var that = this;
        this.initHandlers(this.game);
        this.sio.on('pull', function (data) {
            that.update(data, that);
        });
    }

    push(data) {
        if (this.game.geowar.socketReady) {
            this.sio.emit('push', data);
        }
    }

    update(data, that) {
        if (data.name) {
            this.handlers[data.name].handle(data);
        }
    }


    initHandlers(game) {
        this.handlers = {};
        this.handlers.connection = new ConnectionHandler(game);
        this.handlers.player = new PlayerMoveHandler(game);
    }
}