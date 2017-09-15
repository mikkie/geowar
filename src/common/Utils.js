export default class Utils {
    static generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    static generateRandomNumber() {
        var letters = '0123456789ABCDEF';
        var color = '';
        for (var i = 0; i < 10; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    static randomDicision(flagOwner,flagName,nextFlagTimeName,timeInterval){
        if(!flagOwner[nextFlagTimeName] || flagOwner.game.time.now > flagOwner[nextFlagTimeName]){
           flagOwner[nextFlagTimeName] = flagOwner.game.time.now + timeInterval;
           flagOwner[flagName] = Math.random() > 0.5;   
        }
        return flagOwner[flagName];  
    }
}