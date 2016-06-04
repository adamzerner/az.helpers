(function () {
  'use strict';

  angular
    .module('az.navbar')
    .service('AzActiveNavItemsService', AzActiveNavItemsService)
  ;

  function AzActiveNavItemsService() {
    this.activeNavItems = {
      primary: null,
      secondary: null,
    };
  }
})();
