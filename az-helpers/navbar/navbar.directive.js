(function () {
  'use strict';

  angular
    .module('az.navbar', [])
    .directive('azNavbar', azNavbar)
    .controller('AzNavbarCtrl', AzNavbarCtrl)
  ;

  function azNavbar() {
    return {
      restrict: 'E',
      templateUrl: 'az-helpers/navbar/navbar.directive.html',
      scope: {},
      bindToController: {
        levels: '@',
        primaryNavItems: '=',
        secondaryNavItemsHash: '=',
        bootstrap: '@',
        fixed: '@',
      },
      controller: 'AzNavbarCtrl as vm',
    };
  }

  function AzNavbarCtrl(AzActiveNavItemsService, $scope) {
    var vm = this;
    vm.activeNavItems = AzActiveNavItemsService.activeNavItems;

    vm.isLinkActive = function (link, type) {
      if (link.href) {
        return link.href === vm.activeNavItems[type];
      } else if (link.state) {
        return link.state === vm.activeNavItems[type];
      }
    };

    $scope.$watch(angular.bind(this, function () {
      return this.activeNavItems.primary;
    }), function (newVal) {
      if (newVal) {
        vm.secondaryNavItems = vm.secondaryNavItemsHash[newVal];
      }
    });
  }
})();
