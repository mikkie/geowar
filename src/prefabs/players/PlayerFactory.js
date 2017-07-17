import Player from './Player.js';
import SquarePlayer from './SquarePlayer.js';
import CirclePlayer from './CirclePlayer.js';
import WeaponFactory from '../weapons/WeaponFactory.js';
import Utils from '../../common/Utils.js';

export default class PlayerFactory {

    _playerTypes = ['triangle', 'square', 'circle'];

    constructor(game) {
        this.game = game;
        this.weaponFactory = new WeaponFactory(game);
    }

    createPlayer(defaultType) {
        var type = defaultType;
        if (!type) {
            type = this._playerTypes[Math.floor(Math.random() * this._playerTypes.length)];
        }
        switch (type) {
            case "triangle":
                return new Player(this.game, this.game.width / 2, this.game.height / 2, 35, 30, Utils.generateRandomColor(), this.weaponFactory);
            case "square":
                return new SquarePlayer(this.game, this.game.width / 2, this.game.height / 2, 35, 30, Utils.generateRandomColor(), this.weaponFactory);
            case "circle":
                return new CirclePlayer(this.game, this.game.width / 2, this.game.height / 2, 35, 30, Utils.generateRandomColor(), this.weaponFactory);
            default:
                return new Player(this.game, this.game.width / 2, this.game.height / 2, 35, 30, Utils.generateRandomColor(), this.weaponFactory);
        }
    }

}