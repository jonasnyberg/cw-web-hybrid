'use strict';

// Declare app level module which depends on views, and components
angular.module('cw', [
  'ngRoute',
  'cw.controllers'
])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/hello1', {
      templateUrl: 'app/ng1/hello1/hello1.html',
      controller: 'Hello1Controller',
      controllerAs: 'vm'
    });
  }]);
