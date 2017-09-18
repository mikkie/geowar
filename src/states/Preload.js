export default class Preload {

    constructor() {
        this.asset = null;
        this.ready = false;
    }

    preload() {
    }

    create() {
        this.game.stage.backgroundColor = '#282626';
        this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
        this.asset.anchor.setTo(0.5, 0.5);
        this.asset.scale.setTo(0.3, 0.3);

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.asset);

        this.load.image('logo', 'assets/images/logo.png');
        this.load.image('play', 'assets/images/play.png');
        this.load.image('replay', 'assets/images/replay.png');
        this.load.image('wsad', 'assets/images/wsad.png');
        this.load.image('fire', 'assets/images/fire.png');

        //start load
        this.load.start();
    }

    update() {

        if (this.ready) {
            this.game.state.start('startScreen');
        }

    }

    onLoadComplete() {
        this.ready = true;
    }
}