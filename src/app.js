var game;

import Boot from "./states/Boot.js";
import Preload from "./states/Preload.js";
import StartScreen from "./states/StartScreen.js";
import Game from "./states/Game.js";

window.onload = function () {
  game = new Phaser.Game(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 
                         window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, 
                         Phaser.AUTO, 'game');
  game.state.add('boot',Boot);
  game.state.add('preload',Preload);
  game.state.add('startScreen',StartScreen);
  game.state.add('game',Game);
  game.state.start('boot');
};
