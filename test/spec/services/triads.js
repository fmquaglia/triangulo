'use strict';

describe('Service: triads', function () {

  // load the service's module
  beforeEach(module('trianguloApp'));

  // instantiate service
  var Triads;
  beforeEach(inject(function (_Triads_) {
    Triads = _Triads_;
  }));

  it('should exist', function () {
    expect(!!Triads).toBe(true);
  });
  
  it('should return an object', function(){
    expect(angular.isObject(Triads)).toBe(true);
  });
  
  it('should contain an object by Quality', function(){
    expect(angular.isObject(Triads.byQuality)).toBe(true);
  });

  it('each attribute of by Quality return an array of arrays', function(){
    _.values(Triads.byQuality, function(value) {
      expect(angular.isArray(value)).toBe(true);
      angular.each(value, function(triad) {
        expect(angular.isArray(triad)).toBe(true);
      });
    });
  });

});
