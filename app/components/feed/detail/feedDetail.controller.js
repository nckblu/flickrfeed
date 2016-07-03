'use strict';

angular.module('flickrfeed.feedDetail', [])

/* ==========================================================================
    Feed Controller
   ========================================================================== */
.controller('FeedDetailController', ['$scope', 'FeedService', '$stateParams',
    function($scope, FeedService, $stateParams) {

        $scope.item = $scope.items[$stateParams.index];

        $scope.cleanImages = function(content) {
            return content.replace(/<img[^>]*>/g,"")
        }
    }

]);