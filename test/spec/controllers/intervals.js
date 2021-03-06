'use strict';

describe('Controller: IntervalsCtrl', function () {

  // load the controller's module
  beforeEach(module('trianguloApp'));

  var IntervalsCtrl,
      scope,
      Tones;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Tones_) {
    scope = $rootScope.$new();
    Tones = _Tones_;
    IntervalsCtrl = $controller('IntervalsCtrl', {
      $scope: scope,
      Tones: Tones
    });
  }));

  it('should make intervals the active page', function(){
    expect(scope.intervalsActive).toBe(true);
    expect(scope.triadsActive).toBeUndefined();
  });

  it('should attach Tones to the scope', function () {
    expect(scope.tones).toEqual(Tones)
  });

  it('should init selectedTone as the first tone in Tones', function(){
    expect(scope.selectedTone).toBe(Tones[0]);
  });

  it('should attach to the scope a list of transpositions', function(){
    expect(angular.isArray(scope.transpositions)).toBe(true);
    expect(scope.transpositions.length).toBe(16);
  });
});
