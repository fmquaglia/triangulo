'use strict';

xdescribe('Directive: notation', function () {

  // load the directive's module
  beforeEach(module('trianguloApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<notation></notation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the notation directive');
  }));
});
