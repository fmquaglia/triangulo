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

    $scope.selectedTone = 'C';


  });
