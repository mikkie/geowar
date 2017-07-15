import Weapon from './Weapon.js';
import Utils from '../../common/Utils.js';
import CanvasHelper from '../../common/CanvasHelper.js';
import weaponJson from '../../textures/weapons/dirtweapon.json';

export default class DirtWeapon extends Weapon{

    createBullet() {
        this.bmd = this.game.make.bitmapData(12, 12);
        new CanvasHelper(this.bmd,weaponJson).drawTexture();
    }

}