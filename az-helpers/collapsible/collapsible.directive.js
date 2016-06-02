(function () {
  'use strict';

  angular
    .module('az.collapsible', [])
    .directive('azCollapsible', azCollapsible)
    .controller('CollapsibleCtrl', CollapsibleCtrl)
  ;

  function azCollapsible() {
    return {
      restrict: 'A',
      transclude: true,
      controller: 'CollapsibleCtrl as vm',
      template: [
                  '<span ng-click="vm.toggleCollapse()" class="az-collapsible">',
                    '{{ vm.collapsed ? "+" : "-" }}',
                  '</span>',
                  '<ng-transclude ng-hide="vm.collapsed"></ng-transclude>',
                ].join(''),
    };
  }

  function CollapsibleCtrl() {
    var vm = this;
    vm.collapsed = false;
    vm.toggleCollapse = function () {
      vm.collapsed = !vm.collapsed;
    };
  }
})();
