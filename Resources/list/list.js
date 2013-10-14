Ti.include("ui.js");
listview.addEventListener('swipe', function(e){
	listFront(getSlideDirection("list"));
	alert('You swiped to the '+e.direction);
	if(e.direction == "right"){
		mapFront(getSlideDirection("map"));
	}
	
	if(e.direction == "left"){
		favoritesFront(getSlideDirection("favorites"));
	}
});

