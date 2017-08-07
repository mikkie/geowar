import BasicBackground from './BasicBackground.js';

export default class BackgroundFactory {


    constructor(game) {
        this.game = game;
    }


    createBackground(type, number, worldWidth, worldHeight) {
        switch (type) {
            case "basic": {
                this.createBasicBackground(number, worldWidth, worldHeight);
            }
            default: {
                this.createBasicBackground(number, worldWidth, worldHeight);
            }
        }
    }


    createBasicBackground(number, worldWidth, worldHeight) {
        for (var i = 0; i < number; i++) {
            var x = Math.floor(Math.random() * (worldWidth - 100));
            var y = Math.floor(Math.random() * (worldHeight - 100));
            var background = new BasicBackground(x, y, 100, 100, this.game);
            this.game.add.existing(background);
        }
    }

}