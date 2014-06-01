'use strict';

angular.module('talkyApp.controllers', [])

.controller('SlideCtrl', ['$scope', 'slideData', function($scope, slideData) {
    $scope.slides = slideData;
    $scope.length = $scope.slides.length;
    $scope.current = 0;
}])

;
