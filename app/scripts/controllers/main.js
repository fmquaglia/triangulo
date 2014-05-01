'use strict';

angular.module('trianguloApp')
  .controller('MainCtrl', function ($scope) {

    $scope.tones = [
      'C',
      'C#',
      'Db',
      'D',
      'D#',
      'Eb',
      'E',
      'F',
      'F#',
      'Gb',
      'G',
      'G#',
      'Ab',
      'A',
      'A#',
      'Bb',
      'B'
    ];

    $scope.qualities = [
      'Major',
      'Minor'
    ];

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

    $scope.selectedQuality = $scope.qualities[0];
    $scope.selectedTone = $scope.tones[0];

    $scope.$watch('selectedQuality', function() {
      $scope.$broadcast('qualityChanged');
    });

  });
