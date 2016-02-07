'use strict';

angular.module('trianguloApp')
  .controller('BluesCtrl', function ($scope, Tones) {
    $scope.tones = Tones;
    $scope.selectedTone = $scope.tones[0];

  });
