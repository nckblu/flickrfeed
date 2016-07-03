'use strict';

angular.module('stopBodyScroll', [])

.directive('stopBodyScroll', [

    function() {
        return {
            restrict: 'A',
            scope: {

            },

            link: function(scope, element) {

                $('body').css('height', '100vh').css('overflow', 'hidden');

                scope.$on('$destroy', function() {
                  $('body').css('height', '100vh').css('overflow', 'auto');
                });
            }
        };
    }
]);