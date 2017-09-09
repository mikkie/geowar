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

    createPlayer(defaultType,replaySignal) {
        var type = defaultType;
        if (!type) {
            type = this._playerTypes[Math.floor(Math.random() * this._playerTypes.length)];
        }
        switch (type) {
            case "triangle":
                return new Player(this.game, this.game.width / 2, this.game.height / 2, 30, 35, this.weaponFactory, null, true, replaySignal);
            case "square":
                return new SquarePlayer(this.game, this.game.width / 2, this.game.height / 2, 30, 35, this.weaponFactory, null, true, replaySignal);
            case "circle":
                return new CirclePlayer(this.game, this.game.width / 2, this.game.height / 2, 30, 35, this.weaponFactory, null, true, replaySignal);
            default:
                return new Player(this.game, this.game.width / 2, this.game.height / 2, 30, 35, this.weaponFactory, null, true, replaySignal);
        }
    }


    createPeerPlayer(peerMetaData){
       var type = peerMetaData.type;
       var player = null;
       switch (type) {
            case "Player":
                player = new Player(this.game, peerMetaData.x, peerMetaData.y, 30, 35, this.weaponFactory, peerMetaData.colorSet, false);
                break;
            case "SquarePlayer":
                player = new SquarePlayer(this.game, peerMetaData.x, peerMetaData.y, 30, 35, this.weaponFactory, peerMetaData.colorSet, false);
                break;
            case "CirclePlayer":
                player = new CirclePlayer(this.game, peerMetaData.x, peerMetaData.y, 30, 35, this.weaponFactory, peerMetaData.colorSet, false);
                break;
            default:
                player = new Player(this.game, peerMetaData.x, peerMetaData.y, 30, 35, this.weaponFactory, peerMetaData.colorSet, false);
                break;
        }
        player.playerId = peerMetaData.id;
        return player;
    }

}