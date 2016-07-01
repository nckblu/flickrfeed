'use strict';

angular.module('flickrfeed', [
    'ui.router'

]).
config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('feed', {
                url: '/',
                templateUrl: 'app/components/feed/feed.html',
                controller: 'FeedController'
            });

        $urlRouterProvider.otherwise('/');

    }
]);