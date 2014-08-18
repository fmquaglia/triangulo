'use strict';

angular.module('trianguloApp')
  .controller('TriadsCtrl', function ($scope, Tones, Qualities, Triads) {

    $scope.tones = Tones;
    $scope.Qualities = Qualities;
    $scope.Triads = Triads;

    $scope.triadsActive = true;
    $scope.selectedQuality = $scope.Qualities[0];
    $scope.selectedTone = $scope.tones[0];

    $scope.$watch('selectedQuality', function() {
      $scope.$broadcast('qualityChanged');
    });

  });
