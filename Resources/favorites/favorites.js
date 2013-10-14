Ti.include("ui.js");
Ti.include("navigation/navigation.js");
favorites_view.addEventListener('swipe', function(){
	favoritesFront(getSlideDirection("favorites"));
});