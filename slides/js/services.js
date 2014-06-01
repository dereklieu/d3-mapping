'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [
        /*
        {
            title: 'Derek Lieu',
            decks: ['dereklieu.github.io/hackshackers2014', '@dereklieu'],
            cls: 'lightsalmon',
            cap: 'Need help? Use your left and right arrows to navigate.'
        },


        {
            imgUrl: '/img/progression-initial.png',
            cap: 'So two weeks ago I stopped being a journalist. And, I\'ve noticed a few things that have changed.'
        },
        */
    ];

    return slides;
}])

;
