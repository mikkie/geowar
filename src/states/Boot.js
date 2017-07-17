import SocketHandler from "../socket/SocketHandler.js";

export default class Boot {
    preload() {
        this.load.image('preloader', 'assets/images/loading_bar.png');
    }

    create() {
        this.game.geowar = {}; //namespace
        this.game.geowar.socketHandler = new SocketHandler(io('http://localhost:3000'), this.game);
        this.game.input.maxPointers = 1;
        this.game.state.start('preload');
    }
}