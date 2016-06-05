(function () {
  'use strict';

  angular
    .module('az.dialogs', ['ngDialog', 'az.alerts'])
    .service('AzDialogService', AzDialogService)
  ;

  function AzDialogService(ngDialog, $timeout, AzAlertService) {
    var self = this;

    self.dialog = function (options) {
      return ngDialog.open({
        template: options.template || 'az-helpers/dialogs/dialog.html',
        controller: function ($scope) {
          $scope.title = options.title;
          $scope.body = options.body;
        },
      });
    };

    self.confirm = function (options) {
      return ngDialog.openConfirm({
        template: options.template || 'az-helpers/dialogs/confirm.html',
        controller: function ($scope) {
          $scope.title = options.title;
          $scope.body = options.body;
        },
      });
    };

    self.remind = function (options) {
      var callback;
      if (options.reminderType === 'dialog') {
        callback = function () {
          return self.dialog({
            title: options.title,
            body: options.title,
          });
        };
      } else if (options.reminderType === 'confirm') {
        callback = function () {
          return self.confirm({
            title: options.title,
            body: options.body,
          });
        };
      } else if (options.reminderType === 'jsAlert') {
        callback = function () {
          if (options.title) {
            alert(options.title + '\n\n' + options.body);
          } else if (!options.title) {
            alert(options.body);
          }
        };
      } else if (options.reminderType === 'alertMessage') {
        callback = function () {
          return AzAlertService.addAlert(options.text, options.type);
        };
      }

      return $timeout(callback, options.millisecondsUntilReminder);
    };

    return self;
  }
})();
