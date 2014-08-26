d3.json("data.json",function(data){
	var width = 1000;
	var height =500;

	var widthScale = d3.scale.linear()
	               .domain([0,width])
	               .range([0,height])

	var axis = d3.svg.axis()
	           .scale(widthScale);

	var canvas = d3.select("body").append("svg")
	              .attr('width',width)
	              .attr('height',height)
	              .append('g')
	              .attr('transform','translate(30,0)')
	              



	           canvas.selectAll('rect')
	              .data(data)
	              .enter()
	                 .append('rect')
	                 .attr('height',function(d){return d.population/100000 })
	                 .attr('width',30)
	                 .attr('y',function(d){ return height-d.population/100000 })
	                 .attr("x",function(d,i){return i*100 })
	                 .attr('fill','blue')

	            canvas.selectAll('text')
	                 .data(data)
	                 .enter()
	                 .append('text')
	                 .text(function(d){return d.county})
	                 .attr('x',function(d,i){
	                 	return i * (width/data.length)
	                 })
	                 .attr('y',function(d){
	                 	return height - (d.population/100000)*1.13
	                 })


})

