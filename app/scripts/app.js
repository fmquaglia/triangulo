'use strict';

angular
  .module('trianguloApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngTeoria'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/triads', {
        templateUrl: 'views/triads.html',
        controller: 'TriadsCtrl'
      })
      .when('/intervals', {
        templateUrl: 'views/intervals.html',
        controller: 'IntervalsCtrl'
      })
      .when('/major_blues', {
        templateUrl: 'views/blues.html',
        controller: 'BluesCtrl',
        quality: 'major'
      })
      .when('/minor_blues', {
        templateUrl: 'views/blues.html',
        controller: 'BluesCtrl',
        quality: 'minor'
      })
      .otherwise({
        redirectTo: '/triads'
      });
  });
