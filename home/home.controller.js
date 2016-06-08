(function () {
  'use strict';

  angular
    .module('demo')
    .controller('HomeCtrl', AzHomeCtrl)
  ;

  function AzHomeCtrl(AzAlertService) {
    var vm = this;

    vm.alertHelloWorld = function () {
      AzAlertService.addAlert('Hello world', 'info');
    };

    vm.alertFooBar = function () {
      AzAlertService.addAlert('Foo bar', 'warning');
    };
  }
})();
