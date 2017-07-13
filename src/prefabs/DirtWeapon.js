import Weapon from './Weapon.js';
import Utils from '../common/Utils.js';

export default class DirtWeapon extends Weapon{

    createBullet() {
        this.bmd = this.game.make.bitmapData(12, 12);
        var ctx = this.bmd.ctx;
        ctx.beginPath();
        ctx.fillStyle = Utils.generateRandomColor();
        ctx.moveTo(0, 0);
        ctx.lineTo(12, 6);
        ctx.lineTo(0, 12);
        ctx.closePath();
        ctx.fill();
    }

}