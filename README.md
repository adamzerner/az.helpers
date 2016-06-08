# AZ Helpers

1. [Collapsible](https://github.com/adamzerner/az.helpers#collapsible)
2. [Debug](https://github.com/adamzerner/az.helpers#debug)
3. [DialogService](https://github.com/adamzerner/az.helpers#dialogservice)
4. [Navbar](https://github.com/adamzerner/az.helpers#navbar)
5. [Alerts](https://github.com/adamzerner/az.helpers#alerts)
6. [Authorization](https://github.com/adamzerner/az.helpers#authorization)
7. [Disable Double Submit](https://github.com/adamzerner/az.helpers#disable-double-submit)
8. [Generic HTTP Handling](https://github.com/adamzerner/az.helpers#generic-http-handling)
9. [Pagination](https://github.com/adamzerner/az.helpers#pagination)

## Collapsible
![](https://cloud.githubusercontent.com/assets/3144254/15882672/15e5b562-2d0f-11e6-9ff6-94338cf22b90.gif)

[Plunker Demo](http://plnkr.co/edit/DQ3M7IEm6Sots9bDiMQI?p=preview)

To use:
```
<ol az-collapsible>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ol>
```

The +/- has a class of `az-collapsible` on it. You'll probably want to use that class to position and style the element.

## Debug
Displays a button that you could click to `console.log` data that you're interested in.

In addition to `console.logging`, it will also assign `window.azDebug[vm.name] = vm.content` so that you could inspect the data more easily.

![](https://cloud.githubusercontent.com/assets/3144254/15882942/dbc21724-2d11-11e6-8d0e-6bba543641b4.gif)

[Plunker Demo](http://plnkr.co/edit/73CWjtNkIvAYRxsGXuXB?p=info)

To use:
```
<az-debug name="users" content="vm.users"></az-debug>
```
Or if you want a `<pre>` instead of a `<button>`:
```
<az-debug name="users" content="vm.users" show-pre="true"></az-debug>
```

### Visibility
`azDebug` is only visible when `azDebugVm.debugModeContainer.debugMode` is true. You can use `<az-debug-toggle></az-debug-toggle>` to toggle that property, and thus `azDebug`'s visibility. Alternatively, if you want direct control, you can set `AzDebugModeService.debugModeContainer.debugMode`.

Note: `azDebug` uses `ngShow`, not `ngIf`. This means that even if it's not visible, the DOM element exists, it just has `display: none;`. So if you're doing tech support for someone who isn't authorized to toggle debug mode, you can still use the dev tools to set `display: block;` and see the debug info.

## DialogService
Requires `az.alerts` and `ngDialog`.

![](https://cloud.githubusercontent.com/assets/3144254/15893910/ad15083e-2d50-11e6-854b-4f112d726fc1.gif)

[Plunker Demo](http://plnkr.co/edit/X8aEfVzUOeYdLFu39EC1?p=preview)

### `.dialog`
```
AzDialogService
  .dialog({
    title: 'title',
    body: 'body',
    // can optionally pass in a template you prefer here
    // template: 'myTemplate.html',
  })
  .then(function () {
    console.log('success');
  })
  .catch(function () {
    console.log('error');
  })
;
```

### `.confirm`
```
AzDialogService
  .confirm({
    title: 'title',
    body: 'body',
    // can optionally pass in a template you prefer here
    // template: 'myTemplate.html',
  })
  .then(function () {
    // hits here after you press "Ok" in the dialog
    console.log('ok');
  })
  .catch(function () {
    // hits here after you press "Close" in the dialog
    console.log('close');
  })
;
```

### `.remind`
Example:
```
AzDialogService
  .remind({
    title: 'title',
    body: 'body',
    millisecondsUntilReminder: 2000,
    reminderType: 'dialog',
  })
  .then(function () {
    console.log('success');
  })
  .catch(function () {
    console.log('error');
  })
;
```
`reminderType`s: `dialog`, `confirm`, `jsAlert`, `alertMessage`

Make sure you have `<az-alerts></az-alerts>` when `reminderType` is `alertMessage`, otherwise the alert message won't appear.

## Navbar

![](https://cloud.githubusercontent.com/assets/3144254/15894377/9f5c96c8-2d53-11e6-8407-63315e6f0b9c.png)

[Plunker Demo](http://plnkr.co/edit/DL2l3mOk4EQlvVThX6Vs?p=preview)

### Single level navbar example:
View:
```
<az-navbar
  primary-nav-items="vm.primaryNavItems"
  levels="1"
></az-navbar>
```
Controller:
```
vm.primaryNavItems = [
  {
    text: 'one',
    href: 'one.html',
  }, {
    text: 'two',
    state: 'two',
  }, {
    icon: 'icon.png',
    state: 'three',
  }, {
    text: 'four',
    icon: 'four.png',
    state: 'four',
  },
];
```


### Two level navbar example:
View:
```
<az-navbar
  primary-nav-items="vm.primaryNavItems"
  secondary-nav-items-hash="vm.secondaryNavItemsHash"
  levels="2"
></az-navbar>
```
Controller:
```
vm.primaryNavItems = [
  {
    text: 'one',
    href: 'one.html',
  }, {
    text: 'two',
    state: 'two',
  }, {
    icon: 'icon.png',
    state: 'three',
  }, {
    text: 'four',
    icon: 'four.png',
    state: 'four',
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
```
### href vs. state
#### href
```
{
  text: 'test',
  href: 'link.html',
}
```
Leads to:
```
<a href="link.html">test</a>
```

#### state
```
{
  text: 'test',
  state: 'foo',
}
```
Leads to:
```
<a ui-sref="foo">test</a>
```

### CSS
This directive just sets up the markup. You'll have to style it with CSS. Feel free to mess with the markup.

### Bootstrap
To make this a bootstrap navbar, pass `bootstrap="true"` to the directive and make sure you have bootstrap installed.
```
<az-navbar
  primary-nav-items="vm.primaryNavItems"
  levels="1"
  bootstrap="true"
></az-navbar>
```
Or if you want a two-leveled bootstrap navbar:
```
<az-navbar
  primary-nav-items="vm.primaryNavItems"
  secondary-nav-items-hash="vm.secondaryNavItemsHash"
  levels="2"
  bootstrap="true"
></az-navbar>
```

Here are some things that work out of the box when you're using bootstrap. If you're not using bootstrap, it'll still add the appropriate classes, but you'll have to apply your own styling to the classes.

#### Fixed
To fix the navbar to the top of the screen (so it stays still while you scroll), pass `fixed="true"` to the directive.
```
<az-navbar
  primary-nav-items="vm.primaryNavItems
  levels="1"
  bootstrap="true"
  fixed="true"
></az-navbar>
```
Applies a class of `navbar-fixed-top` to the `<nav>`.

Fixed works for both one and two-leveled navbars.

[Bootstrap docs for fixed](http://getbootstrap.com/components/#navbar-fixed-top)

#### Brand
```
{
  brand: true,
  text: 'one',
  href: 'one.html',
}
```
Makes it bigger and more prominent.

Applies a class of `navbar-brand` to the appropriate `<li>`.

[Bootstrap docs for brand](http://getbootstrap.com/components/#navbar-brand-image)

#### Plain text (no link)
```
{
  text: 'Signed in',
}
```
[Bootstrap docs for text](http://getbootstrap.com/components/#navbar-text)

#### Right-aligned
```
vm.primaryNavItems = [ ... ];
vm.primaryNavItems.right = [
  {
    text: 'right',
    href: 'right.html',
  }, {
    text: 'right 2',
    href: 'right2.html',
  },
];
```

[Bootstrap docs for right alignment](http://getbootstrap.com/components/#navbar-component-alignment)

### Active
`AzActiveNavService` keeps track of the primary and/or secondary nav that is active. The directive is data-bound to the service, so set `AzActiveNavService.activeNavs.primary` or `AzActiveNavService.activeNavs.secondary`.

The place to set it is probably in the run block when the route changes (code will be different depending on whether you're using UI Router or ngRoute). Be sure to handle the situation where the user refreshes the page.

## Alerts
![](https://cloud.githubusercontent.com/assets/3144254/15881415/c922e9bc-2d03-11e6-80ce-fd11898a1b33.gif)

[Plunker Demo](http://plnkr.co/edit/9r1IRpuCZnY5arBsOlPx?p=preview)

Adding a single alert:
```
AzAlertService.addAlert(text, type);
// `type` is the class that gets added.
```
```
<body>
  <az-alerts></az-alerts>
  ...
```

Adding multiple alerts:
```
AzAlertService.addAlerts(alerts);
```

### No duplicate alerts
If you call `.addAlert` with an alert that already is visible, there won't be duplicate alerts, and you will see a `console.info` letting you know about the unsuccessful attempt to add the alert.

## Authorization
Require that the logged in user has certain permissions in order to access a particular route.

Checks against `$rootScope.loggedInUser.permissions`.

![](https://cloud.githubusercontent.com/assets/3144254/15882536/8b289f08-2d0d-11e6-8fac-77b9256dec57.gif)

[Plunker Demo](http://plnkr.co/edit/YpvBmkv6aMLCR4QMFul3?p=preview)

### UI Router
```
.state('one', {
  url: '/one',
  template: 'one',
  authRequirements: ['admin'],
})
```

### ngRoute
```
.when('/one', {
  template: 'one',
  authRequirements: ['author', 'admin'],
})
```

### Only showing certain things in a view to authorized users
You can use `$rootScope.isAuthorized` like so:
```
<p ng-if="isAuthorized(['foo'])">secret</p>
```

Note: if you use `ngShow`, even if a user is unauthorized, if they're smart, they could use the dev tools to set `display: block;` and see what was previously hidden. If you use `ngIf`, the DOM node will never have been created.

## Disable double submit
Sometimes you click a button and the request takes a really long time. Users often think, "Is something wrong? I clicked the button didn't I? I'm going to click it again just to be sure.".

This directive gives the user visual feedback that the button has indeed been clicked, and it prevents the user from clicking the button a second time.

Inspired by Rails' [data-disable-with](http://api.rubyonrails.org/classes/ActionView/Helpers/FormTagHelper.html).

![](https://cloud.githubusercontent.com/assets/3144254/15881100/5e69842a-2d01-11e6-98fa-274a6e85c5db.gif)

[Plunker Demo](http://plnkr.co/edit/K7JBmk3Bo4OttAJpRxc0?p=preview)

### Normal use
```
<button
  az-disable-double-submit
  on-click="vm.foo()"
>
  Regular Button
</button>
```

### On a form element
```
<form
  az-disable-double-submit
  on-submit="vm.foo()"
>
  <button type="submit">Submit Button</button>
</form>
```

### How it works
It disables the button when it's clicked, and re-enables it when the promise that `on-click/submit` returns resolves.

It also toggles a `disable-double-submit` class on the body and on the button. You can use this class to style the button and body while the button is disabled.

For example:
```
body.disable-double-submit {
  cursor: wait !important;
}

button.disable-double-submit {
  opacity: .7;
}
```

The `on-click/submit` function should return a promise. If it doesn't, then the re-enabling will happen almost instantaneously, and the directive will effectively not have done anything.

### Change the text of the button while it's disabled:
```
<button
  az-disable-double-submit
  button-text-while-disabled="Submitting..."
  on-click="vm.foo()"
>
  Regular Button
</button>
```

### Disable everything else on the page while the button is disabled:
```
<button
  az-disable-double-submit
  on-click="vm.foo()"
  disable-everything-on-page="true"
>
  Regular Button
</button>
```
```
<body>
    <div class="lightbox"></div>
    ...
```
```
.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9001;
}

.lightbox.lightbox-enabled {
  display: block;
}
```

When the button is disabled, `.lightbox` has the `lightbox-enabled` class added to it. You can use this class to set `display: block;`, which effectively hides everything underneath it. See [StackOveflow](http://stackoverflow.com/questions/1298034/disable-all-the-elements-in-html). It also toggles a `disable-everything-on-page` class on the body that you could use to style other elements.


# Other people's code

## Generic HTTP Handling
http://www.codelord.net/2014/06/25/generic-error-handling-in-angularjs/

## Pagination
http://www.michaelbromley.co.uk/blog/108/paginate-almost-anything-in-angularjs

## Angular UI
https://angular-ui.github.io/
