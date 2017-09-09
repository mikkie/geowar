export default class StartScreen {
    create() {
        this.game.stage.backgroundColor = '#282626';

        this.logo = this.add.sprite(this.game.width / 2, this.game.height / 2 - 100, 'logo');
        this.logo.anchor.setTo(0.5, 0.5);
        this.logo.scale.setTo(0.8, 0.8);
        
        this.play = this.add.sprite(this.game.width / 2, this.game.height / 2, 'play');
        this.play.anchor.setTo(0.5, 0.5);
        this.play.scale.setTo(0.3, 0.3);
        this.play.inputEnabled = true;
        this.play.events.onInputDown.add(this.startPlay, this);
        this.play.events.onInputOver.add(this.mouseOver, this);
        this.play.events.onInputOut.add(this.mouseOut, this);
        

        this.tips = this.add.text(this.game.width / 2, this.game.height / 2 + 100, 'Use [ ↑→↓← ] to move and [ space ] to shoot', { font: "17px Arial", align: "center", fill: "#fff" });
        this.tips.anchor.setTo(0.5, 0.5);

        this.author = this.add.text(this.game.width - 180, this.game.height - 17, 'Design and made by Aqua, Email: true2green@qq.com', { font: "13px Arial", align: "center", fill: "#fff" });
        this.author.anchor.setTo(0.5, 0.5);
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