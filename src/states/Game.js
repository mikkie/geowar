import Utils from '../common/Utils.js';
import PlayerFactory from '../prefabs/players/PlayerFactory.js';
import BackgroundFactory from '../prefabs/background/BackgroundFactory.js';
import NumberBox from '../prefabs/ui/NumberBox.js';
import SocketHandler from "../socket/SocketHandler.js";

export default class Game extends Phaser.State {

    create() {
        //stage
        this.game.world.setBounds(0, 0, 2000, 1500);
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.stage.backgroundColor = '#282626';
        //factories
        this.backgroundFactory = new BackgroundFactory(this.game);
        this.playerFactory = new PlayerFactory(this.game);
        //background
        this.backgroundFactory.createBackground('baisc', 100, this.game.world.width, this.game.world.height);
        //player group
        var playersGroup = this.game.add.group();
        this.game.geowar.playersGroup = playersGroup;
        //collision group
        this.game.geowar.playerCollisionGroup = this.game.physics.p2.createCollisionGroup();
        this.game.geowar.bulletCollisionGroup = this.game.physics.p2.createCollisionGroup();
        //after create new collision group update the group to collide with bounds 
        this.game.physics.p2.updateBoundsCollisionGroup();
        //create AI
        this.createAIPlayers();
        //setup UI
        this.setupUI();
        //player
        this.player = this.playerFactory.createPlayer('', {
            replay: this.replaySignal,
            kill: this.killSignal
        });
        this.game.add.existing(this.player);
        playersGroup.add(this.player);
        this.game.camera.follow(this.player);
        //cache current player
        this.game.geowar.currentPlayer = this.player;
        //set up socket
        this.game.geowar.socketHandler = new SocketHandler(io(this.game.geowar.server), this.game);
    }


    setupUI() {
        this.UILayer = this.add.group();
        // this.bloodUI = new NumberBox(this.game, 50, 20, 'Blood', 20, { font: "15px Arial", align: "center", fill: "red" } , 0);
        // this.UILayer.add(this.bloodUI);

        //ammos
        this.ammoUI = new NumberBox(this.game, 50, 20, 'Ammos', this.game.geowar.initBulletCount, { font: "15px Arial", align: "center", fill: "#fff" }, 0);
        this.UILayer.add(this.ammoUI);
        //kills
        this.killUI = new NumberBox(this.game, 150, 20, 'Kills', 0, { font: "15px Arial", align: "center", fill: "#fff" }, 0);
        this.UILayer.add(this.killUI);

        this.addMobileController();
        this.UILayer.fixedToCamera = true;

        this.addSignals();
    }



    addMobileController(){
        var minLength = this.game.width < this.game.height ? this.game.width : this.game.height;
        var controller = this.game.add.sprite(20, this.game.height - (minLength * 1 / 2), 'wsad');
        controller.width = minLength * 1 / 2 - 20;
        controller.height = controller.width;
        controller.alpha = 0.5;
        controller.fixedToCamera = true;
        //touch area
        var touchWidth = controller.width * 1 / 3;
        var touchHeight = controller.height * 1 / 3;
        this.game.geowar.touchAreW = new Phaser.Rectangle(controller.x + touchWidth,controller.y,touchWidth,touchHeight);
        this.game.geowar.touchAreA = new Phaser.Rectangle(controller.x,controller.y + touchHeight,touchWidth,touchHeight);
        this.game.geowar.touchAreD = new Phaser.Rectangle(controller.x + (touchWidth * 2),controller.y + touchHeight,touchWidth,touchHeight);
        this.game.geowar.touchAreS = new Phaser.Rectangle(controller.x + touchWidth,controller.y + (touchHeight * 2),touchWidth,touchHeight);
        //fire
        var fire = this.game.add.sprite(this.game.width - (minLength * 1 / 4), this.game.height - (minLength * 1 / 4), 'fire');
        fire.width = minLength * 1 / 4 - 20;
        fire.height = fire.width;
        fire.alpha = 0.5;
        fire.fixedToCamera = true;
        this.game.geowar.touchAreF = new Phaser.Rectangle(fire.x,fire.y,fire.width,fire.height);
    }

    update() {
        this.ammoUI.setValue(this.game.geowar.currentPlayer.weapon.bulletCounts);
    }


    addSignals() {
        this.addReplaySignal();
        this.addKillSignal();
    }


    addReplaySignal() {
        this.replaySignal = new Phaser.Signal();
        this.replaySignal.addOnce(this.popupReplayBtn, this);
    }

    addKillSignal() {
        this.killSignal = new Phaser.Signal();
        this.killSignal.add(this.updateKillCount, this);
    }


    updateKillCount() {
        this.killUI.setValue(this.killUI.getValue() + 1);
    }

    popupReplayBtn() {
        this.replay = this.add.sprite(this.game.width / 2, this.game.height / 2, 'replay');
        this.replay.anchor.setTo(0.5, 0.5);
        this.replay.scale.setTo(0.1, 0.1);
        this.replay.inputEnabled = true;
        this.replay.events.onInputDown.add(this.startReplay, this);
        this.replay.events.onInputOver.add(this.mouseOver, this);
        this.replay.events.onInputOut.add(this.mouseOut, this);
        this.replay.fixedToCamera = true;
    }


    startReplay() {
        window.location.reload();
    }

    mouseOver() {
        this.game.canvas.style.cursor = 'pointer';
    }

    mouseOut() {
        this.game.canvas.style.cursor = 'default';
    }


    createAIPlayers() {
        this.game.geowar.aiGroup = this.game.add.group();
        var i = 0;
        var randomTotal = Math.floor(Math.random() * 8 + 3);
        this.game.geowar.log('create ' + randomTotal + ' AI');
        var timeEvent = this.game.time.events.loop(Phaser.Timer.SECOND, function () {
            if (i < randomTotal) {
                var aiPlayer = this.playerFactory.createAIPlayer('triangle');
                this.game.geowar.aiGroup.add(aiPlayer);
                i++;
            }
            else{
                if(this.game.geowar.aiGroup.children.length == 0){
                   i = 0;
                   randomTotal = Math.floor(Math.random() * 8 + 3); 
                   this.game.geowar.log('add ' + randomTotal + ' AI');
                }
            }
        }, this);
    }


}