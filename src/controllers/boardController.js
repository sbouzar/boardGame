'use strict';

game
	.controller('gameController', function($scope, boardProvider, playerProvider, weaponProvider) {
		$scope.rows = boardProvider.getRows();
		weaponProvider.init($scope.rows);
		playerProvider.init($scope.rows);
	});