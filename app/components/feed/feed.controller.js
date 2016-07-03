'use strict';

angular.module('flickrfeed.feed', [])

/* ==========================================================================
    Feed Controller
   ========================================================================== */
.controller('FeedController', ['$scope', 'FeedService', '$state',
    function($scope, FeedService, $state) {

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

        $scope.viewDetail = function(index) {            
            $state.go('feed.detail', {index: index});
        }

        $scope.loadMore = function(callback) {
            pointer++;

            FeedService.getData(pointer).then(function(data) {
                appendModel(data);
                console.log('data', data);
                if (callback) {
                    callback();
                }
            });

            changeModel();

        }

        $scope.currentState = $state.current.name;


        init();

    }

]);