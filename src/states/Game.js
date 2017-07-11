import Player from '../prefabs/Player.js';

export default class Game extends Phaser.State {

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#282626';
        this.player = new Player(this.game, this.game.width / 2, this.game.height / 2, 30, 35, 'red', 'triangle');
        this.game.add.existing(this.player);
    }

    update() {
        
    }

}