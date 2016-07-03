'use strict';

angular.module('flickrfeed.feed', [])

/* ==========================================================================
    Feed Controller
   ========================================================================== */
.controller('FeedController', ['$scope', 'FeedService',
    function($scope, FeedService) {

        var Model = [];
        var pointer = 0;

        function init() {
            $scope.loadMore(function() {
                $scope.loaded = true;
            });
        }

        function appendModel(data) {
            Array.prototype.push.apply(Model, data);
        }

        function changeModel(data) {
            $scope.items = data ? data : Model;
        }

        $scope.loadMore = function(callback) {
            pointer++;

            FeedService.getData(pointer).then(function(json) {
                appendModel(json.data.items);

                if (callback) {
                    callback();
                }
            });

            changeModel();

        }


        init();

    }

]);