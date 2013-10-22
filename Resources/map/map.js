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
