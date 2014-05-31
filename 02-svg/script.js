var data = [
    {   x: 100,     y: 120  },
    {   x: 200,     y: 500  },
    {   x: 550,     y: 300  },
    {   x: 800,     y: 400  }
];

var width = 960;
var height = 600;

var sandbox = d3.select('#sandbox');

var svg = sandbox.append('svg:svg')
    .attr('width', width + 'px')
    .attr('height', height + 'px');

var balls = svg.selectAll('.ball')
    .data(data)
  .enter().append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 50)
    .attr('class', 'ball')
    .on('mouseover', function(d, i) {
        data[i].x = Math.random() * width;
        data[i].y = Math.random() * height;
    });

var labels = svg.selectAll('.label')
    .data(data)
  .enter().append('text')
    .text(function(d, i) { console.log(d); return '#' + i; })
    .attr('x', 0)
    .attr('y', 0)
    .attr('class', 'label');

setInterval(function() {
    balls.transition()
        .duration(200)
        .attr('cx', function(d) { return d.x })
        .attr('cy', function(d) { return d.y });

    labels.transition()
        .duration(200)
        .attr('x', function(d) { return d.x })
        .attr('y', function(d) { return d.y });
}, 400);
