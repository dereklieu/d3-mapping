'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [
        {
            title: 'Making Internet Maps',
            decks: ['github.com/dereklieu/d3-mapping/tree/dvdc-brouhaha', '@dereklieu', '@jue_yang'],
            cls: 'lightsalmon',
            cap: 'Hey y\'all! Today we will be talking about online maps'
        },

        {
            imgUrl: 'woodstock_01.png',
            cap: 'We will also be talking about a mapping project that Jue and I worked on. More on that in a bit though.'
        },

        {
            title: 'Plans',
            decks: [
                '1. All the maps on the internet',
                '2. Each map on the internet',
                '3. This one map on the internet'
            ],
            cap: 'And here\'s the abstract outline for our talk tonight.'
        },

        {
            imgUrl: 'yahoo.png',
            cap: 'I think that when we talk about internet maps, we probably imagine a lot of stuff like this...'
        },

        {
            imgUrl: 'directions.png',
            cap: 'And this...'
        },

        {
            imgUrl: 'mapbox.png',
            cap: 'And this. This is your standard mapbox.com map, it\'s their default map. But you couldn\'t have this map if you didn\'t have data.'
        },

        {
            imgUrl: 'osm.png',
            cap: 'This is what that data looks like.'
        },

        {
            imgUrl: '806.png',
            cap: 'And this is what one part of that looks like.'
        },

        {
            imgUrl: 'map_puzzle.jpg',
            cap: 'And it\'s made up of hundreds, thousands of these.'
        },

        {
            imgUrl: 'disjointed.png',
            cap: 'This is basically what online maps are, or they were, up until a while ago.'
        },

        {
            imgUrl: 'Something or rather',
            cap: 'Something or rather'
        },

    ];

    return slides;
}])
;
