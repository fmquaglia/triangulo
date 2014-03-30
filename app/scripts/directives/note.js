'use strict';

angular.module('trianguloApp')
  .directive('note', function () {
    return {
      scope: {
        key: '='
      },
      template: '<span class="note"><span class="name">{{name}}</span><sup class="accidental">{{accidental}}</sup></span>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.key = angular.isDefined(scope.key) ? jQuery.trim(scope.key.toString()).toUpperCase() : 'A';
        var fullNote;
        if (scope.key.search(/^[A-G]\#?b?$/i) < 0) {
          scope.key = 'A'
        }
        parseKey();

        scope.$watch('key', parseKey);

        function parseKey() {
          if (angular.isString(attrs.transpose)) {
            fullNote = teoria.note.fromString(scope.key).transpose(attrs.transpose);
          } else {
            fullNote = teoria.note.fromString(scope.key);
          }
          scope.name = fullNote.name();
          scope.accidental = fullNote.accidental();
        }
      }
    };
  });
