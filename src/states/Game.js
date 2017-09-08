import Utils from '../common/Utils.js';
import PlayerFactory from '../prefabs/players/PlayerFactory.js';
import BackgroundFactory from '../prefabs/background/BackgroundFactory.js';
import NumberBox from '../prefabs/ui/NumberBox.js';
import SocketHandler from "../socket/SocketHandler.js";

export default class Game extends Phaser.State {

    create() {
        //stage
        this.game.world.setBounds(0, 0, 3000, 2000);
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.stage.backgroundColor = '#282626';
        //setup UI
        this.setupUI();
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
        //player
        this.player = this.playerFactory.createPlayer();
        this.game.add.existing(this.player);
        playersGroup.add(this.player);
        this.game.camera.follow(this.player);
        //cache current player
        this.game.geowar.currentPlayer = this.player;
        //set up socket
        this.game.geowar.connectionTimestamp = new Date().getTime();
        this.game.geowar.socketHandler = new SocketHandler(io(this.game.geowar.server), this.game);
    }


    setupUI(){
        this.UILayer = this.add.group();
        // this.bloodUI = new NumberBox(this.game, 50, 20, 'Blood', 20, { font: "15px Arial", align: "center", fill: "red" } , 0);
        // this.UILayer.add(this.bloodUI);

        this.ammoUI = new NumberBox(this.game, 50, 20, 'Ammos', this.game.geowar.initBulletCount, { font: "15px Arial", align: "center", fill: "red" } , 0);
        this.UILayer.add(this.ammoUI);
        this.UILayer.fixedToCamera = true;
    }

    update() {
        this.ammoUI.setValue(this.game.geowar.currentPlayer.weapon.bulletCounts);
    }

}