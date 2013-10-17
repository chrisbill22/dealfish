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
		        currentLat = e.coords.latitude;
				currentLong = e.coords.longitude;
		        mapview.setLocation(region);
		        stop_loading();
		        return [e.coords.latitude, e.coords.longitude];
	        }
		});
	}else{
		activeLocation = false;
		alert('Please enable location services');
	}
	return false;
}

function trackCurrentLocation(){
	start_loading();
	Titanium.Geolocation.addEventListener('location', getLocation);
}

function ignoreCurrentLocation(){
	Titanium.Geolocation.removeEventListener('location', getLocation);
	activeLocation = false;
}
