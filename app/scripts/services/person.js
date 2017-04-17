'use strict';

/**
 * @ngdoc service
 * @name sirTp7App.person
 * @description
 * # person
 * Factory in the sirTp7App.
 */
angular.module('sirTp7App')
  .factory('person', function () {
      return $resource('/api/personne/:id');
  });
