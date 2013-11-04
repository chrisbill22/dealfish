Ti.include("ui.js");
Ti.include("setPins.js");

track_button.addEventListener('click', function(){
	if(activeLocation == false){
		track_button.title = "Ignore";
		//track_button.style = Titanium.UI.iPhone.SystemButton.INFO_DARK;
		trackCurrentLocation();
	}else{
		track_button.title = "Track";
		//track_button.style = Titanium.UI.iPhone.SystemButton.INFO_LIGHT;
		ignoreCurrentLocation();
	}
});

map.addEventListener('regionchanged', function(e){
	if(currentView == "map"){
		if(e.longitude > currentLong+longitudeDelta || e.longitude < currentLong-longitudeDelta || e.latitude > currentLat+latitudeDelta || e.latitude < currentLat-latitudeDelta){
			Ti.API.info("Updating information with new restaurants");
			currentLat = e.latitude;
			currentLong = e.longitude;
			fetchLocations();
			checkLocationsFetched();
		}
	}
});
