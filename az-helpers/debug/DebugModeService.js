(function () {
  'use strict';

  angular
    .module('az.debug')
    .service('AzDebugModeService', AzDebugModeService)
  ;

  function AzDebugModeService() {
    this.debugModeContainer = {
      debugMode: false,
    };
  }
})();
