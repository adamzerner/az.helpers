(function () {
  'use strict';

  angular
    .module('az.debug')
    .controller('AzDebugCtrl', AzDebugCtrl)
  ;

  function AzDebugCtrl(AzDebugModeService) {
    var vm = this;

    window.azDebug = {};

    vm.debugModeContainer = AzDebugModeService.debugModeContainer;

    vm.log = function () {
      console.log(vm.name);
      console.log(vm.content);
      window.azDebug[vm.name] = vm.content;
    };
  }
})();
