angular
  .module('az.debug', [])
  .directive('azDebug', azDebug)
;

function azDebug() {
  return {
    restrict: 'E',
    templateUrl: 'az-helpers/debug/debug.directive.html',
    scope: {},
    bindToController: {

    },
    controller: 'AzDebugCtrl as azDebugVm'
  };
}
