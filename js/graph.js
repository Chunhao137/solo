d3.json("data.json",function(data){
	var width = 1000;
	var height =700;
	var households = data.population/2.6;
	

	var canvas = d3.select("body").append("svg")
	              .attr('width',width)
	              .attr('height',height)
	              .append('g')
	              .attr('transform','translate(30,-30)')
	              

	           canvas.selectAll('rect')
	              .data(data)
	              .enter()
	                 .append('rect')
	                 .attr('height',function(d){return ((d.population/2.6)*0.584)/14000 })
	                 .attr('width',30)
	                 .attr('y',function(d){ return height-((d.population/2.6)*0.584)/14000 })
	                 .attr("x",function(d,i){return i*100 })
	                 .attr('fill','blue')

	            canvas.selectAll('text')
	                 .data(data)
	                 .enter()
	                 .append('text')
	                 .text(function(d){return Math.floor((d.population/2.6)*0.584)})
	                 .attr('x',function(d,i){
	                 	return i * (width/data.length)
	                 })
	                 .attr('y',function(d){
	                 	return height - (((d.population/2.6)*0.584)/14000)*1.05
	                 })

	        var x = d3.scale.linear()
	           .range([0,width/1.09])
	           .domain([0,data.length-1]);

	        var xAxis = d3.svg.axis()
	            .scale(x)
	            .tickFormat(function(d) { return data[d].county })
	            .orient("bottom");

	         canvas.append('g')
                .attr('transform','translate(0,' + height + ')')
	            .call(xAxis)



	      
	             


})

