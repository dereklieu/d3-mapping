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
            cap: 'At this point, there are no elements with a class of "bar." Unlike jQuery, in which $(\'.bar\') would return an empty query, you\'re telling d3 what kind of element you *want* there to be.',
            cls: 'vim'
        },

        {
            imgUrl: 'binding-05-data.png',
            cap: '...And now you\'re telling d3 what kind of data to attach to this element',
            cls: 'vim'
        },

        {
            imgUrl: 'binding-06-monkeys.png',
            cap: 'This is where things get cool.',
            cls: 'vim'
        },

        {
            imgUrl: 'binding-07-monkeys.png',
            cap: '(Remember, this is our data.)',
            cls: 'vim',
        },

        {
            imgUrl: 'binding-08-enter.png',
            cap: 'With d3.selection.enter(), d3 will create a \'something\' for every piece of data that wasn\'t already visualized on the page. Then we tell d3 to make that \'something\' a span element with a class of "bar". If you\'re very good at Excel or a database tool, you can think of d3.selection.enter() as a join. For more reading on the enter/exit pattern, see bl.ocks.org/mbostock/3808218',
            cls: 'vim'
        },

        {
            hero: 'stop',
            cap: 'With this much code, we\'ve already bound data to our document.'
        },

        {
            title: 'Let\'s take a look at our data.',
            decks: ['Open your console. On Chrome it\'s Command+Option+J (Mac) or Control+Shift+J (Windows/Linux).']
        },

        {
            imgUrl: 'binding-09-selector-all.png',
            cap: 'Type this into your console.'
        },

        {
            imgUrl: 'binding-10-__data__.png',
            cap: 'Now we know where d3 is putting all that data (remember, everything in javascript is an object, and you can access it\'s properties using dot notation—even DOM elements).'
        },

        {
            imgUrl: 'binding-11-manipulation.png',
            cap: 'You can even change the data. Try it!'
        },

        {
            title: 'Neat, right?',
            decks: ['How did we do that?']
        },

        {
            imgUrl: 'binding-12-interval.png',
            cap: 'Every second, we tell d3 to update the height and y-position (or top, in css lingo) of the bar according to the data.',
            cls: 'vim'
        },

        {
            imgUrl: 'binding-13-d-for-data.png',
            cap: 'The "d" is for data.',
            cls: 'vim'
        },

        {
            imgUrl: 'binding-14-api.png',
            cap: 'A little bit on the d3 api.',
            cls: 'vim'
        },

        {
            title: 'Congratulations!',
            decks: ['Now you know data-binding-fu.'],
            cap: 'If you want to nerd out afterwards, come talk to me about the differences between d3.selection.data() and jQuery\'s $.data()'
        },

        {
            hero: 'Whew.',
            cls: 'lightsalmon',
            cap: 'Any questions? It gets a lot more interesting from here =).'
        },

        {
            title: 'Let\'s talk about scalar vector grahics',
            cap: 'Note: ie9 and above only!'
        },

        {
            imgUrl: 'svg-primer.jpg',
            cap: 'SVG is a set of DOM specifications that allow us to draw vector graphics (circles, lines, etc)'
        },

        {

        },

        {

        },

        {

        },

    ];

    return slides;
}])
;
