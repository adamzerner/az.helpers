(function () {
  'use strict';

  angular
    .module('demo')
    .controller('HomeCtrl', AzHomeCtrl)
  ;

  function AzHomeCtrl() {
    var vm = this;
    vm.foo = {
      a: 'one',
      b: 'two',
    };
  }
})();
