'use strict';

angular.module('flickrfeed.feed', [])

/* ==========================================================================
    Feed Controller
   ========================================================================== */
.controller('FeedController', ['$scope', 'FeedService',
    function($scope, FeedService) {

    var Model;

    function init() {
        changeModel(Model);
        $scope.loaded = true;
    }

    function changeModel(model) {
        $scope.items = model;
    }


     FeedService.getData().then(function(json) {
        Model = json.data.items;
        console.log('model', Model);
        init();
     });

    }

]);