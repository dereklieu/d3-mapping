'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [
        {
            title: 'Mapping | d3',
            decks: ['github.com/dereklieu/d3-mapping', '@dereklieu', '@jue_yang'],
            cls: 'lightsalmon',
            cap: 'Welcome! Today we are talking about d3, data, and maps.'
        },

        {
            imgUrl: 'woodstock_01.png',
            cap: 'Here\'s a map we made using d3, leaflet.js, and Mapbox. We will be talking through the key portions of the code, so you can create something like it.'
        },

        {
            title: 'Plans',
            decks: [
                '1. Exercises to move the brain (hands-on)',
                '2. All the maps in your browser (philosophical)',
                '3. Making a map (hands-on)'
            ],
            cap: 'Here\'s the outline for our talk tonight.'
        },

        {
            hero: 'javascript',
            cap: 'To get us up and running with maps, let\'s see how familiar we are with these technologies.'
        },

        {   hero: 'leaflet.js / mapbox' },
        {   hero: 'd3' },
        {   hero: 'data-driven documents' },

    ];

    return slides;
}])

;
