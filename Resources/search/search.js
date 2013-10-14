Ti.include("ui.js");
search_view.addEventListener('swipe', function(e){
	searchFront(getSlideDirection("search"));
	alert('You swiped to the '+ e.direction);
});