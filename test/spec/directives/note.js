'use strict';

describe('Directive: note', function () {

  // load the directive's module
  beforeEach(module('trianguloApp'));

  var element,
      $compile,
      $rootScope,
      scope;

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));

  function compileWithTone(tone) {
    scope.selectedTone = tone;
    element = angular.element('<note key="selectedTone"></note>');
    element = $compile(element)(scope);
    scope.$digest();
  }
  function compileWithToneAndTranspose(tone, transpose) {
    scope.selectedTone = tone;
    scope.transposeKey = transpose;
    element = angular.element('<note key="selectedTone" transpose="transposeKey"></note>');
    element = $compile(element)(scope);
    scope.$digest();
  }
  function getNoteText(el) {
    return jQuery(el).find('.note_text').text();
  }

  describe('proper initialization', function(){
    it('should render the A note', function () {
      var expectedNote = 'A';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the A# note', function () {
      var expectedNote = 'A#';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the Bb note', function () {
      var expectedNote = 'Bb';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the B note', function () {
      var expectedNote = 'B';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the C note', function () {
      var expectedNote = 'C';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the C# note', function () {
      var expectedNote = 'C#';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the Db note', function () {
      var expectedNote = 'Db';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the D note', function () {
      var expectedNote = 'D';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the D# note', function () {
      var expectedNote = 'D#';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the E note', function () {
      var expectedNote = 'E';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the F note', function () {
      var expectedNote = 'F';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the F# note', function () {
      var expectedNote = 'F#';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the Gb note', function () {
      var expectedNote = 'Gb';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the G note', function () {
      var expectedNote = 'G';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the G# note', function () {
      var expectedNote = 'G#';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
    it('should render the Ab note', function () {
      var expectedNote = 'Ab';
      compileWithTone(expectedNote);
      expect(getNoteText(element)).toBe(expectedNote);
    });
  });
  describe('unperoper initialization', function(){
    it('should render A', function(){
      compileWithTone();
      expect(getNoteText(element)).toBe('A');
    });
    it('should render A', function(){
      compileWithTone('very long text');
      expect(getNoteText(element)).toBe('A');
    });
    it('should render A', function(){
      compileWithTone('10000000');
      expect(getNoteText(element)).toBe('A');
    });
  });
  describe('transpose attribute', function(){
    it('if not present should render the key note', function(){
      compileWithToneAndTranspose('A', '');
      expect(getNoteText(element)).toBe('A');
    });
    it('if present and valid should render the note transposed properly', function(){
      compileWithToneAndTranspose('C', 'M2');
      expect(getNoteText(element)).toBe('D');
      compileWithToneAndTranspose('C', 'm2');
      expect(getNoteText(element)).toBe('Db');
      compileWithToneAndTranspose('C', 'M3');
      expect(getNoteText(element)).toBe('E');
      compileWithToneAndTranspose('C', 'm3');
      expect(getNoteText(element)).toBe('Eb');
      compileWithToneAndTranspose('C', 'P4');
      expect(getNoteText(element)).toBe('F');
      compileWithToneAndTranspose('C', 'd4');
      expect(getNoteText(element)).toBe('Fb');
      compileWithToneAndTranspose('C', 'A4');
      expect(getNoteText(element)).toBe('F#');
      compileWithToneAndTranspose('C', 'P5');
      expect(getNoteText(element)).toBe('G');
      compileWithToneAndTranspose('C', 'd5');
      expect(getNoteText(element)).toBe('Gb');
      compileWithToneAndTranspose('C', 'A5');
      expect(getNoteText(element)).toBe('G#');
      compileWithToneAndTranspose('C', 'M6');
      expect(getNoteText(element)).toBe('A');
      compileWithToneAndTranspose('C', 'm6');
      expect(getNoteText(element)).toBe('Ab');
      compileWithToneAndTranspose('C', 'M7');
      expect(getNoteText(element)).toBe('B');
      compileWithToneAndTranspose('C', 'm7');
      expect(getNoteText(element)).toBe('Bb');
    });
    it('if present and not properly formatted should raise an error', function(){
      expect(function() {
        compileWithToneAndTranspose('E', 'XXX');
      }).toThrow();
    });
  });
  describe('note enharmonics', function(){
    it('should print them', function(){
      compileWithTone('C');
      expect(jQuery(element).find('.enharmonic').text()).toEqual('DbbB#')
    });
  });
  // TODO: find out how to test
  xdescribe('play note', function(){
    beforeEach(function() {
      MIDI.setVolume = function(volume) {
        return volume;
      };
      MIDI.delay = function(delay) {
        return delay;
      };
      MIDI.velocity = function(velocity) {
        return velocity;
      };
    });
    it('when clicked should play note through MIDI', function(){
      var spyMIDIVolume = spyOn(MIDI, 'setVolume');
      var spyMIDIDelay = spyOn(MIDI, 'delay');
      var spyMIDIVelocity = spyOn(MIDI, 'velocity');
      compileWithTone('C');
      element.click();
      expect(spyMIDIVolume).toHaveBeenCalled();
      expect(spyMIDIDelay).toHaveBeenCalled();
      expect(spyMIDIVelocity).toHaveBeenCalled();
    });
  });

  describe('broadcast listener', function(){
    beforeEach(function() {
      compileWithToneAndTranspose('C', 'M3')
    });
    it('should listen for quality changes and re parse keys', function(){
      scope.transposeKey = ':3';
      $rootScope.$broadcast('qualityChanged');
      scope.$apply();
      expect(getNoteText(element)).toBe('Eb');
    });
  });
});
