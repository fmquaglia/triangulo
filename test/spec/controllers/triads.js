'use strict';

describe('Controller: TriadsCtrl', function () {

  // load the controller's module
  beforeEach(module('trianguloApp'));

  var MainCtrl,
      scope,
      Tones;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Tones_) {
    scope = $rootScope.$new();
    Tones = _Tones_;
    MainCtrl = $controller('TriadsCtrl', {
      $scope: scope
    });
  }));

  it('should make triads the active page', function(){
    expect(scope.triadsActive).toBe(true);
    expect(scope.intervalsActive).toBeUndefined();
  });

  it('should attach Tones to the scope', function () {
    expect(scope.tones).toEqual(Tones)
  });

  it('should init selectedTone as the first tone in Tones', function(){
    expect(scope.selectedTone).toBe(Tones[0]);
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
