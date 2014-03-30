'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('trianguloApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of tones to the scope', function () {
    expect(angular.isArray(scope.tones)).toBe(true);
    expect(scope.tones.length).toBe(17);
  });

  it('should init selectedTone as C', function(){
    expect(scope.selectedTone).toBe('C');
  });
});
