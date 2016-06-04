# AZ Helpers

## Modules

### Collapsible
To use:
```
<ol az-collapsible>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ol>
```

The +/- has a class of `az-collapsible` on it. You'll probably want to use that class to position and style the element.

### Debug
Displays a button that you could click to `console.log` data that you're interested in.

In addition to `console.logging`, it will also assign `window.azDebug[vm.name] = vm.content` so that you could inspect the data more easily.

To use:
```
<az-debug name="users" content="vm.users"></az-debug>
```
Or if you want a `<pre>` instead of a `<button>`:
```
<az-debug name="users" content="vm.users" show-pre="true"></az-debug>
```

### DialogService

#### `.dialog`
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

#### `.confirm`
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

#### `.remind`
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
`reminderType`s: `dialog`, `confirm`, `alert`

### Navbar
#### Single level navbar example:
View:
```
<az-navbar links="vm.links" levels="1"></az-navbar>
```
Controller:
```
vm.links = [
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


#### Two level navbar example:
View:
```
<az-navbar primary-links="vm.primaryLinks" secondary-links-hash="vm.secondaryLinksHash" levels="2"></az-navbar>
```
Controller:
```
vm.links = [
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

vm.secondaryLinksHash = {
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
#### Link
- An object
- Should have `href` or `state` set (the latter if you're using UI Router).
- Should have at least one of the following set: `text`, `icon`.

#### CSS
This directive just sets up the markup. You'll have to style it with CSS. Feel free to mess with the markup. Or to add classes to support a framework, like bootstrap.

#### Active
`AzActiveNavService` keeps track of the primary and/or secondary nav that is active. The directive is data-bound to the service, so set `AzActiveNavService.activeNavs.primary` or `AzActiveNavService.activeNavs.secondary`. The place to set it is probably in the run block when the route changes (code will be different depending on whether you're using UI Router or ngRoute).

### Alerts
Adding a single alert:
```
AzAlertService.addAlert(text, type);
```
`type` is the class that gets added.

If you call `.addAlert` with an alert that already is visible, there won't be duplicate alerts, and you will see a `console.info` letting you know about the unsuccessful attempt to add the alert.

Adding multiple alerts:
```
AzAlertService.addAlerts(alerts);
```
