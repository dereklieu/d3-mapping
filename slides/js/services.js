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

        {   hero: 'data-driven documents',
            cap: 'As you probably already know, this is what d3 stands for.'
        },

        {
            hero: 'step 1: data binding',
            cap: 'The central premise of d3 plotting the visual manifestation of data. Let\'s open 01-binding/index.html to see how that works.'
        },

        {
            imgUrl: 'binding-01-data.png',
            cap: 'In this example, we\'re using some really simple data. You\'ll want to open 01-binding/script.js in a text editor like notepad++ or textwrangler.',
            cls: 'vim'
        },

        {
            hero: 'd3.select()',
            cap: 'Next, we need to select an html element to work on. This works kind of like document.querySelectorAll() or $() in jQuery, with some special sauce on top.'
        },

        {
            imgUrl: 'binding-02-select.png',
            cap: 'Here\'s the code in our example. We now have a reference to the div with id of "sandbox" in 01-binding/index.html.',
            cls: 'vim'
        },

        {
            hero: 'd3.selectAll().data().enter()',
            cap: 'This is a pattern you will see a lot.'
        },

        {
            title: 'Tell d3 what you want',
            decks: ['(Not necessarily what\'s there)'],
            cap: 'This is a distinction worth getting. In a library like jQuery, you select elements that are there. In d3, you tell it what you want to be there. Further reading for later: http://bost.ocks.org/mike/join/'
        },

        {
            imgUrl: 'binding-03-data-enter.png',
            cap: 'And here\'s that familiar code in our example. Let\'s look at this line-by-line.',
            cls: 'vim'
        },

        {
            imgUrl: 'binding-04-select-all.png',
            cap: 'In jQuery, this would return an empty jQuery object. That\'s because there are no elements with a class of "bar" in sandbox.',
            cls: 'vim'
        },

        {
            imgUrl: 'binding-05-data.png',
            cap: 'D3, on the other hand, expects you to show it some data.',
            cls: 'vim'
        },

        /* TODO
        {
            cap: 'http://bl.ocks.org/mbostock/3808218',
        },

        {
        },
        */


    ];

    return slides;
}])

;
