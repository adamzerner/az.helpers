(function () {
  'use strict';

  angular
    .module('az.authorization', [])
    .run(azAuthorization)
  ;

  function azAuthorization($rootScope) {
    $rootScope.isAuthorized = function (requirements) {
      var permissions = $rootScope.loggedInUser ? $rootScope.loggedInUser.permissions : [];
      var requirement;

      for (var i = 0, len = requirements.length; i < len; i++) {
        requirement = requirements[i];

        if (permissions.indexOf(requirement) === -1) {
          return false;
        }
      }

      return true;
    };

    // ui router
    $rootScope.$on('$stateChangeStart', function (e, toState) {
      if (toState.authRequirements) {
        if (!$rootScope.isAuthorized(toState.authRequirements)) {
          e.preventDefault();
          alert('You are not authorized to view this state.');
        }
      }
    });

    // ngRoute
    // $rootScope.$on('$routeChangeStart', function (e, next) {
    //   var authRequirements = next.$$route.authRequirements;
    //
    //   if (authRequirements) {
    //     if (!$rootScope.isAuthorized(authRequirements)) {
    //       e.preventDefault();
    //       alert('You are not authorized to view this state.');
    //     }
    //   }
    // });
  }
})();
