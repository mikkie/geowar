export default class StartScreen {
    create() {
        this.game.stage.backgroundColor = '#282626';
        this.play = this.add.sprite(this.game.width / 2, this.game.height / 2, 'play');
        this.play.anchor.setTo(0.5, 0.5);
        this.play.scale.setTo(0.3, 0.3);
        this.play.inputEnabled = true;
        this.play.events.onInputDown.add(this.startPlay, this);
        this.play.events.onInputOver.add(this.mouseOver, this);
        this.play.events.onInputOut.add(this.mouseOut, this);
    }

    startPlay() {
        this.state.start('game');
    }

    mouseOver() {
        this.game.canvas.style.cursor = 'pointer';
    }

    mouseOut() {
        this.game.canvas.style.cursor = 'default';
    }

} 