import Player from '../prefabs/Player.js';
import SquarePlayer from '../prefabs/SquarePlayer.js';
import CirclePlayer from '../prefabs/CirclePlayer.js';
import Utils from '../common/Utils.js';
import WeaponFactory from '../prefabs/WeaponFactory.js';

export default class Game extends Phaser.State {

    _playerTypes = ['triangle', 'square', 'circle'];

    create() {
        //stage
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#282626';
        //weapon factory
        this.weaponFactory = new WeaponFactory(this.game);
        //player
        this.player = this.createPlayer();
        this.game.add.existing(this.player);
    }

    createPlayer() {
        var type = this._playerTypes[Math.floor(Math.random() * this._playerTypes.length)];
        if ('triangle' == type) {
            return new Player(this.game, this.game.width / 2, this.game.height / 2, 35, 30, Utils.generateRandomColor(), this.weaponFactory);
        }
        else if ('square' == type) {
            return new SquarePlayer(this.game, this.game.width / 2, this.game.height / 2, 35, 30, Utils.generateRandomColor(), this.weaponFactory);
        }
        else if ('circle' == type) {
            return new CirclePlayer(this.game, this.game.width / 2, this.game.height / 2, 35, 30, Utils.generateRandomColor(), this.weaponFactory);
        }
    }

    update() {

    }

}