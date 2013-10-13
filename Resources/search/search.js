Ti.include("ui.js");
Ti.include("navigation/navigation.js");
search_view.addEventListener('swipe', function(e){
	searchFront(getSlideDirection("search"));
	alert('You swiped to the '+ e.direction);
});