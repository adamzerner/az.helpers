(function () {
  'use strict';

  angular
    .module('az.dialogs', ['ngDialog'])
    .service('AzDialogService', AzDialogService)
  ;

  function AzDialogService(ngDialog) {
    this.dialog = function (options) {
      return ngDialog.open({
        template: options.template || 'az-helpers/dialogs/DialogService/dialog.html',
        controller: function ($scope) {
          $scope.title = options.title;
          $scope.body = options.body;
        },
      });
    };

    this.confirm = function (options) {
      return ngDialog.openConfirm({
        template: options.template || 'az-helpers/dialogs/DialogService/confirm.html',
        controller: function ($scope) {
          $scope.title = options.title;
          $scope.body = options.body;
        },
      });
    };
  }
})();
