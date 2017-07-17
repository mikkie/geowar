export default class ConnectedHandler{

      constructor(game){
         this.game = game;
      }  

      handle(data){
         this.game.geowar.socketReady = true;
         this.game.geowar.playerId = data.id;
         console.log('playerId = ' + this.game.geowar.playerId); 
      }
       
}