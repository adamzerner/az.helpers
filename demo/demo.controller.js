(function () {
  'use strict';

  angular
    .module('demo')
    .controller('DemoCtrl', AzDemoCtrl)
  ;

  function AzDemoCtrl(AzAlertService) {
    var vm = this;

    vm.alertHelloWorld = function () {
      AzAlertService.addAlert('Hello world', 'info');
    };

    vm.alertFooBar = function () {
      AzAlertService.addAlert('Foo bar', 'warning');
    };
  }
})();
