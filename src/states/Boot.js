export default class Boot {
    preload() {
        this.load.image('preloader', 'assets/images/loading_bar.png');
    }

    create() {
        //namespace
        this.game.geowar = {
            server : 'http://www.yamixed.com/nodejs',
            initBulletCount : 50,
            winBulletCount : 5,
            enablePredict : false,
            debug : localStorage.getItem('geowar.debug') == 'true' ? true : false,
            log : function(msg){
               if(this.debug){
                 console.log(msg); 
               }   
            }
        }; 
        this.game.input.maxPointers = 5;
        //make sure the game running even loose focus
        this.game.stage.disableVisibilityChange = true;
        this.game.state.start('preload');
    }
}