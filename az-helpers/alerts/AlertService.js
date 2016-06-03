(function () {
  'use strict';

  angular
    .module('az.alerts', [])
    .service('AzAlertService', AzAlertService)
  ;

  function AzAlertService() {
    var service = {};
    service.alerts = [];

    service._conditionallyAddAlert = function (newText, newType) {
      var currentAlert;

      // check if the alert is already visible
      for (var i = 0, len = service.alerts.length; i < len; i++) {
        currentAlert = service.alerts[i];

        if (currentAlert.text === newText && currentAlert.type === newType) {
          return false;
        }
      }

      service.alerts.push({
        text: newText,
        type: newType,
      });

      return true;
    };

    service.addAlert = function (text, type) {
      var successfullyAdded = service._conditionallyAddAlert(text, type);
      if (!successfullyAdded) {
        console.info('This following alert is already visible. text: ' + text + ', type: ' + type);
      }
    };

    service.addAlerts = function (alerts) {
      alerts.forEach(function (alert) {
        service.addAlert(alert.text, alert.type);
      });
    };

    return service;
  }
})();
