(function () {
  'use strict';

  angular
    .module('az.disableDoubleSubmit', [])
    .directive('azDisableDoubleSubmit', azDisableDoubleSubmit)
  ;

  function azDisableDoubleSubmit($parse, $q) {
    return {
      restrict: 'A',

      link: function (scope, iEl, iAttrs) {
        var eventName;
        var $submitButton;
        var onClickOrSubmitFunction;

        if (iEl[0].tagName === 'FORM') {
          eventName = 'submit';
          $submitButton = angular.element(iEl[0].querySelector('[type=submit]'));
          onClickOrSubmitFunction = $parse(iAttrs.onSubmit);
        } else {
          eventName = 'click';
          $submitButton = iEl;
          onClickOrSubmitFunction = $parse(iAttrs.onClick);
        }

        // 0. the user clicks the button
        iEl.on(eventName, function () {
          scope.$apply(execute);
        });

        function execute() {
          var $body = angular.element(document.body);
          var buttonTextWhileDisabled = iAttrs.buttonTextWhileDisabled;
          var buttonTextWhileEnabled = $submitButton.text();
          var onClickOrSubmitReturnValue;

          var disableEverythingOnPage = !!iAttrs.disableEverythingOnPage;
          var $lightbox = angular.element(document.querySelector('.lightbox')); // http://stackoverflow.com/questions/1298034/disable-all-the-elements-in-html

          // 1. apply the disabled state
          applyDisabledState();

          // 2. run the function
          onClickOrSubmitReturnValue = onClickOrSubmitFunction(scope);
          onClickOrSubmitReturnValue = $q.when(onClickOrSubmitReturnValue);

          // 3. remove the disabled state when the functions promise resolves
          onClickOrSubmitReturnValue
            .then(removeDisabledState)
            .catch(removeDisabledState)
          ;

          function applyDisabledState() {
            $submitButton.prop('disabled', true);
            $body.addClass('disable-double-submit');
            $submitButton.addClass('disable-double-submit');

            if (disableEverythingOnPage) {
              $body.addClass('disable-everything-on-page');
              $lightbox.addClass('lightbox-enabled');
            }

            if (buttonTextWhileDisabled) {
              $submitButton.text(buttonTextWhileDisabled);
            }
          }

          function removeDisabledState(response) {
            $submitButton.prop('disabled', false);
            $body.removeClass('disable-double-submit');
            $submitButton.removeClass('disable-double-submit');

            if (disableEverythingOnPage) {
              $body.removeClass('disable-everything-on-page');
              $lightbox.removeClass('lightbox-enabled');
            }

            if (buttonTextWhileDisabled) {
              $submitButton.text(buttonTextWhileEnabled);
            }

            return response;
          }
        }
      },
    };
  }
})();
