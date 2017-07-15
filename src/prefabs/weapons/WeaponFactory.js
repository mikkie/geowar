import Weapon from './Weapon.js';
import DirtWeapon from './DirtWeapon.js';

export default class WeaponFactory {

    weapon_type = ['basic','dirt'];

    constructor(game) {
        this.game = game;
    }


    createWeapon(type) {
        switch(type){
            case "basic" : 
               return new Weapon(this.game);
            case "dirt" : 
               return new DirtWeapon(this.game);
            default : 
               return new Weapon(this.game);
        } 
    }

}