'use strict';

angular
    .module('angular-base.ui-login')
    .controller('Login', [
        '$scope',
        '$meteor',
        '$state',
        function (
            $scope,
            $meteor,
            $state
        ) {
            $scope.doLogin = function() {
                $meteor.loginWithPassword($scope.login.email.toLowerCase(), $scope.login.password)
                    .then(function() {
                        $state.go('customers');
                    })
                    .catch(function(err) {
                        console.log(err.stack);
                        alert(err.reason);
                    });
            };
        }
    ]);
