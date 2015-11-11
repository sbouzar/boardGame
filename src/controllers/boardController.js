'use strict';

game
	.controller('gameController', function($scope, boardProvider) {
		$scope.rows = boardProvider.getRows();
	});