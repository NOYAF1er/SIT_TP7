'use strict';

describe('Service: persons', function () {

  // load the service's module
  beforeEach(module('sirTp7App'));

  // instantiate service
  var persons;
  beforeEach(inject(function (_persons_) {
    persons = _persons_;
  }));

  it('should do something', function () {
    expect(!!persons).toBe(true);
  });

});
