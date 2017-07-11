export default class Preload {

    constructor() {
        this.asset = null;
        this.ready = false;
    }

    preload() {
        this.load.image('loading_bg', 'assets/images/loading_bg.jpg');
    }

    create() {
        this.bg = this.add.sprite(0, 0, "loading_bg");
        this.bg.width = 1280;
        this.bg.height = 768;
        this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
        this.asset.anchor.setTo(0.5, 0.5);
        this.asset.scale.setTo(0.3, 0.3);

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.asset);

        this.load.image('play','assets/images/play.png');

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