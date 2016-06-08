angular.module('az.debug', []);
angular.module('az.collapsible', []);
angular.module('az.alerts', []);
angular.module('az.dialogs', ['ngDialog', 'az.alerts']);
angular.module('az.navbar', []);
angular.module('az.authorization', []);
angular.module('az.disableDoubleSubmit', []);

angular
  .module('az.helpers', [
    'az.debug',
    'az.collapsible',
    'az.dialogs',
    'az.alerts',
    'az.navbar',
    'az.authorization',
    'az.disableDoubleSubmit',
  ])
;
