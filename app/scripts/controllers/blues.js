'use strict';

angular.module('trianguloApp')
  .controller('BluesCtrl', function ($scope, $route, Tones) {
    var quality = $route.current.quality;
    var majorBluesTranspositions = [
      'P1',
      'M2',
      'm3', // blue note
      'M3',
      'P5',
      'M6'
    ];
    var minorBluesTranspositions = [
      'P1',
      'm3',
      'P4',
      'd5', // blue note
      'P5',
      'm7'
    ];
    var transpositions = {
      'major': majorBluesTranspositions,
      'minor': minorBluesTranspositions
    };

    $scope.tones = Tones;
    $scope.selectedTone = $scope.tones[0];
    $scope.transpositions = transpositions[quality] || transpositions['major'];

  });
