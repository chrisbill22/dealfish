Ti.include("ui.js");

function show_geolocation_setup(){
	disable_background();
	MainWindow.add(geoSetupView);
	geoSetupView.animate({top:0, duration:500});
}

function remove_geolocation_setup(){
	enable_backgrond();
	geoSetupView.animate({top:screen_height, duration:500}, function(){
		MainWindow.remove(geoSetupView);
	});
}

function ask_for_zipcode(){
	geoSetupGeoButton.animate({opacity:0});
	geoSetupZipButton.animate({opacity:0});
	enterZipcode_label.animate({opacity:1});
	enterZipcode_textbox.animate({opacity:1});
	enterZipcode_backBt.animate({opacity:1});
	enterZipcode_textbox.focus();
}

function convertZip(zipcode){
	start_loading();
	var zipRequest = createDbRequest();
	zipRequest.onload = function(e){
		stop_loading();
		var result = JSON.parse(this.responseText).results[0].geometry.location;
		setMapRegion(result.lng, result.lat);
	};
	sendDbRequest("https://maps.googleapis.com/maps/api/geocode/json?address="+zipcode+"&sensor=true", zipRequest);
}

function setMapRegion(lon, lat, delta_lon, delta_lat){
	currentLat = lat;
	currentLong = lon;
	dlon = 0.1;
	dlat = 0.1;
	if(delta_lon){
		dlon = delta_lon;
	}
	if(delta_lat){
		dlat = delta_lat;
	}
	longitudeDelta = dlon;
	latitudeDelta = dlat;
	fetchList();
	map.region = {latitude:lat, longitude:lon, latitudeDelta:dlat, longitudeDelta:dlon};
}

geoSetupGeoButton.addEventListener('click', function(){
	if(Ti.Geolocation.locationServicesAuthorization == Ti.Geolocation.AUTHORIZATION_AUTHORIZED){
		remove_geolocation_setup();
		trackCurrentLocation();
	}else if(Ti.Geolocation.locationServicesAuthorization == Ti.Geolocation.AUTHORIZATION_UNKNOWN){
		alert("Your iOS device version might not support geolocation");
	}else{
		alert("Please enable location services for this app to use this feature");
	}
	//Ti.App.Properties.setBool("zipSetup", true);
});

geoSetupZipButton.addEventListener('click', function(){
	ask_for_zipcode();
	//Ti.App.Properties.setBool("zipSetup", true);
});

enterZipcode_textbox.addEventListener('return', function(){
	if(enterZipcode_textbox.value){
		convertZip(enterZipcode_textbox.value);
		remove_geolocation_setup();
	}else{
		alert("You must add a location to use this app.");
	}
});
