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
});
