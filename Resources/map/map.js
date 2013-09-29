Ti.include("ui.js");

track_button.addEventListener('click', function(){
	if(activeLocation == false){
		track_button.title = "Ignore Location";
		trackCurrentLocation();
	}else{
		track_button.title = "Track Location";
		ignoreCurrentLocation();
	}
	
});
