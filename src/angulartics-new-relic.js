(function(angular) {
'use strict';

angular.module('angulartics.new-relic', ['angulartics'])
.constant('angularticsNewRelicPageAction', {
  PAGE_VIEW: 'page_view'
})
.config([
  '$analyticsProvider',
  'angularticsNewRelicPageAction',
  function (
    $analyticsProvider,
    angularticsNewRelicPageAction
  ) {

    $analyticsProvider.registerPageTrack(function (path) {
      if (window.newrelic) {
        var nr = window.newrelic;
        nr.addPageAction(angularticsNewRelicPageAction.PAGE_VIEW, {
          currentPath: window.location.hash.substring(1),
          destinationPath: path
        });
      }
    });

    $analyticsProvider.registerEventTrack(function (action, properties) {
      if (window.newrelic) {
        var nr = window.newrelic;
        nr.addPageAction(action, properties);
      }
    });

  }
]);

})(angular);
