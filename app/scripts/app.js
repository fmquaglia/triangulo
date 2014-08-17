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
      .otherwise({
        redirectTo: '/triads'
      });
  });
