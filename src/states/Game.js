import Player from '../prefabs/Player.js';

export default class Game extends Phaser.State{

    create(){
       this.player = new Player(this.game,this.game.width / 2, this.game.height / 2,30,35,'red','triangle');
       this.player.anchor.set(0.5);
       this.game.add.existing(this.player);
    }

}