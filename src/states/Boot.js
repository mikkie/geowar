export default class Boot {
    preload() {
        this.load.image('preloader', 'assets/images/loading_bar.png');
    }

    create() {
        //namespace
        this.game.geowar = {}; 
        this.game.input.maxPointers = 1;
        //make sure the game running even loose focus
        this.game.stage.disableVisibilityChange = true;
        this.game.state.start('preload');
    }
}