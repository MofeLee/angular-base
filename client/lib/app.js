'use strict';

angular.module('angular-base',[
    'angular-meteor',
    'ui.router',
    'angular-base.ui-login',
    'angular-base.ui-customers',
    'angular-base.ui-vendors'
]);

function onReady() {
    angular.bootstrap(document, ['angular-base']);
}

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
} else {
    angular.element(document).ready(onReady);
}
