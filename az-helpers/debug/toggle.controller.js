(function () {
  'use strict';

  angular
    .module('az.helpers')
    .controller('AzToggleDebugModeCtrl', AzToggleDebugModeCtrl)
  ;

  function AzToggleDebugModeCtrl(AzDebugModeService) {
    var vm = this;

    vm.toggleDebugMode = function () {
      AzDebugModeService.debugModeContainer.debugMode = !AzDebugModeService.debugModeContainer.debugMode;
    };

    vm.debugModeContainer = AzDebugModeService.debugModeContainer;
  }
})();
