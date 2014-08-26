   //need to start server to make this work: python -m http.server 8080 
     var service; 
     var map;
     var circle;
     //input request is an object
      function handleSearchResults(results,status)
      {
          console.log("my results",results);
          for(var i=0; i<results.length; i++){
            var marker = new google.maps.Marker({
              position: results[i].geometry.location,
              map: map,
              icon:results[i].icon,
              title:results[i].name,
              icon:'images/paw.png'
            })
          }
      }
      //this function will perform our search
      //it has to send this to google and we do it asynchorously instead of pausing until we get a result.
      function performSearch(){
          var request = {
              bounds: map.getBounds(),
              keyword: "animal shelter"
            };

        service.nearbySearch(request, handleSearchResults);

      }
  
    function initialize(location){
       console.log(location);
       var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude)

       var mapOptions = {
        
        //LatLng is the latitude and longiture object
           center: currentLocation,
           zoom: 13
       };
       //this is what create your map. It takes two inputs. 
        map = new google.maps.Map(document.getElementById("map-canvas"),
       mapOptions);

        //places marker at our current location
       var marker = new google.maps.Marker({
         position: currentLocation,
         map: map,
         title: "Me"
       })
       //this piece of code is found in the google places library.This will allow us to search for places. We pass it our google maps reference (map)
       service = new google.maps.places.PlacesService(map);
       //you will run into a problem if you just call the performSearch function because it takes some time for the map to render. If we call the function before the map is rendered it is not going to know what the bounds are yet in our results object. To solve this you need to do an event listener. 

       //this will wait for the bounds to change before calling in our performSearch function. 

       google.maps.event.addListenerOnce(map,'bounds_changed',performSearch);


       $('#refresh').click(performSearch);

       var circleOptions = {
          strokeColor: "0000FF",
          strokeOpacity:0.8,
          strokeWeight:1.5,
          fillColor:'#0000FF',
          fillOpacity:0.35,
          map:map,
          center:currentLocation,
          radius:1000
       };

       circle = new google.maps.Circle(circleOptions);
      
    }
    $(document).ready(function(){
      //using HTML5 geolocation to locate my current coordinate
       navigator.geolocation.getCurrentPosition(initialize);
    })
