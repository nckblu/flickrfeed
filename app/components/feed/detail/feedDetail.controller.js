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

        $scope.item = $scope.items[$stateParams.index];

        $scope.cleanImages = function(content) {
            return content.replace(/<img[^>]*>/g,"")
        }
    }

]);