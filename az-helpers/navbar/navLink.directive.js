(function () {
  'use strict';

  angular
    .module('az.navbar')
    .directive('azNavLink', azNavLink)
  ;

  function azNavLink() {
    return {
      restrict: 'E',
      templateUrl: 'az-helpers/navbar/navLink.directive.html',
      scope: {
        link: '=',
      },
    };
  }
})();
