'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [
        {
            title: 'Mapping (sometimes) with d3',
            decks: ['github.com/dereklieu/d3-mapping', '@dereklieu', '@jue_yang'],
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
                '1. Exercises to move the brain (hands-on)',
                '2. All the maps in your browser (philosophical)',
                '3. Making a map (hands-on)'
            ],
            cap: 'And here\'s the outline for our talk tonight.'
        },
    ];

    return slides;
}])
;
