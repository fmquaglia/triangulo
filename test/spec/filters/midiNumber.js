'use strict';

describe('Filter: midiNumber', function () {

  // load the filter's module
  beforeEach(module('trianguloApp'));

  // initialize a new instance of the filter before each test
  var midiNumber;
  beforeEach(inject(function ($filter) {
    midiNumber = $filter('midiNumber');
  }));

  it('should return the input number plus 20"', function () {
    expect(midiNumber(100)).toBe(120);
  });

  it('should parse to integer', function () {
    expect(midiNumber('11')).toBe(31);
  });

  it('should throw if cant parse to integer', function () {
    var parse = function () {
      midiNumber('foo');
    };
    expect(parse).toThrow();
  });

});
