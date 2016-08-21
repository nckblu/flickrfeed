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
                return parseData(json.data.items);
            });
        }

        function parseData(data) {
            return data.map(function(image) {
                return {
                    title: image.title,
                    image: image.media.m,
                    author: getCleanAuthor(image.author),
                    authorLink: getAuthorLink(image.author_id),
                    date_taken: getFormattedTime(image.date_taken),
                    link: image.link,
                    tags: getTags(image.tags),
                    description: getCleanDescription(image.description)
                }
            });
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

            return tags.split(" ").map(function(tag) {
                return {
                    label: tag,
                    link: 'https://www.flickr.com/photos/tags/' + tag
                }
            });
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