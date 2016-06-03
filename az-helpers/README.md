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
