(function(exports) {

  var Player = function(name, weapon, img, times, turn) {
    this.name = name;
    this.weapon = weapon;
    this.img = img;
    this.life = 100;
    this.times = times;
    this.turn = turn;
  }
  
  exports.Player = Player;

  Player.prototype.toString = function() {
    return this.name + ' / ' + this.life + ' life points remaining.';
  };

  Player.prototype.init = function(rows) {

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