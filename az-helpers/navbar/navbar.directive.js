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
        links: '=',
        primaryLinks: '=',
        secondaryLinksHash: '=',
        /*
          links/primaryLinks = [ link, link, link ]

          link = {
            text: 'one',
            href: 'one.html',
          }
          link = {
            icon: 'icon.png',
            href: 'two.html',
          }
          link = {
            text: 'three',
            state: 'three',
          }

          secondaryLinks = {
            'one.html': [ link, link, link ],
            'two': [ link, link, link, link, link ],
          }
        */
      },
      controller: 'AzNavbarCtrl as vm',
    };
  }

  function AzNavbarCtrl(AzActiveNavService, $scope) {
    var vm = this;
    vm.activeNavs = AzActiveNavService.activeNavs;

    vm.isLinkActive = function (link, type) {
      if (link.href) {
        return link.href === vm.activeNavs[type];
      } else if (link.state) {
        return link.state === vm.activeNavs[type];
      }
    };

    $scope.$watch(angular.bind(this, function () {
      return this.activeNavs.primary;
    }), function (newVal) {
      vm.secondaryLinks = vm.secondaryLinksHash[newVal];
    });
  }
})();
