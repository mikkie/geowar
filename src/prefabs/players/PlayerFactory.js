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
                return new Player(this.game, this.game.width / 2, this.game.height / 2, 35, 30, this.weaponFactory);
            case "square":
                return new SquarePlayer(this.game, this.game.width / 2, this.game.height / 2, 35, 30, this.weaponFactory);
            case "circle":
                return new CirclePlayer(this.game, this.game.width / 2, this.game.height / 2, 35, 30, this.weaponFactory);
            default:
                return new Player(this.game, this.game.width / 2, this.game.height / 2, 35, 30, this.weaponFactory);
        }
    }


    createPeerPlayer(peerMetaData){
       var type = peerMetaData.type;
       var bmd = this.game.make.bitmapData(35, 30);
       switch (type) {
            case "triangle":
                 Player.drawPeer(bmd, peerMetaData.colorSet);   
                 break;
            case "square":
                 SquarePlayer.drawPeer(bmd, peerMetaData.colorSet);
                 break;
            case "circle":
                 CirclePlayer.drawPeer(bmd, peerMetaData.colorSet);
                 break;
            default:
                 Player.drawPeer(bmd, peerMetaData.colorSet);
                 break;
        }
        var sprite = this.game.add.sprite(peerMetaData.x, peerMetaData.y, bmd);   
        sprite.angle = peerMetaData.angle;
        sprite.anchor.setTo(0.5, 0.5);
        return sprite;   
    }

}