'use strict';

/**
 * @ngdoc function
 * @name sirTp7App.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the sirTp7App
 */
angular.module('sirTp7App')
  .controller('PersonCtrl', function () {
		var person = personFactory.query(function(){
			console.log(person);
			$scope.person = person;
		});
  });
