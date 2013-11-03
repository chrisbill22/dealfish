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

geoSetupGeoButton.addEventListener('click', function(){
	remove_geolocation_setup();
	trackCurrentLocation();
	//Ti.App.Properties.setBool("zipSetup", true);
});

geoSetupZipButton.addEventListener('click', function(){
	ask_for_zipcode();
	//Ti.App.Properties.setBool("zipSetup", true);
});

favoritesPopupName_textbox.addEventListener('return', function(){
	if(enterZipcode_textbox.value){
		remove_geolocation_setup();
	}else{
		alert("You must add a location to use this app.");
	}
});
