'use strict';

angular.module('trianguloApp')
  .controller('IntervalsCtrl', function ($scope, Tones) {
    $scope.tones = Tones;
    $scope.selectedTone = $scope.tones[0];

  });
