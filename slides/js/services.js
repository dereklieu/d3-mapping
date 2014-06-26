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
            cap: 'And this is what one part of that looks like. This is from Open Street Map, or OSM. You can think of them as the Wikipedia of the world in maps. If you know about a street isn\'t recorded in OSM, you can go in and add it to their database, and it will feed into all the services that use OSM (like Mapbox).'
        },

        {
            imgUrl: 'disjointed.png',
            cap: 'Once you have the images, and you have a way to place them on your page (Leaflet.js does this really well), it\'s pretty easy to have your map. This is basically what online maps are, or they were, up until recently. But there\'s also another way to make maps, and that\'s with SVG.'
        },

        {
            imgUrl: 'albers.png',
            cap: 'I like to show this example when we talk about svg maps, because it\'s something you cannot easily do with tile maps. You can see the full example at http://bl.ocks.org/mbostock/3711652'
        },

        {
            hero: 'http://bl.ocks.org/mbostock/3711652',
            cap: 'Here\'s that url a bit bigger.'
        },

        {
            decks: ['<path class="path quintile-8" d="M698,1376L698,1376L699,1377L700,1378L701,1379L701,1380L702,1382L702,1383L702,1384L703,1384L703,1384L703,1385L703,1385L704,1386L704,1386L705,1386L705,1386L706,1387L707,1387L708,1387L708,1388L709,1388L710,1388L710,1388L710,1389L710,1390L710,1390L710,1390L710,1391L709,1392L709,1392L708,1392L707,1392L706,1392L706,1392L705,1392L705,1392L704,1392L704,1392L703,1392L703,1391L702,1391L702,1390L701,1390L701,1390L700,1390L700,1390L700,1390L699,1391L699,1391L699,1391L698,1392L698,1392L698,1393L699,1394L699,1394L700,1395L700,1395L701,1396L701,1396L701,1396L701,1396L700,1396L699,1396L699,1396L698,1396L697,1396L697,1398L697,1399L697,1400L697,1400L697,1400L697,1400L697,1401L697,1401L696,1401L696,1401L696,1401L696,1401L695,1400L692,1400L691,1400L688,1400L688,1401L688,1401L688,1402L688,1402L688,1403L688,1403L688,1403L687,1403L680,1403L680,1402L678,1402L678,1404L679,1404L679,1404L678,1404L678,1405L676,1405L676,1405L675,1405L675,1406L674,1406L674,1406L673,1406L673,1406L670,1406L670,1408L667,1408L667,1411L667,1411L667,1412L666,1412L666,1411L665,1411L665,1411L664,1411L664,1411L663,1411L663,1411L663,1411L662,1411L662,1411L661,1411L661,1410L658,1410L658,1410L657,1410L656,1410L652,1410L652,1410L652,1410L651,1409L649,1409L649,1410L647,1410L647,1406L647,1393L647,1393L647,1381L647,1381L647,1380L647,1380L647,1375L647,1374L647,1373L647,1372L648,1372L650,1372L657,1372L658,1372L671,1372L677,1372L678,1372L683,1372L684,1373L689,1373L689,1372L689,1373L690,1373L690,1372L690,1372L690,1371L691,1371L691,1371L692,1372L692,1372L692,1372L693,1372L693,1372L694,1373L695,1373L696,1374L696,1374L696,1375L697,1376L697,1376L697,1376L697,1376L697,1376L697,1377L698,1376Z"></path>'],
            cap: 'This line of svg is telling your browser *how* to draw the boundary. If you can read this, you are a robot.'
        },

        {
            imgUrl: 'd3_choropleth.png',
            cap: 'Sometimes svg can replace a tile map. If this fits your use case, that\'s great - your map will be easier to host. http://bl.ocks.org/mbostock/4060606'
        },

        {
            imgUrl: 'afghanistanelection.png',
            cap: 'We use it a lot to draw complex data points and provide interaction to the maps we make. http://2014.afghanistanelectiondata.org/#election_results'
        },

        {
            title: 'TILE',
            decks: ['Tilemill', 'Mapbox', 'Leaflet'],
            cap: 'But let\'s step back for a minute. What we\'re really talking about here are the ways you can make maps on the internet.'
        },

        {
            title: 'SVG',
            decks: ['Topojson', 'D3'],
            cap: 'That\'s pretty cool, but it\'s probably not why you came here tonight.'
        },

        {
            title: 'TILE + SVG',
            decks: ['Mapbox', 'Leaflet', 'Topojson', 'D3(?)'],
            cap: 'What you\'re interested in, is how do you make your map.'
        },

        {
            title: 'Let\'s talk about you.',
            cap: 'So let\'s talk about that.'
        },

        {
            title: 'Let\'s talk about your data.',
            cap: 'Before there was D3, before there was internet, there was mapping, and mapping is about making sense of the world around you. The kind of map you make depends on the kind of world you want to purvey.'
        },

        {
            title: 'How much data?',
            cap: 'The first question you should ask is, how much data do you need to map?'
        },

        {
            imgUrl: 'debt.png',
            cap: 'This was a recent map we did on foreign-held US debt. You can do this as a simple Leaflet map.'
        },

        {
            imgUrl: 'crowded.png',
            cap: 'This is an older version of the Afghanistan election map you saw earlier. It\'s from the 2009 election. As you can see, the presentation isn\'t so clear because of the amount of data. This brings us to our next question...'
        },

        {
            title: 'Are all the points significant?',
            cap: 'And the second thing you should ask is, do each of my data points matter on their own?'
        },

        {
            imgUrl: 'cluster.png',
            cap: 'If all of your points have significance, you can use the Leaflet.markercluster plugin, which allows you to see varying levels of detail at different zoom levels. https://github.com/Leaflet/Leaflet.markercluster'
        },

        {
            imgUrl: 'meteor.png',
            cap: 'If not, there are heatmaps, like this one of meteors that fell on Earth. This is made with CartoDB and you can see it at http://osm2.cartodb.com/tables/meteoritessize/embed_map. You could do the same thing with Leaflet.heat https://github.com/Leaflet/Leaflet.heat'
        },

        {
            imgUrl: 'npr_census.png',
            cap: 'Development Seed did this project for NPR on Latino populations in the United States. It was made in Tilemill. You can find the project at http://www.npr.org/censusmap/'
        },

        {
            hero: 'd3?',
            cap: 'We love d3 at DevelopmentSeed, but we only use it when it\'s necessary. It requires more code, it\'s hard to support IE8 with it, and it can be unwieldy with large data.'
        },

        {
            hero: 'So when?',
            cap: 'That said, we do use d3 for some things.'
        },

        {
            title: 'Complex interactions',
            cap: 'D3 includes a set of abstractions for interacting with the DOM, and it\'s well-suited to handling chains of event triggers.'
        },

        {
            imgUrl: 'census_diff.png',
            cap: 'This is a map that shows how census tract definitions have changed over time. It\'s made using Topojson and Leaflet. So not exactly d3, but it\'s a good candidate for it. http://developmentseed.org/census-tracts/'
        },

        {
            title: 'Animation',
            cap: 'Animation, or transitions in d3 terminology, are well-integrated and easy to use.'
        },

        {
            imgUrl: 'planes.png',
            cap: 'This is a cool map from Tom Noda that uses d3.transition. http://www.tnoda.com/flightanimation'
        },
    ];

    return slides;
}])
;
