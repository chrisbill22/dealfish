Ti.include("ui.js");

settingsBackBt.addEventListener('click', function(){
	settingsBack();
});

settingsTable.addEventListener('click', function(e){
	if(e.index == 0){
		openNavigationSettings();
	}else if(e.index == 1){
		show_geolocation_setup();
	}else if(e.index == 2){
		openPrivacy();
	}else if(e.index == 3){
		openBugs();
	}
});