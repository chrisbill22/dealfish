//Pull from side events
//RIGHT
//When start, get the x position
right_slider.addEventListener('touchstart', function(e){
	getRightViewObj().zIndex = 1;
	startX_right = e.x;
});
//Every time the finger moves, will update and subtract by start x position to get delta x position
//if the position reaches an amount, bring in the new view
right_slider.addEventListener('touchmove', function(e){
	if(deltaX_right >= -1*VIEW_TRANSITION_THRESHOLD){
		deltaX_right = (e.x-startX_right);
		var newRight = (deltaX_right+(screen_width));
		Ti.API.log("DeltaX = "+deltaX_right+", Right = "+newRight);
		getRightViewObj().left = newRight;
		if(deltaX_right < -1*VIEW_TRANSITION_THRESHOLD){
			transitionRightViewIn();
		}
	}
});
//When the finger is released, if the view has not been activated, slide it back into place
right_slider.addEventListener('touchend', function(e){
	if(deltaX_right >= -1*VIEW_TRANSITION_THRESHOLD){
		getRightViewObj().animate({left:(screen_width)}, function(){
			getRightViewObj().zIndex = 0;
		});
	}
	deltaX_right = 0;
});
//LEFT
//When start, get the x position
left_slider.addEventListener('touchstart', function(e){
	getLeftViewObj().zIndex = 1;
	startX_left = e.x;
});
//Every time the finger moves, will update and subtract by start x position to get delta x position
//if the position reaches an amount, bring in the new view
left_slider.addEventListener('touchmove', function(e){
	if(deltaX_left <= VIEW_TRANSITION_THRESHOLD){
		deltaX_left = (e.x-startX_left);
		var newLeft = (deltaX_left+(-1*screen_width));
		getLeftViewObj().left = newLeft;
		if(deltaX_left > VIEW_TRANSITION_THRESHOLD){
			transitionLeftViewIn();
		}
	}
});
//When the finger is released, if the view has not been activated, slide it back into place
left_slider.addEventListener('touchend', function(e){
	if(deltaX_left <= VIEW_TRANSITION_THRESHOLD){
		getLeftViewObj().animate({left:(-1*screen_width)}, function(){
			getLeftViewObj().zIndex = 0;
		});
	}
	deltaX_left = 0;
});

function getLeftViewObj(){
	if(currentView == "search"){
		return settings_view;
	}
	
	if(currentView == "map"){
		return search_view;
	}
	
	if(currentView == "list"){
		return mapview;
	}
	
	if(currentView == "favorites"){
		return listview;
	}
	
	if(currentView == "settings"){
		return favorites_view;
	}
}

function getRightViewObj(){
	if(currentView == "favorites"){
		return settings_view;
	}
	
	if(currentView == "settings"){
		return search_view;
	}
	
	if(currentView == "search"){
		return mapview;
	}
	
	if(currentView == "map"){
		return listview;
	}
	
	if(currentView == "list"){
		return favorites_view;
	}
}

function transitionLeftViewIn(){
	var direction = "right";
	if(currentView == "search"){
		settingsFront(direction);
	}else if(currentView == "map"){
		searchFront(direction);
	}else if(currentView == "list"){
		mapFront(direction);
	}else if(currentView == "favorites"){
		listFront(direction);
	}else if(currentView == "settings"){
		favoritesFront(direction);
	}
}

function transitionRightViewIn(){
	var direction = "left";
	if(currentView == "favorites"){
		settingsFront(direction);
	}else if(currentView == "settings"){
		searchFront(direction);
	}else if(currentView == "search"){
		mapFront(direction);
	}else if(currentView == "map"){
		listFront(direction);
	}else if(currentView == "list"){
		favoritesFront(direction);
	}
}