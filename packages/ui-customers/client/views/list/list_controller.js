/* global angular */
'use strict';

angular
    .module('angular-base.ui-customers')
    .controller('CustomerList', [
        '$meteor',
        '$stateParams',
        '$scope',
        function (
            $meteor,
            $stateParams,
            $scope
        ) {
            $meteor.subscribe(Customers.pub.index)
                .then(function(subscription) {
                    $scope.customers = $meteor.collection(Customers);
                    $scope.$on('$destroy', subscription.stop);
                });
        }
    ]);
