angular
  .module('demo')
  .controller('HomeCtrl', AzHomeCtrl)
;

function AzHomeCtrl() {
  var vm = this;
  vm.foo = 'bar';
}
