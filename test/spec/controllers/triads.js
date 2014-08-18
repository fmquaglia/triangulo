'use strict';

describe('Controller: TriadsCtrl', function () {

  // load the controller's module
  beforeEach(module('trianguloApp'));

  var MainCtrl,
      scope,
      Tones,
      Triads,
      Qualities;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Tones_, _Qualities_, _Triads_) {
    scope = $rootScope.$new();
    Tones = _Tones_;
    Triads = _Triads_;
    Qualities = _Qualities_;
    MainCtrl = $controller('TriadsCtrl', {
      $scope: scope,
      Tones: Tones,
      Qualities: Qualities,
      Triads: Triads
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

  it('should attach to the scope the Qualities constant', function(){
    expect(scope.Qualities).toEqual(Qualities);
  });

  it('should init selectedQuality as Major', function(){
    expect(scope.selectedQuality).toBe('Major');
  });

  describe('Changing quality', function(){
    beforeEach(function() {
      scope.selectedQuality = scope.Qualities[0];
    });
    it('should broadcast a message when the selectedQuality changes', function(){
      var spyBroadcast = spyOn(scope, '$broadcast');
      scope.selectedQuality = scope.Qualities[1];
      scope.$apply();
      expect(spyBroadcast).toHaveBeenCalledWith('qualityChanged');
    });
  });

  it('should attach to the scope the Triads object', function(){
    expect(scope.Triads).toEqual(Triads);
  });
});
