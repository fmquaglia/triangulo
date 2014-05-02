'use strict';

angular.module('trianguloApp')
  .controller('IntervalsCtrl', function ($scope, Tones) {
    $scope.tones = Tones;
    $scope.selectedTone = $scope.tones[0];
    $scope.transpositions = [
      'P1',
      'm2',
      'M2',
      'm3',
      'M3',
      'd4',
      'P4',
      'A4',
      'd5',
      'P5',
      'A5',
      'm6',
      'M6',
      'm7',
      'M7',
      'P8'
    ];

  });
