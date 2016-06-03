(function () {
  'use strict';

  angular
    .module('az.alerts')
    .directive('azAlerts', azAlerts)
  ;

  function azAlerts() {
    return {
      restrict: 'E',
      templateUrl: 'az-helpers/alerts/alerts.directive.html',

      controller: function (AzAlertService) {
        var vm = this;

        vm.alerts = AzAlertService.alerts;
      },
      controllerAs: 'alertVm',
    };
  }
})();
