var HoneyMakerBee = function() {
	Bee.call(this, /* fill me in! */);
	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;
};
// empty commit
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot--;
};