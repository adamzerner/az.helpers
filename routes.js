angular
  .module('demo')
  .config(AzConfig)
;

function AzConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('home');
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/home/home.html',
      controller: 'HomeCtrl as homeVm',
    })
  ;
}
