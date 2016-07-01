'use strict';

angular.module('flickrfeed.feedService', [])

/* ==========================================================================
    Feed Service
   ========================================================================== */

.service('FeedService', ['$http',
    function($http) {


        function returnData() {

        }

        return {
            returnData: returnData
        }

    }
]);