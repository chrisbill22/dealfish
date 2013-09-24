Ti.include("ui.js");

function getLocation(){
	var longitude;
	var latitude;
	//Get the current position and set it to the mapview
	Titanium.Geolocation.getCurrentPosition(function(e){
	        var region={
	            latitude: e.coords.latitude,
	            longitude: e.coords.longitude,
	            animate:true,
	            latitudeDelta:0.001,
	            longitudeDelta:0.001
	        };
	        latitude = e.coords.latitude;
	        longitude = e.coords.longidue;
	        mapview.setLocation(region);
	});
	
	return [latitude, longitude];
}

Titanium.Geolocation.addEventListener('location',function(){
    getLocation();
});