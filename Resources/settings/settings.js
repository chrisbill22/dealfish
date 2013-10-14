Ti.include("ui.js");
Ti.include("navigation/navigation.js");
settings_view.addEventListener('swipe', function(e){
	settingsFront(getSlideDirection("settings"));
	alert('You swiped to the '+e.direction);
});
