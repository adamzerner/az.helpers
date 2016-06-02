(function () {
  'use strict';

  angular
    .module('az.debug')
    .directive('azDebugToggle', azDebugToggle)
  ;

  function azDebugToggle() {
    return {
      restrict: 'E',
      templateUrl: 'az-helpers/debug/toggle.directive.html',
      controller: 'AzToggleDebugModeCtrl as vm',
    };
  }
})();
