'use strict';

angular.module('trianguloApp')
  .controller('TriadsCtrl', function ($scope, Tones, Qualities) {

    $scope.triadsActive = true;
    $scope.tones = Tones;
    $scope.Qualities = Qualities;

    $scope.triads = {
      'Major': [
         ['T', 'M3', 'P5'],
         ['M-3', 'T', 'm3'],
         ['P-5', 'm-3', 'T']
      ],
      'Minor': [
         ['T', 'm3', 'P5'],
         ['m-3', 'T', 'M3'],
         ['P-5', 'M-3', 'T']
      ]
    };

    $scope.selectedQuality = $scope.Qualities[0];
    $scope.selectedTone = $scope.tones[0];

    $scope.$watch('selectedQuality', function() {
      $scope.$broadcast('qualityChanged');
    });

  });
