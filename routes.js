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
      .state('demo', {
        url: '/',
        templateUrl: '/demo/demo.html',
        controller: 'DemoCtrl as vm',
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
    //   .when('/demo', {
    //     template: 'demo',
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
