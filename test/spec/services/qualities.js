'use strict';

describe('Constant: Qualities', function () {

  // load the service's module
  beforeEach(module('trianguloApp'));

  // instantiate service
  var Qualities;
  beforeEach(inject(function (_Qualities_) {
    Qualities = _Qualities_;
  }));

  it('should exist', function () {
    expect(!!Qualities).toBe(true);
  });

  it('should contain an array if string', function () {
    expect(angular.isArray(Qualities)).toBe(true);
  });

  it('should contain two elements', function(){
    expect(Qualities.length).toBe(2);
  });

  it('should contain string qualities', function(){
    expect(Qualities[0]).toBe('Major');
    expect(Qualities[1]).toBe('Minor');
  });

});
