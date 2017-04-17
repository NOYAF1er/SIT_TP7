'use strict';

describe('Controller: PersonsCtrl', function () {

  // load the controller's module
  beforeEach(module('sirTp7App'));

  var PersonsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonsCtrl = $controller('PersonsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonsCtrl.awesomeThings.length).toBe(3);
  });
});
