(function () {
  'use strict';

  angular
    .module('demo')
    .config(AzConfig)
  ;

  function AzConfig($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/home/home.html',
        controller: 'HomeCtrl as vm',
      })
      .state('one', {
        url: '/one',
        template: 'one',
        authRequirements: ['foo'],
      })
      .state('two', {
        url: '/two',
        template: 'two',
      })
    ;

    // $routeProvider
    //   .when('/home', {
    //     template: 'home',
    //   })
    //   .when('/one', {
    //     template: 'one',
    //     authRequirements: ['foo'],
    //   })
    //   .when('/two', {
    //     template: 'two',
    //   })
    // ;
  }
})();
