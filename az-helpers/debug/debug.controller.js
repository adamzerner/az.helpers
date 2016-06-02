(function () {
  'use strict';

  angular
    .module('az.debug')
    .controller('AzDebugCtrl', AzDebugCtrl)
  ;

  function AzDebugCtrl() {
    var vm = this;
    window.azDebug = {};
    vm.log = function () {
      console.log(vm.name);
      console.log(vm.content);
      window.azDebug[vm.name] = vm.content;
    };
  }
})();
