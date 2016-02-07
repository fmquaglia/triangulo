'use strict';

angular.module('trianguloApp')
  .filter('midiNumber', function () {
    return function (input) {
      var key = parseInt(input);
      if (isNaN(key)) {
        throw Error('midiNumber input must be parseable to a valid integer')
      }
      return key + 20;
    };
  });
