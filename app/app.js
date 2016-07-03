'use strict';

angular.module('flickrfeed', [
    'ngAnimate',
    'ui.router',
    'flickrfeed.feed',
    'flickrfeed.feedDetail',
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
            })

        .state('feed.detail', {
            url: 'view/:index/',
            templateUrl: '/components/feed/detail/detail.html',
            controller: 'FeedDetailController'
        });

        $urlRouterProvider.otherwise('/');

    }
])

.filter('unsafe', function($sce) {
    return $sce.trustAsHtml;
});