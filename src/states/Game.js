import Player from '../prefabs/Player.js';
import Utils from '../common/Utils.js';
import WeaponFactory from '../prefabs/WeaponFactory.js';

export default class Game extends Phaser.State {

    create() {
        //stage
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#282626';
        //weapon factory
        this.weaponFactory = new WeaponFactory(this.game);
        //player
        this.player = new Player(this.game, this.game.width / 2, this.game.height / 2, 35, 30, Utils.generateRandomColor(), 'triangle', this.weaponFactory);
        this.game.add.existing(this.player);
    }

    update() {
        
    }

}