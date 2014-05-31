var monkeys = [
    { name: "Diddy",    size: 45 },
    { name: "Donkey",   size: 150 }
];

var sandbox = d3.select('#sandbox');

var monkey = sandbox.selectAll('.bar')
    .data(monkeys)
  .enter().append('span')
    .attr('class', 'bar');

var labels = monkey.append('label')
    .text(function(d) { return d.name; });

var bars = monkey.append('div')
    .style('top', function(d) { return -d.size + 'px' })
    .style('height', function(d) { return d.size + 'px' });

setInterval(function() {

    bars.transition()
        .duration(1000)
        .style('top', function(d) { return -d.size + 'px' })
        .style('height', function(d) { return d.size + 'px' });

    labels.text(function(d) { return d.name; });

}, 1000);
