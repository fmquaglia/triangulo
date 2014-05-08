'use strict';

angular.module('trianguloApp')
  .controller('IntervalsCtrl', function ($scope, Tones) {
    $scope.intervalsActive = true;
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

    $scope.transpositionNames = {
     'P1': 'unison',
     'm2': 'minor second',
     'M2': 'major second',
     'm3': 'minor third',
     'M3': 'major third',
     'd4': 'diminished fourth',
     'P4': 'perfect fourth',
     'A4': 'augmented fourth',
     'd5': 'diminished fifth',
     'P5': 'perfect fifth',
     'A5': 'augmented fifth',
     'm6': 'minor sixth',
     'M6': 'major sixth',
     'm7': 'minor seventh',
     'M7': 'major seventh',
     'P8': 'octave'
    };

  });
