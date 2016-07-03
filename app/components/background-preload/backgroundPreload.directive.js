/**
 * ng-background-preload v0.1
 * AngularJS directive for preloading background images
 * https://github.com/nckblu
 */

'use strict';

angular.module('ngBackgroundPreload', [])

.directive('ngBackgroundPreload', [
    function() {
        return {
            restrict: 'A',
            scope: {
                imageUrl: '@',
                classOnLoad: '@'
            },
            link: function(scope, element) {

                var img = new Image();
                img.src = scope.imageUrl;

                if (img.complete) {
                    loaded();
                    img.onload = function() {};
                } else {
                    img.onload = function() {
                        loaded();
                        img.onload = function() {};
                    }
                }

                function loaded() {
                    element.css('background-image', 'url("' + scope.imageUrl + '")').addClass(scope.classOnLoad);
                }


            }
        };
    }
])