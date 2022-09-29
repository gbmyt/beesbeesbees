var Bee = function() {
	Grub.call(this, /* fill me in */);
	this.age = 5;
	this.color = 'yellow';
	this.job = 'keep on growing';
};
// empty commit
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;