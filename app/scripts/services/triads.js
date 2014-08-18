'use strict';

angular.module('trianguloApp')
  .service(
    'Triads',
    function Triads() {
      var self = this;
      self.byQuality = {
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
      return self;
    }
  );
