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

  it('should attach an array of qualities', function(){
    expect(angular.isArray(scope.qualities)).toBe(true);
    expect(scope.qualities.length).toBe(2);
  });

  it('should init selectedQuality as Major', function(){
    expect(scope.selectedQuality).toBe('Major');
  });

  describe('Changing quality', function(){
    beforeEach(function() {
      scope.selectedQuality = scope.qualities[0];
    });
    it('should broadcast a message when the selectedQuality changes', function(){
      var spyBroadcast = spyOn(scope, '$broadcast');
      scope.selectedQuality = scope.qualities[1];
      scope.$apply();
      expect(spyBroadcast).toHaveBeenCalledWith('qualityChanged');
    });
  });
});
