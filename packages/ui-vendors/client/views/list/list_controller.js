/* global angular */
'use strict';

angular
    .module('angular-base.ui-vendors')
    .controller('VendorList', [
        '$meteor',
        '$stateParams',
        '$scope',
        function (
            $meteor,
            $stateParams,
            $scope
        ) {
            $meteor.subscribe(Vendors.pub.index)
                .then(function(subscription) {
                    $scope.vendors = $meteor.collection(Vendors);
                    $scope.$on('$destroy', subscription.stop);
                });
        }
    ]);
