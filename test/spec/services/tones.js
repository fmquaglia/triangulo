'use strict';

describe('Service: tones', function () {

  // load the service's module
  beforeEach(module('trianguloApp'));

  // instantiate service
  var Tones;
  beforeEach(inject(function (_Tones_) {
    Tones = _Tones_;
  }));

  it('should do something', function () {
    expect(!!Tones).toBe(true);
  });

  it('should be an array', function(){
    expect(angular.isArray(Tones)).toBe(true);
  });

  it('should have 17 elements', function(){
    expect(Tones.length).toBe(17);
  });

});
