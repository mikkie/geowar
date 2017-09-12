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
        //setup UI
        this.setupUI();
        //player group
        var playersGroup = this.game.add.group();
        this.game.geowar.playersGroup = playersGroup;
        //collision group
        this.game.geowar.playerCollisionGroup = this.game.physics.p2.createCollisionGroup();
        this.game.geowar.bulletCollisionGroup = this.game.physics.p2.createCollisionGroup();
        //after create new collision group update the group to collide with bounds 
        this.game.physics.p2.updateBoundsCollisionGroup();
        //player
        this.player = this.playerFactory.createPlayer('',{
            replay : this.replaySignal,
            kill : this.killSignal
        });
        this.game.add.existing(this.player);
        playersGroup.add(this.player);
        this.game.camera.follow(this.player);
        //cache current player
        this.game.geowar.currentPlayer = this.player;
        //set up socket
        this.game.geowar.socketHandler = new SocketHandler(io(this.game.geowar.server), this.game);
        //create AI players
        this.createAIPlayers();
    }


    setupUI(){
        this.UILayer = this.add.group();
        // this.bloodUI = new NumberBox(this.game, 50, 20, 'Blood', 20, { font: "15px Arial", align: "center", fill: "red" } , 0);
        // this.UILayer.add(this.bloodUI);

        //ammos
        this.ammoUI = new NumberBox(this.game, 50, 20, 'Ammos', this.game.geowar.initBulletCount, { font: "15px Arial", align: "center", fill: "#fff" } , 0);
        this.UILayer.add(this.ammoUI);
        //kills
        this.killUI = new NumberBox(this.game, 150, 20, 'Kills', 0, { font: "15px Arial", align: "center", fill: "#fff" } , 0);
        this.UILayer.add(this.killUI); 

        this.UILayer.fixedToCamera = true;

        this.addSignals();
    }

    update() {
        this.ammoUI.setValue(this.game.geowar.currentPlayer.weapon.bulletCounts);
    }


    addSignals(){
        this.addReplaySignal();
        this.addKillSignal();
    }


    addReplaySignal(){
        this.replaySignal = new Phaser.Signal();
        this.replaySignal.addOnce(this.popupReplayBtn,this);
    }

    addKillSignal(){
        this.killSignal = new Phaser.Signal();
        this.killSignal.add(this.updateKillCount,this);
    }


    updateKillCount(){
        this.killUI.setValue(this.killUI.getValue() + 1);
    }

    popupReplayBtn(){
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


    createAIPlayers(){
        var aiPlayer = this.playerFactory.createAIPlayer('');
        this.game.add.existing(aiPlayer);
    }

}