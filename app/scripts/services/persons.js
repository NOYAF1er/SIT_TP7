'use strict';

/**
 * @ngdoc service
 * @name sirTp7App.persons
 * @description
 * # persons
 * Factory in the sirTp7App.
 */
angular.module('sirTp7App')
  .factory('personsFactory', function ($resource) {
      return $resource('/api/personne/');
  });
