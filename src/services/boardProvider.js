'use strict';

var gameCase;
var index = 0;
var row = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var cases = [];
var rows = [];
var randomNb = 0;
var image = {};

while(index < 10) {
	for(var i = 1; i < 11; i++) {
    randomNb = Math.floor((Math.random() * ((i + 7) - i)) + i);
    if (randomNb == i) {
      image.src = './images/water.png';
      image.alt = 'water';
    } else {
      image.src = './images/sand.png';
      image.alt = 'sand';
    }
		cases.push({
			id: row[index] + i,
			class: "case",
			img: {
				src: image.src,
				alt: image.alt
			} 
		});
	}
	rows.push(cases);
	cases = [];
	index++;
}


game.service('boardProvider', function() {
	this.getRows = function() {
		return rows;
	}
});