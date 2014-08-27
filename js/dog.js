

var dog = function(){ d3.json("data.json",function(data){
		var width = 1000;
	    var height =480;
	    var canvas = d3.select("body").append("svg")
		              .attr('width',width)
		              .attr('height',height)
		              .append('g')
		              .attr('transform','translate(150,-30)')

		canvas.append('text')
		        .attr("x", (width / 2))             
		        .attr("y", 150)
		        .attr("text-anchor", "middle")  
		        .style("font-size", "30px") 
		        .style("text-decoration", "underline")  
		        .text("Dog Ownership Data");
	

	           canvas.selectAll('rect')
	              .data(data)
	              .enter()
	                 .append('rect')
	                 .attr('height',function(d){return ((d.population/2.6)*0.365)*0.584/10000 })
	                 .attr('width',30)
	                 .attr('y',function(d){ return height-((d.population/2.6)*0.365)*0.584/10000 })
	                 .attr("x",function(d,i){return i*100 })
	                 .attr('fill','blue')

	            canvas.selectAll('text')
	                 .data(data)
	                 .enter()
	                 .append('text')
	                 .text(function(d){return Math.floor(((d.population/2.6)*0.365)*0.584)})
	                 .attr('x',function(d,i){
	                 	return i * (width/data.length)
	                 })
	                 .attr('y',function(d){
	                 	return height - (((d.population/2.6)*0.365)*0.584/10000)*1.05
	                 })

	        var x = d3.scale.linear()
	           .range([0,width/1.084])
	           .domain([0,data.length-1]);

	        var xAxis = d3.svg.axis()
	            .scale(x)
	            .tickFormat(function(d) { return data[d].county })
	            .orient("bottom");

	         canvas.append('g')
                .attr('transform','translate(0,' + height + ')')
	            .call(xAxis)

	           
	             
   })
}

function cat(){ d3.json("data.json",function(data){
	var width = 1000;
	var height =450;
	

	var canvas = d3.select("body").append("svg")
	              .attr('width',width)
	              .attr('height',height)
	              .attr('class','dog')
	              .append('g')
	              .attr('transform','translate(150,-30)')
	              .style("visibility","show")


	  canvas.append("text")
	          .attr("x", (width / 2))             
	          .attr("y", 150)
	          .attr("text-anchor", "middle")  
	          .style("font-size", "30px") 
	          .style("text-decoration", "underline")  
	          .text("Cat Ownership Data");
	              

	           canvas.selectAll('rect')
	              .data(data)
	              .enter()
	                 .append('rect')
	                 .attr('height',function(d){return ((d.population/2.6)*0.365)*0.638/10000 })
	                 .attr('width',30)
	                 .attr('y',function(d){ return height-((d.population/2.6)*0.365)*0.638/10000 })
	                 .attr("x",function(d,i){return i*100 })
	                 .attr('fill','red')

	            canvas.selectAll('text')
	                 .data(data)
	                 .enter()
	                 .append('text')
	                 .text(function(d){return Math.floor(((d.population/2.6)*0.365)*0.638)})
	                 .attr('x',function(d,i){
	                 	return i * (width/data.length)
	                 })
	                 .attr('y',function(d){
	                 	return height - (((d.population/2.6)*0.365)*0.638/10000)*1.05
	                 })

	        var x = d3.scale.linear()
	           .range([0,width/1.084])
	           .domain([0,data.length-1]);

	        var xAxis = d3.svg.axis()
	            .scale(x)
	            .tickFormat(function(d) { return data[d].county })
	            .orient("bottom");

	         canvas.append('g')
                .attr('transform','translate(0,' + height + ')')
	            .call(xAxis)

	           
	             
   })
}

function bird(){ d3.json("data.json",function(data){
	var width = 1000;
	var height =450;
	

	var canvas = d3.select("body").append("svg")
	              .attr('width',width)
	              .attr('height',height)
	              .attr('class','dog')
	              .append('g')
	              .attr('transform','translate(150,-30)')
	              .style("visibility","show")

	  canvas.append("text")
	          .attr("x", (width / 2))             
	          .attr("y", 150)
	          .attr("text-anchor", "middle")  
	          .style("font-size", "30px") 
	          .style("text-decoration", "underline")  
	          .text("Bird Ownership Data");
	              

	           canvas.selectAll('rect')
	              .data(data)
	              .enter()
	                 .append('rect')
	                 .attr('height',function(d){return ((d.population/2.6)*0.365)*0.071/10000 })
	                 .attr('width',30)
	                 .attr('y',function(d){ return height-((d.population/2.6)*0.365)*0.071/10000 })
	                 .attr("x",function(d,i){return i*100 })
	                 .attr('fill','green')

	            canvas.selectAll('text')
	                 .data(data)
	                 .enter()
	                 .append('text')
	                 .text(function(d){return Math.floor(((d.population/2.6)*0.365)*0.071)})
	                 .attr('x',function(d,i){
	                 	return i * (width/data.length)
	                 })
	                 .attr('y',function(d){
	                 	return height - (((d.population/2.6)*0.365)*0.071/10000)*1.05
	                 })

	        var x = d3.scale.linear()
	           .range([0,width/1.084])
	           .domain([0,data.length-1]);

	        var xAxis = d3.svg.axis()
	            .scale(x)
	            .tickFormat(function(d) { return data[d].county })
	            .orient("bottom");

	         canvas.append('g')
                .attr('transform','translate(0,' + height + ')')
	            .call(xAxis)	           
	             
   })
}
