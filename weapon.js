(function(exports) {

  var Weapon = function(name, damage, img) {
    this.name = name;
    this.damage = damage;
    this.img = img;
  }
  
  exports.Weapon = Weapon;

  Weapon.prototype.toString = function() {
    return this.name + ' / Damages : ' + this.damage + ' life points.';
  };

  Weapon.prototype.init = function(rows) {

    var cases = [];
    rows.forEach(function(row){
      row.forEach(function(slot){
        if(slot.img.id === 'sand') {
          cases.push(slot);
        }
      });
    });

    var randomNb = Math.floor((Math.random() * (cases.length - 1)) + 1);

    cases[randomNb].img.id = this.name;
    cases[randomNb].img.src = this.img;
    cases[randomNb].img.alt = this.name;
  }

})(this);