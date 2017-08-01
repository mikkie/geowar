export default class CommonHandler {
    constructor(game) {
        this.game = game;
    }

    handle(data) {
       switch(data.action){
          case "create" : 
              create(data);
              break;
          case "move" : 
              move(data);
              break;
          case "change" : 
              change(data);
              break;
          case "destroy" : 
              destroy(data);
              break;            
          default : 
              break;      
       }
    }


    create(data){

    }

    move(data){

    }

    change(data){

    }

    destroy(data){

    }
}