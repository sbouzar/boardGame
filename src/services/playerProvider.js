var player1 = new Player("Franck", knife1, "images/player1.gif", 0, true);
var player2 = new Player("Marguerite", knife2, "images/player2.gif", 0, false);

game.service('playerProvider', function() {
	this.init = function(rows) {
		player1.init(rows);
		player2.init(rows);
	}
});