function getLocation(){
	if (Ti.Geolocation.locationServicesEnabled) {
		var longitude;
		var latitude;
		//Get the current position and set it to the mapview
		Titanium.Geolocation.getCurrentPosition(function(e){
			if (e.error) {
				activeLocation = false;
	            Ti.API.error('Error: ' + e.error);
	        } else {
	        	activeLocation = true;
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
	        }
		});
		return [latitude, longitude];
	}else{
		activeLocation = false;
		alert('Please enable location services');
	}
	return false;
}

function trackCurrentLocation(){
	Titanium.Geolocation.addEventListener('location', getLocation);
}

function ignoreCurrentLocation(){
	Titanium.Geolocation.removeEventListener('location', getLocation);
	activeLocation = false;
}
