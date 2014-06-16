'use strict';

xdescribe('Directive: matchRoute', function () {

  // load the directive's module
  beforeEach(module('trianguloApp'));

  var element,
      scope,
      $compile,
      $location;

  beforeEach(inject(function ($rootScope, _$compile_, _$location_, $httpBackend) {
    scope = $rootScope.$new();
    $compile = _$compile_;
    $location = _$location_;
    $httpBackend.whenGET(/views*/).respond(200);
  }));

  function compileAndDigest(markup) {
    element = angular.element(markup);
    element = $compile(element)(scope);
    scope.$digest();
  }


  describe('matching route', function(){
    it('should add the default class to the element when the route matches', function(){
      spyOn($location, 'path').andReturn('/foo');
      compileAndDigest('<a match-route="/foo"></a>');
      expect(element.hasClass('active')).toBe(true);
    });
  });
});
