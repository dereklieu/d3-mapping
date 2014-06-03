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
            imgUrl: 'batman-awe.gif',
            cap: 'Neat, right?'
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
            title: 'Let\'s talk about svg',
            cap: 'D3 is a great library even if you aren\'t using svg, but it really shines when you are. Note: IE9 and above!'
        },

        {
            imgUrl: 'svg_01_svg.png',
            cap: 'So let\'s make some svg with d3. Open 02-svg/index.html, then open 02-svg/script.js in a text editor.'
        },

        {
            imgUrl: 'svg-02-scale.png',
            cls: 'vim',
            cap: 'If you\'ve gone through any d3 tutorials, they all start by defining with and heights (and sometimes margins)'
        },

        {
            title: 'good boundaries',
            decks: ['(make good neighbors)'],
            cap: 'It turns out, knowing your bounds are very important if you want to plot things. This leads us to...'
        },

        {
            title: 'd3 scales',
            decks: ['Turning things into other things.'],
            cap: '...scales! Scales turn all sorts of things into all sorts of other things'
        },

        {
            imgUrl: 'svg-02-scale.png',
            cap: 'To make a scale, you need to define an input domain and an output range. A linear scale maps every input value to a single output value.',
            cls: 'vim'
        },

        {
            title: 'POP QUIZ',
            decks: ['var x = d3.scale.linear()', '.domain([1, 5])', '.range([100, 500])', '---', 'x(3) = ?']
        },

        {
            imgUrl: 'svg-03-svg.png',
            cap: 'And here is the code that appends an svg and draws a circle on it. The thing you should take away here is that svg elements expect certain attributes, just like html elements. Case in point: circle elements require x and y coordinates and a radius. For more on basic svg shapes: http://www.w3.org/TR/SVG11/shapes.html',
            cls: 'vim'
        },

        {
            imgUrl: 'svg-04-return.png',
            cap: 'And here we draw some numbers. Take a look at how the data we\'re binding is being used to set the x attribute and text value of these svg text elements.',
            cls: 'vim'
        },

        {
            imgUrl: 'svg-04-click.png',
            cap: 'Defining an on-click function that changes the data attribute attached to our circle radius. The code in setInterval() will re-draw the circle every 400 milliseconds. Try clicking on a number!',
            cls: 'vim'
        },

        // Part of the talk where we discuss the different mapping stacks.
        {
            hero: 'Maps',
            cap: 'That was a quick primer. Let\'s get to the part of the talk we all came for: mapping.'
        },

        {
            imgUrl: 'disjointed.png',
            cap: 'When we think of the maps we see on the internet, the thing we were thinking about is millions of 256 x 256 pixel images.'
        },

        {
            imgUrl: 'albers.png',
            cap: 'More and more, map tiles are being replaced with map vectors: lines, rectangles, and other shapes. These have advantages and disadvantages, which we will cover in a sec.'
        },

        {
            imgUrl: 'woodstock-2.png',
            cap: 'The important thing to know is that you can create tiled maps, vector maps, or combo maps that overlay vectors on top of tiles, using d3 and a few other open-source libraries.'
        },

        {
            title: 'A run-down',
            decks: ['Where we talk about d3.js, leaflet.js, mapbox.com,', 'and all the interesting combos of the three.'],
            cap: 'When you make a map these days, regardless of what kind of map you make, you will probably touch at least one of these tools.'
        },

        {
            title: 'Mapbox',
            decks: ['A place to host your map tiles or vector data', 'Maintains Tilemill, a tool to produce custom map tiles', 'Contributes to leaflet.js']
        },

        {
            title: 'Leaflet',
            decks: ['How tiles become maps', 'Zooming, panning, loading tile layers, tooltips', 'Works as an interaction/events layer in conjunction with d3']
        },

        {
            title: 'D3',
            decks: ['Vectors, boundaries, shapes, overlays', 'Dynamic data loading using topojson/geojson', 'Flexible, and easy to adjust once you\'re set up']
        },

        {
            title: 'Let\'s walk through some maps',
            caption: 'Follow this url to the demo that we will put together at the end: http://bl.ocks.org/jueyang/e8c9473bc2d30d943fec'
        }
    ];

    return slides;
}])
;
