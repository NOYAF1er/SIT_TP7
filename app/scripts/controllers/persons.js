'use strict';

/**
 * @ngdoc function
 * @name sirTp7App.controller:PersonsCtrl
 * @description
 * # PersonsCtrl
 * Controller of the sirTp7App
 */
angular.module('sirTp7App')
  .controller('PersonsCtrl', function ($scope, personsFactory) {
		var persons = personsFactory.query(function(){
			console.log(persons);
			$scope.persons = persons;
		});
  });
