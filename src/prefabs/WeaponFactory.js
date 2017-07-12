import Weapon from './Weapon.js';

export default class WeaponFactory {

    weapon_type = ['basic'];

    constructor(game) {
        this.game = game;
    }


    createBasicWeapon(type) {
        switch(type){
            case "basic" : 
               return new Weapon(this.game);
            default : 
               return new Weapon(this.game);
        } 
    }

}