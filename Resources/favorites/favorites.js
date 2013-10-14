Ti.include("ui.js");
favorites_view.addEventListener('swipe', function(){
	favoritesFront(getSlideDirection("favorites"));
});