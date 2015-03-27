'use strict';

// Helper to force login on specific routes
var requiresLogin = {
    resolve: {
        "currentUser": ["$meteor", function($meteor){
            return $meteor.requireUser();
        }]
    }
};

// Routes
angular.module('angular-base')
    .config([
        '$urlRouterProvider',
        '$stateProvider',
        '$locationProvider',
        function(
            $urlRouterProvider,
            $stateProvider,
            $locationProvider
        ){
            $locationProvider.html5Mode(true);

            $stateProvider
                // Login
                .state('login', {
                    url: '/login',
                    templateUrl: 'client/views/login/login.ng.html',
                    controller: 'Login'
                })

                // Customers
                .state('customers', _.extend({
                    url        : '/customers',
                    templateUrl: 'client/views/list/list.ng.html',
                    controller : 'CustomerList'
                }, requiresLogin))

                // Vendors
                .state('vendor', _.extend({
                    url        : '/vendors',
                    templateUrl: 'client/views/list/list.ng.html',
                    controller : 'VendorList'
                }, requiresLogin));

            $urlRouterProvider.otherwise("/customers");
        }
    ]);

// Scope event handlers
angular.module('angular-base')
    .run([
        '$rootScope',
        '$state',
        function($rootScope, $state) {
            $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
                // If $meteor.requireUser couldn't find the user
                if (error === "AUTH_REQUIRED") {
                    event.preventDefault();
                    $state.go('login');
                    return;
                }

                console.log('stateChangeError trapped. here\'s the stack:');
                console.log(error.stack());
            });
        }
    ]);
