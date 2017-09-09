export default class NumberBox extends Phaser.Group { 

	constructor(game, x, y, text, val, style, parent) {  
	  	super(game, parent);
        this.text = text;
		this.val = val;    
		this.txtValue = new Phaser.Text(this.game, x, y, text + ': ' + val.toString(), style);
		this.txtValue.anchor.setTo(.5, .5);
		this.add(this.txtValue);

	}

	setValue(val) {
		this.val = val;
		this.txtValue.text = this.text + ': ' + val.toString();
	}

	getValue(){
       return this.val;
	}
}