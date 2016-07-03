'use strict';

angular.module('flickrfeed', [
    'ui.router',
    'flickrfeed.feed',
     'flickrfeed.feedService',
     'flickrfeed.flickrConfig',
     'ngBackgroundPreload'
])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('feed', {
                url: '/',
                templateUrl: '/components/feed/feed.html',
                controller: 'FeedController'
            });

        $urlRouterProvider.otherwise('/');

    }
]);
