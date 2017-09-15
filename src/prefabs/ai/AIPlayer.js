import Player from '../players/Player.js';

export default class AIPlayer extends Player {

    constructor(game, x, y, width, height, weaponFactory, colorSet) {
        super(game, x, y, width, height, weaponFactory, colorSet, false, null);
        this.createStateMachine();
    }


    calcDistance(player){
       var dx = player.x - this.x;
       var dy = player.y - this.y;
       return Math.sqrt(dx * dx + dy * dy);
    }

    getNearestPlayerInRange(){
        var players = this.game.geowar.playersGroup.children;
        if(players && players.length > 0){
           var minDistance = null;
           var minDistancePlayer = null;
           for(var i in players){
               var distance = this.calcDistance(players[i]);
               if(minDistance == null || distance < minDistance){
                  minDistance = distance;
                  minDistancePlayer = players[i];    
               }  
           }   
        }
        return minDistancePlayer;
    }



    catchupPlayer(nearestPlayer,fsm){
        if(this.calcDistance(nearestPlayer) > 600){
           var radomSpeed = Math.floor(Math.random() * 100 + 50);
           this.body.thrust(radomSpeed);
        }
        else{
           fsm.attackPlayers();
        }
    }

    createStateMachine() {
        var that = this;
        this.fsm = new StateMachine({
            init: 'cruise',
            transitions: [
                { name: 'target', from: 'cruise', to: 'attack' },
                { name: 'lostTarget', from: 'attack', to: 'cruise' }
            ],
            methods: {
                searchPlayers : function(){
                   if(this.is('attack')){
                      this.lostTarget();
                   } 
                   var nearestPlayer = that.getNearestPlayerInRange();
                   if(nearestPlayer){
                      var targetAngle = that.game.math.angleBetween(that.x,that.y,nearestPlayer.x,nearestPlayer.y);
                      that.body.angle = targetAngle * 180 / Math.PI + 90; 
                      that.catchupPlayer(nearestPlayer,this);   
                   }
                },
                attackPlayers : function(){
                   this.target(); 
                   if(!that.weapon.nextFireTime){
                      that.weapon.nextFireTime = that.game.time.now + 5000;   
                   }
                   else if(that.game.time.now > that.weapon.nextFireTime){
                      that.weapon.fire(); 
                      that.weapon.nextFireTime = that.game.time.now + Math.floor(Math.random() * 4000 + 1000);   
                   } 
                       
                }
            }
        });
    }

    update() {
        this.fsm.searchPlayers();
    }

}