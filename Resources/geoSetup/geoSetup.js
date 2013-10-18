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

geoSetupGeoButton.addEventListener('click', function(){
	remove_geolocation_setup();
	trackCurrentLocation();
});

geoSetupZipButton.addEventListener('click', function(){
	remove_geolocation_setup();
});
