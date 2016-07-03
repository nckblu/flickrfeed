'use strict';


angular.module('flickrfeed.flickrConfig', [])

/* ==========================================================================
   Flickr Config
   ========================================================================== */

.service('flickrConfig', [
    function() {

        var config = {
            url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK',
            paginateQuery: '&page='
        }


       return config;

    }
]);