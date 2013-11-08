function getLocation(){
	if (Ti.Geolocation.locationServicesEnabled) {
		var longitude;
		var latitude;
		//Get the current position and set it to the map
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
		            latitudeDelta:0.01,
		            longitudeDelta:0.01
		        };
		        currentLat = e.coords.latitude;
				currentLong = e.coords.longitude;
		        map.setLocation(region);
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

function getDistanceBetween(fromLong, fromLat, toLong, toLat){
	/*SOURCE OF CODE: http://www.clearlyinnovative.com/blog/post/6037568031/titanium-appcelerator-quickie-distance-between-two-points*/
	Ti.API.log("Working on new distance...");
	Number.prototype.toDeg = function() {
		return this * 180 / Math.PI;
	};
	Number.prototype.toRad = function() {
		return this * Math.PI / 180;
	};

	lat1=fromLat;
	lon1=fromLong;
	lat2=toLat;
	lon2=toLong;	
	
	var R = 6371; // km
	var dLat = (lat2-lat1).toRad();
	var dLon = (lon2-lon1).toRad();
	var lat1 = lat1.toRad();
	var lat2 = lat2.toRad();
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;	
	
	var km = d;
	var miles = d/1.609344;
	//Ti.API.info("km " + d);
	//Ti.API.info("miles " + d/1.609344);
	
	var milesRounded = (Math.round(miles*10))/10;
	
	return milesRounded;
}
