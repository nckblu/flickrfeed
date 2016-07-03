'use strict';

angular.module('flickrfeed.feedService', [])

/* ==========================================================================
    Feed Service
   ========================================================================== */

.service('FeedService', ['$http', 'flickrConfig',
    function($http, flickrConfig) {


        function getData(page) {
            var url = !page ? flickrConfig.url : flickrConfig.url + flickrConfig.paginateQuery + page;
            return $http.jsonp(url).then(function(json) {
                console.log('json data', json.data)
                return parseData(json.data.items);
            });
        }


        function parseData(data) {

            var parsed = [];

            for (var i = 0; i < data.length; i++) {
                parsed.push({
                    title: data[i].title,
                    image: data[i].media.m,
                    author: getCleanAuthor(data[i].author),
                    authorLink: getAuthorLink(data[i].author_id),
                    date_taken: getFormattedTime(data[i].date_taken),
                    link: data[i].link,
                    tags: getTags(data[i].tags),
                    description: getCleanDescription(data[i].description)
                });
            }

            return parsed;
        }


        function getFormattedTime(str) {
            return moment(str).format('Do MMM YYYY [at] HH:MM');
        }

        function getAuthorLink(authorId) {
            return 'http://flickr.com/people/' + authorId;
        }

        function getCleanDescription(description) {
            return description.replace(/<img[^>]*>/g, "");
        }

        function getTags(tags) {

            if (!tags) {
                return;
            }

            var tagsArray = [];

            tags.split(" ").forEach(function(tag){
                tagsArray.push({
                    label: tag,
                    link: 'https://www.flickr.com/photos/tags/' + tag
                });
            });


            return tagsArray;
        }

        function getCleanAuthor(author) {
            // Messy, not too sure why the API returns the clean name in brackets, I'm sure with a bit of digging this can be replaced with something better
            var matches = /\(([^)]+)\)/.exec(author);
            return matches[1] ? matches[1] : author;
        }

        return {
            getData: getData
        }

    }
]);