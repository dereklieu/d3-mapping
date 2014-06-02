var numbers = d3.range(0, 10);
// [0, 1, 2, 3, ..., 8, 9]

var ball = [
    {size: .5}
];

var width = 960;
var height = 600;

var scale = d3.scale.linear()
    .range([20, width - 20])
    .domain(d3.extent(numbers));

var sandbox = d3.select('#sandbox');

var svg = sandbox.append('svg:svg')
    .attr('width', width + 'px')
    .attr('height', height + 'px');

var circle = svg.selectAll('.circle')
    .data(ball)
  .enter().append('circle')
    .attr('cx', function(d) { return width * 0.5 })
    .attr('cy', function(d) { return height * 0.5 })
    .attr('r', function(d) { return 0 })
    .attr('fill', 'salmon')

var text = svg.selectAll('.number')
    .data(numbers)
  .enter().append('text')
    .attr('x', function(d) { return scale(d); })
    .attr('y', -20)
    .attr('class', 'number')
    .text(function(d) { return d; })
    .on('click', function(d) {
        ball[0].size = d / 10;
        console.log(ball);
    });

text.transition()
    .duration(120)
    .delay(function(d, i) { return i * 80; })
    .attr('y', 50);

setInterval(function() {
    circle.transition()
        .duration(400)
        .attr('r', function(d) { console.log(d); return scale(d.size * 10) / 2 });
}, 1000);
