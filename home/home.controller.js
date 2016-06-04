(function () {
  'use strict';

  angular
    .module('demo')
    .controller('HomeCtrl', AzHomeCtrl)
  ;

  function AzHomeCtrl(AzActiveNavItemsService) {
    var vm = this;
    vm.activeNavItems = AzActiveNavItemsService.activeNavItems;

    vm.primaryNavItems = [
      {
        brand: true,
        text: 'one',
        href: 'one.html',
      }, {
        text: 'two',
      }, {
        text: 'icon.png',
        state: 'three',
      }, {
        text: 'four',
        state: 'four',
      },
    ];

    vm.primaryNavItems.right = [
      {
        text: 'right',
        href: 'right.html',
      }, {
        text: 'right 2',
        href: 'right2.html',
      },
    ];

    vm.secondaryNavItemsHash = {
      'one.html': [
        {
          text: '1a',
          href: '1a.html',
        }, {
          text: '1b',
          href: '1b.html',
        },
      ],

      two: [
        {
          text: '2a',
          href: '2a.html',
        }, {
          text: '2b',
          href: '2b.html',
        },
      ],

      three: [
        {
          text: '3a',
          href: '3a.html',
        }, {
          text: '3b',
          href: '3b.html',
        },
      ],

      four: [
        {
          text: '4a',
          href: '4a.html',
        }, {
          text: '4b',
          href: '4b.html',
        },
      ],
    };
  }
})();
