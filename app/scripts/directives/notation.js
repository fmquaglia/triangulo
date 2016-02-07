'use strict';

angular.module('trianguloApp')
  .directive('notation', function () {
    return {
      template: '<span class="notation" ng-show="name">' +
                  '<span class="clef music-G-clef"></span>' +
                  '<span class="accidental  music-{{accidental}}-{{name}}"></span>' +
                  '<span class="name music-whole-{{name}}"></span>' +
                  '<pre>name: {{ name | json }}</pre>' +
                  '<pre>acc: {{ accidental | json }}</pre>' +
                '</span>',
      restrict: 'E',
      replace: true,
      scope: {
        'midiNumber': '='
      },
      controller: function($scope) {
        //function parseKey(){
        //  var octave = '';
        //  if ($scope.name === 'F' || $scope.name === 'E' || $scope.name === 'D' || $scope.name === 'C' || $scope.name === 'B'  || $scope.name === 'A') {
        //    octave = '-low';
        //  }
        //  $scope.symbolName = 'music-whole-' + $scope.name + octave;
        //  var accidentalName='';
        //  if ($scope.accidental === 'b') {
        //    accidentalName = 'flat';
        //  }
        //  if ($scope.accidental === '#') {
        //    accidentalName = 'sharp'
        //  }
        //  $scope.symbolAccidental = $scope.accidental ?  'music-'+ accidentalName + '-' + $scope.name + octave : false;
        //  console.log('parseKey', $scope.symbolAccidental, $scope.accidental, $scope.symbolName, $scope.name);
        //}
        //$scope.$on('note.parseKey', parseKey);
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
