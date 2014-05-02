'use strict';

angular.module('trianguloApp')
  .directive('note', function () {
    return {
      scope: {
        key: '=',
        transpose: '&'
      },
      template: '<span class="note" ng-click="play()">' +
                  '<span class="title" ng-transclude></span>' +
                  '<span class="note_text">' +
                    '<span class="name">{{name}}</span>' +
                    '<sup class="accidental">{{accidental}}</sup>' +
                    '</span>' +
                  '<ul class="enharmonics">' +
                    '<li class="enharmonic" ng-repeat="enharmonic in enharmonics">{{enharmonic}}</li>' +
                  '</ul>' +
                '</span>',
      restrict: 'E',
      transclude: true,
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.key = angular.isDefined(scope.key) ? jQuery.trim(scope.key.toString()).toUpperCase() : 'A';
        var fullNote;
        if (scope.key.search(/^[A-G]\#?b?$/i) < 0) {
          scope.key = 'A';
        }
        parseKey();

        scope.$watch('key', parseKey);

        function parseKey() {
          if (scope.transpose() && angular.isString(scope.transpose())) {
            fullNote = teoria.note.fromString(scope.key).transpose(scope.transpose());
          } else {
            fullNote = teoria.note.fromString(scope.key);
          }
          scope.name = fullNote.name().toUpperCase();
          scope.accidental = fullNote.accidental().toLowerCase();
          scope.enharmonics = _.map(fullNote.enharmonics(), function(enharmonic) {
            return enharmonic.name().toUpperCase() + enharmonic.accidental().toLowerCase();
          });
        }

        scope.play = function() {
          var midiNumber = fullNote.key() + 32;
          var delay = 0; // play one note every quarter second
          var velocity = 127; // how hard the note hits
          MIDI.setVolume(0, 127);
          MIDI.noteOn(0, midiNumber, velocity, delay);
          MIDI.noteOff(0, midiNumber, delay + 0.75);
        };

        scope.$on('qualityChanged', parseKey);
      }
    };
  });
