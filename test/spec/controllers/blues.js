'use strict';

describe('Controller: BluesCtrl', function () {

  // load the controller's module
  beforeEach(module('trianguloApp'));

  var BluesctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BluesctrlCtrl = $controller('BluesctrlCtrl', {
      $scope: scope
    });
  }));
});
