//Pull from side events
//RIGHT
//When start, get the x position
right_slider.addEventListener('touchstart', function(e){
	startX_right = e.x;
});
//Every time the finger moves, will update and subtract by start x position to get delta x position
//if the position reaches an amount, bring in the new view
right_slider.addEventListener('touchmove', function(e){
	if(deltaX_right >= -1*VIEW_TRANSITION_THRESHOLD){
		deltaX_right = (e.x-startX_right);
		var newRight = (deltaX_right+(screen_width));
		Ti.API.log("DeltaX = "+deltaX_right+", Right = "+newRight);
		settings_view.left = newRight;
		if(deltaX_right < -1*VIEW_TRANSITION_THRESHOLD){
			openSettings();
		}
	}
});
//When the finger is released, if the view has not been activated, slide it back into place
right_slider.addEventListener('touchend', function(e){
	if(deltaX_right >= -1*VIEW_TRANSITION_THRESHOLD){
		settings_view.animate({left:(screen_width)});
	}
	deltaX_right = 0;
});
//LEFT
//When start, get the x position
left_slider.addEventListener('touchstart', function(e){
	//getLeftViewObj().zIndex = 1;
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
			//getLeftViewObj().zIndex = 0;
		});
	}
	deltaX_left = 0;
});

function getLeftViewObj(){
	return search_view;
}

function transitionLeftViewIn(){
	openSearch();
}

function openSearch(){
	transitionViewIn(search_view, "right");
	setCurrentSubView(currentView);
	setCurrentView("search");
	left_slider.visible = false;
	right_slider.visible = false;
	search_slider.visible = true;
}

function openSettings(){
	transitionViewIn(settings_view, "left");
	setCurrentSubView(currentView);
	setCurrentView("settings");
	left_slider.visible = false;
	right_slider.visible = false;
	settings_slider.visible = true;
}


settings_slider.addEventListener('touchstart', function(e){
	startX_right = e.x;
});
settings_slider.addEventListener('touchmove', function(e){
	if(deltaX_right <= VIEW_TRANSITION_THRESHOLD){
		deltaX_right = (e.x-startX_right);
		Ti.API.log("DeltaX = "+deltaX_right);
		settings_view.left = deltaX_right;
		if(deltaX_right > VIEW_TRANSITION_THRESHOLD){
			settingsBack();
		}
	}
});
settings_slider.addEventListener('touchend', function(e){
	if(deltaX_right <= VIEW_TRANSITION_THRESHOLD){
		settings_view.animate({left:0});
	}
	deltaX_right = 0;
});


search_slider.addEventListener('touchstart', function(e){
	startX_right = e.x;
});
search_slider.addEventListener('touchmove', function(e){
	if(deltaX_right <= VIEW_TRANSITION_THRESHOLD){
		deltaX_right = (e.x-startX_right)*-1;
		Ti.API.log("DeltaX = "+deltaX_right);
		search_view.left = (deltaX_right)*-1;
		if(deltaX_right > VIEW_TRANSITION_THRESHOLD){
			searchBack();
		}
	}
});
search_slider.addEventListener('touchend', function(e){
	if(deltaX_right <= VIEW_TRANSITION_THRESHOLD){
		search_view.animate({left:0});
	}
	deltaX_right = 0;
});
