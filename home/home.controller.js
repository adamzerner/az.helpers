(function () {
  'use strict';

  angular
    .module('demo')
    .controller('HomeCtrl', AzHomeCtrl)
  ;

  function AzHomeCtrl($timeout) {
    var vm = this;

    vm.foo = function () {
      console.log('in vm.foo');
      return $timeout(function () {
        console.log('in vm.foo timeout');
      }, 2000);
    };
  }
})();
