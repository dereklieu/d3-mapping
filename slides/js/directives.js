'use strict';

angular.module('talkyApp.directives', [])

.directive('dlCaption', [function() {
    return {
        scope: {
            'copy': '='
        },
        templateUrl: 'partials/caption.html'
    };

}])

.directive('dlKeydown', [function() {
    return {
        scope: {
            on: '=',
            total: '='
        },

        link: function(scope, element, attrs) {

            element.bind('keydown', function(event) {

                // left arrow
                if (event.which === 37 && scope.on > 0) {
                    scope.$apply(function() {
                        scope.on -= 1;
                    });
                }

                // right arrow
                else if (event.which === 39 && scope.on < scope.total - 1) {
                    scope.$apply(function() {
                        scope.on += 1;
                    });
                }
            });
        }
    }
}])

.directive('dlTimer', ['$interval', function($interval) {
    return {
        scope: {
            duration: '@',
            on: '='
        },
        templateUrl: 'partials/timer.html',

        link: function(scope, element, attrs) {

            var duration = scope.duration || 60000,
                interval = 250,
                increment = 100 * interval / duration,
                progress = 0,
                isOn = false,
                timer;


            function turnOn() {

                scope.progress = '0%';

                // create the timer using Angular's $interval service
                timer = $interval(function() {

                    progress += increment;
                    scope.progress = progress + '%';

                    // at or over 100%, stop the timer
                    if ( progress >= 100 ) {
                        $interval.cancel(timer);
                    }

                }, interval);
            }

            // turn the timer on only after the first slide
            scope.$watch('on', function(newval, oldval) {
                if (newval > 0 && !isOn) {
                    turnOn();
                    isOn = true;
                }
            }, true);

        }

    };

}])
;
