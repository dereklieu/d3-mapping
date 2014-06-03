var numbers = d3.range(0, 10);
// [0, 1, 2, 3, ..., 8, 9]

var ball = [
    {size: .5}
];

var width = 600;
var height = 600;

var scale = d3.scale.linear()
    .domain(d3.extent(numbers))
    .range([20, width - 20]);

var sandbox = d3.select('#sandbox');

var svg = sandbox.append('svg:svg')
    .style('border', '0.1em solid #eee')
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
    .on('click', function(d, i, el) {
        // a high-light should go here?
        console.log(this.getAttribute('x'));
        ball[0].size = d / 10;
    });

text.transition()
    .duration(120)
    .delay(function(d, i) { return i * 80; })
    .attr('y', 50);

setInterval(function() {
    circle.transition()
        .duration(400)
        .attr('r', function(d) { return scale(d.size * 10) / 2 });
}, 600);
