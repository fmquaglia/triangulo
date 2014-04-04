'use strict';

describe('Directive: note', function () {

  // load the directive's module
  beforeEach(module('trianguloApp'));

  var element,
      $compile,
      scope;

  beforeEach(inject(function ($rootScope, _$compile_) {
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
    element = angular.element('<note key="selectedTone" transpose="' + transpose + '"></note>');
    element = $compile(element)(scope);
    scope.$digest();
  }

  describe('proper initialization', function(){
    it('should render the A note', function () {
      var expectedNote = 'A';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the A# note', function () {
      var expectedNote = 'A#';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the Bb note', function () {
      var expectedNote = 'Bb';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the B note', function () {
      var expectedNote = 'B';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the C note', function () {
      var expectedNote = 'C';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the C# note', function () {
      var expectedNote = 'C#';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the Db note', function () {
      var expectedNote = 'Db';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the D note', function () {
      var expectedNote = 'D';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the D# note', function () {
      var expectedNote = 'D#';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the E note', function () {
      var expectedNote = 'E';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the F note', function () {
      var expectedNote = 'F';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the F# note', function () {
      var expectedNote = 'F#';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the Gb note', function () {
      var expectedNote = 'Gb';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the G note', function () {
      var expectedNote = 'G';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the G# note', function () {
      var expectedNote = 'G#';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
    it('should render the Ab note', function () {
      var expectedNote = 'Ab';
      compileWithTone(expectedNote);
      expect(element.text()).toBe(expectedNote);
    });
  });
  describe('unperoper initialization', function(){
    it('should render A', function(){
      compileWithTone();
      expect(element.text()).toBe('A');
    });
    it('should render A', function(){
      compileWithTone('very long text');
      expect(element.text()).toBe('A');
    });
    it('should render A', function(){
      compileWithTone('10000000');
      expect(element.text()).toBe('A');
    });
  });
  describe('transpose attribute', function(){
    it('if not present should render the key note', function(){
      compileWithToneAndTranspose('A', '');
      expect(element.text()).toBe('A');
    });
    it('if present and valid should render the note transposed properly', function(){
      compileWithToneAndTranspose('C', 'M2');
      expect(element.text()).toBe('D');
      compileWithToneAndTranspose('C', 'm2');
      expect(element.text()).toBe('Db');
      compileWithToneAndTranspose('C', 'M3');
      expect(element.text()).toBe('E');
      compileWithToneAndTranspose('C', 'm3');
      expect(element.text()).toBe('Eb');
      compileWithToneAndTranspose('C', 'P4');
      expect(element.text()).toBe('F');
      compileWithToneAndTranspose('C', 'd4');
      expect(element.text()).toBe('Fb');
      compileWithToneAndTranspose('C', 'A4');
      expect(element.text()).toBe('F#');
      compileWithToneAndTranspose('C', 'P5');
      expect(element.text()).toBe('G');
      compileWithToneAndTranspose('C', 'd5');
      expect(element.text()).toBe('Gb');
      compileWithToneAndTranspose('C', 'A5');
      expect(element.text()).toBe('G#');
      compileWithToneAndTranspose('C', 'M6');
      expect(element.text()).toBe('A');
      compileWithToneAndTranspose('C', 'm6');
      expect(element.text()).toBe('Ab');
      compileWithToneAndTranspose('C', 'M7');
      expect(element.text()).toBe('B');
      compileWithToneAndTranspose('C', 'm7');
      expect(element.text()).toBe('Bb');
    });
    it('if present and not properly formatted should raise an error', function(){
      expect(function() {
        compileWithToneAndTranspose('E', 'XXX');
      }).toThrow();
    });
  });
});
