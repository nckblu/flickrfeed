'use strict';

angular.module('flickrfeed.feedDetail', [])

/* ==========================================================================
    Feed Detail Controller
   ========================================================================== */
.controller('FeedDetailController', ['$scope', 'FeedService', '$stateParams', '$state',
    function($scope, FeedService, $stateParams, $state) {

        if (!$scope.items.length) {
            $state.go('feed');
        }

        $scope.wrapClass = 'in-detail';

        $scope.item = $scope.items[$stateParams.index];
    }

]);