export default class PlayerMoveHandler{

      constructor(game){
         this.game = game;
      }  

      handle(data){
         var playerId = data.id;
         var x = data.x;
         var y = data.y;
         console.log('playerId = ' + playerId + ' move x = ' + x + ' y = ' + y); 
      }
       
}