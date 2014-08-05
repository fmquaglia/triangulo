'use strict';

angular.module('trianguloApp')
  .directive('note', function ($timeout) {
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
                  '<span class="note_symbols">' +
                    '<span class="music-G-clef"></span>' +
                    '<span ng-show="symbolAccidental" ng-class="symbolAccidental"></span>' +
                    '<span ng-class="symbolName"></span>' +
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
        var transposedNote, unTransposedNote;
        if (scope.key.search(/^[A-G]\#?b?$/i) < 0) {
          scope.key = 'A';
        }
        parseKey();

        var playInterval = false;
        if (angular.isDefined(attrs.playInterval)) {
          playInterval = parseInt(attrs.playInterval);
          if (isNaN(playInterval)) {
            playInterval = 1000;
          }
        }

        scope.$watch('key', parseKey);

        function parseKey() {
          unTransposedNote = teoria.note.fromString(scope.key);
          if (scope.transpose() && angular.isString(scope.transpose())) {
            transposedNote = teoria.note.fromString(scope.key).transpose(scope.transpose());
          } else {
            transposedNote = unTransposedNote;
          }
          scope.name = transposedNote.name().toUpperCase();
          scope.accidental = transposedNote.accidental().toLowerCase();
          var octave = '';
          if (scope.name === 'F' || scope.name === 'E' || scope.name === 'D' || scope.name === 'C' || scope.name === 'B'  || scope.name === 'A') {
            octave = '-low';
          }
          scope.symbolName = 'music-whole-' + scope.name + octave;
          var accidentalName='';
          if (scope.accidental === 'b') {
            accidentalName = 'flat';
          }
          if (scope.accidental === '#') {
            accidentalName = 'sharp'
          }
          scope.symbolAccidental = scope.accidental ?  'music-'+ accidentalName + '-' + scope.name + octave : false;
          scope.enharmonics = _.map(transposedNote.enharmonics(), function(enharmonic) {
            return enharmonic.name().toUpperCase() + enharmonic.accidental().toLowerCase();
          });
        }

        function playMIDI(note) {
          note = note || transposedNote;
          var midiNumber = note.key() + 32;
          var delay = 0;
          var velocity = 127;
          MIDI.setVolume(0, 127);
          MIDI.noteOn(0, midiNumber, velocity, delay);
          MIDI.noteOff(0, midiNumber, delay + 0.75);
        }

        scope.play = function() {
          if (angular.isNumber(playInterval)) {
            playMIDI(unTransposedNote);
            $timeout(
              function() {
                playMIDI(transposedNote)
              },
              playInterval);
          } else {
            playMIDI();
          }
        };

        scope.$on('qualityChanged', parseKey);
      }
    };
  });
