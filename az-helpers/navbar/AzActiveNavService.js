(function () {
  'use strict';

  angular
    .module('az.navbar')
    .service('AzActiveNavService', AzActiveNavService)
  ;

  function AzActiveNavService() {
    this.activeNavs = {
      primary: null,
      secondary: null,
    };
  }
})();
