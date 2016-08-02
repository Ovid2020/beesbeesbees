
var Bee = function (age, color, food, job) {
	Grub.call(this, 5, 'yellow');
	this.job = job || 'keep on growing';

};

Bee.prototype = Object.create(Bee.prototype);
Bee.prototype.constructor = Grub;



