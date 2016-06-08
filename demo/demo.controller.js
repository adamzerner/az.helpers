(function () {
  'use strict';

  angular
    .module('demo')
    .controller('DemoCtrl', AzDemoCtrl)
  ;

  function AzDemoCtrl(AzDialogService) {
    var vm = this;

    vm.primaryNavItems = [
      {
        text: 'one',
        href: 'one',
      }, {
        text: 'two',
        href: 'two',
      }, {
        icon: 'icon.png',
        href: 'three',
      }, {
        text: 'four',
        icon: 'four.png',
        href: 'four',
      },
    ];
  }
})();
