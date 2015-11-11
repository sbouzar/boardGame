var weapons = [];

var knife1 = new Weapon("knife1", 10, "images/knife.gif");
weapons.push(knife1);
var knife2 = new Weapon("knife2", 10, "images/knife.gif");
weapons.push(knife2);
var gun = new Weapon("gun", 20, "images/gun.gif");
weapons.push(gun);
var sword = new Weapon("sword", 30, "images/sword.png");
weapons.push(sword);
var bazooka = new Weapon("bazooka", 50, "images/bazooka.gif");
weapons.push(bazooka);

game.service('weaponProvider', function() {
	this.init = function(rows) {
		gun.init(rows);
		sword.init(rows);
		bazooka.init(rows);
	}
	this.getWeapons = function() {
		return weapons;
	}
});