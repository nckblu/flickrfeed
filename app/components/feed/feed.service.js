'use strict';

angular.module('flickrfeed.feedService', [])

/* ==========================================================================
    Feed Service
   ========================================================================== */

.service('FeedService', ['$http', 'flickrConfig',
    function($http, flickrConfig) {


        function getData(page) {
            var url = !page ? flickrConfig.url : flickrConfig.url + flickrConfig.paginateQuery + page;
            return $http.jsonp(url);
        }

        return {
            getData: getData
        }

    }
]);