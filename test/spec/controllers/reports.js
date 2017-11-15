'use strict';

describe('Controller: reportsCtrl', function () {

  // load the controller's module
  beforeEach(module('healthApplicationApp'));

  var reportsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    reportsCtrl = $controller('reportsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(reportsCtrl.awesomeThings.length).toBe(3);
  });
});
