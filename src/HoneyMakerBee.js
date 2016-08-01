var Grub = function(age, color, food) {
	this.age = age || 0;
	this.color = color || 'pink';
	this.food = food; || 'jelly';

};

Grub.prototype.eat = function() {
	// do something
};

var Bee = function (age, color, job) {
	Grub.call(this, age || 5, color || 'yellow', food);
	this.job = job || 'keep on growing';

};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Grub;

var HoneyMakerBee = function(age, color, job) {
	Bee.call(this, age || 10, undefined, 'make honey');
	this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = Bee;

HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
	if (this.honeyPot > 0) {
		this.honeyPot--;
	}
};



/*


call the Bee superclass
set the prototype
set the constructor
an age property that is set to 10
a job property that is set to make honey
a color property inherited from bee that is set to yellow
a food property that is inherited from grub
an eat method that is inherited from grub
a honeyPot property that is set to 0
a makeHoney method that adds 1 to that honeyBee\'s honeyPot
a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot

*/