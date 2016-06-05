(function () {
  'use strict';

  angular
    .module('demo')
    .controller('HomeCtrl', AzHomeCtrl)
  ;

  function AzHomeCtrl(AzDialogService) {
    var vm = this;

    vm.foo = function () {
      AzDialogService
        .remind({
          text: 'text',
          type: 'info',
          millisecondsUntilReminder: 2000,
          reminderType: 'alertMessage',
        })
        .then(function () {
          console.log('then');
        })
        .catch(function () {
          console.log('catch');
        })
      ;
    };
  }
})();
