'use strict';

angular.module('trianguloApp')
  .directive('matchRoute', function ($route) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var matchClass = attrs.matchRouteClass || 'active';
        scope.$on('$routeChangeSuccess', function() {
          var match = angular.isObject($route.current) &&
                      angular.isString($route.current.originalPath) &&
                      attrs.matchRoute === $route.current.originalPath;
          element.toggleClass(matchClass, match);
        });
      }
    };
  });
