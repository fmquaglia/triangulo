'use strict';

angular.module('trianguloApp')
  .directive('matchRoute', function ($location) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var matchClass = attrs.matchRouteClass || 'active';
        scope.$on('$routeChangeSuccess', function() {
          var match = attrs.matchRoute === $location.path();
          element.toggleClass(matchClass, match);
        });
      }
    };
  });
