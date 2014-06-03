### Data

In this workshop we are going to use the newest version of `us-10m.json` by [Mike Bostock](https://github.com/mbostock/topojson/blob/master/examples/us-10m.json) and `us-sates.json` by [Leaflet](http://leafletjs.com/examples/choropleth.html). We assume that you have knowledge about shapefiles. 

### GeoJSON and TopoJSON

We highly recommend using TopoJSON. We won't have time to cover how to make it (since we are focusing on the frontend implementation of using d3.geo methods to turn data into visualizations.) Please read the tutorials listed in Bostock's repo: https://github.com/mbostock/topojson. <3 TopoJSON.

Useful tools to get data to fit the format(s):
- Quatum GIS (save as GeoJSON)
- geojson.io
- make your own TopoJSON! http://bost.ocks.org/mike/map/

### Tutorials Referenced

- Let's make a map!: http://bost.ocks.org/mike/map/
- Leaflet + d3 (old file): http://bost.ocks.org/mike/leaflet/
- Threshold Chreopleth: http://bl.ocks.org/mbostock/3306362
- Leaflet Chreopleth: http://leafletjs.com/examples/choropleth.html

### Useful Repo

- US Atlas: https://github.com/mbostock/us-atlas
- World Atlas: https://github.com/mbostock/world-atlas

### Notes

For leaflet sample maps we are using [this prepared file](http://leafletjs.com/examples/us-states.js) seen in the [tutorial](http://leafletjs.com/examples/choropleth.html). If you are using the newest version of d3 (>= v3.2), you might not want to use it in your static maps since it contains geometry that would not work. See details [here](https://github.com/mbostock/d3/issues/1315).

As for the file itself, we are not using it as a js variable, but as `us-states-pop-density.json` in the folder. You can read more about loading external json in leaflet in this [post](http://lyzidiamond.com/posts/external-geojson-and-leaflet-the-other-way/)