'use strict';

angular.module('trianguloApp')
  .directive('note', function ($timeout, $filter, Teoria) {
    return {
      scope: {
        key: '=',
        transpose: '&'
      },
      template: '<span class="note midi-{{midiNumber}}" ng-click="play()">' +
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
        var transposedNote, unTransposedNote;
        if (scope.key.search(/^[A-G]\#?b?$/i) < 0) {
          scope.key = 'A';
        }
        var parseKey = function() {
          unTransposedNote  = Teoria.note.fromString(scope.key);
          if (scope.transpose() && angular.isString(scope.transpose())) {
            transposedNote  = Teoria.note.fromString(scope.key).transpose(scope.transpose());
          } else {
            transposedNote  = unTransposedNote;
          }
          scope.name        = transposedNote.name().toUpperCase();
          scope.accidental  = transposedNote.accidental().toLowerCase();
          scope.midiNumber  = getMidiNumber(transposedNote);
          console.log(transposedNote);
          scope.enharmonics = _.map(transposedNote.enharmonics(), function(enharmonic) {
            return enharmonic.name().toUpperCase() + enharmonic.accidental().toLowerCase();
          });
        };

        var getMidiNumber = function (note){
          return $filter('midiNumber')(note.key());
        };

        var playMIDI = function(note) {
          note            = note || transposedNote;
          var midiNumber  = getMidiNumber(note);
          var delay       = 0;
          var velocity    = 127;
          MIDI.setVolume(0, 127);
          MIDI.noteOn(0, midiNumber, velocity, delay);
          MIDI.noteOff(0, midiNumber, delay + 0.75);
        };

        parseKey();

        var playInterval = false;
        if (angular.isDefined(attrs.playInterval)) {
          playInterval = parseInt(attrs.playInterval);
          if (isNaN(playInterval)) {
            playInterval = 1000;
          }
        }

        scope.$watch('key', parseKey);

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
