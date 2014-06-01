'use strict';

angular.module('talkyApp.controllers', [])

.controller('SlideCtrl', ['$scope', 'slideData', function($scope, slideData) {
    $scope.images = 'img/'
    $scope.slides = slideData;
    $scope.length = $scope.slides.length;
    $scope.current = $scope.length - 1;
}])

;
