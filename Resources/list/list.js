Ti.include("ui.js");
Ti.include("navigation/navigation.js");
listview.addEventListener('swipe', function(e){
	listFront(getSlideDirection("list"));
	alert('You swiped to the '+e.direction);
});