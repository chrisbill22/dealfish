Ti.include("ui.js");
nav_search.addEventListener('click', function(){
	searchFront(getSlideDirection("search"));
});
nav_map.addEventListener('click', function(){
	mapFront(getSlideDirection("map"));
	setPins();
});
nav_list.addEventListener('click', function(){
	listFront(getSlideDirection("list"));
});
nav_favorites.addEventListener('click', function(){
	favoritesFront(getSlideDirection("favorites"));
});
nav_settings.addEventListener('click', function(){
	settingsFront(getSlideDirection("settings"));
});

function getSlideDirection(toView){
	fromView = currentView;
	
	if(fromView == "search"){
		return "right";
	}
	
	if(fromView == "map"){
		if(toView == "search"){
			return "left";
		}else{
			return "right";
		}
	}
	
	if(fromView == "list"){
		if(toView == "search" || toView == "map"){
			return "left";
		}else{
			return "right";
		}
	}
	
	if(fromView == "favorites"){
		if(toView == "settings"){
			return "right";
		}else{
			return "left";
		}
	}
	
	if(fromView == "settings"){
		return "left";
	}
}

function setCurrentView(viewName){
	currentView = viewName;
	Ti.API.info("Current View = "+currentView);
}

function transitionView(obj, dir){
	if(dir == "right"){
		if(obj.right != 0 && obj.right != ""){
			obj.left = 500;
			obj.right = 0;
		}
		obj.animate({
			left: 0, 
			zIndex: 0
		});
	}
	
	if(dir == "left"){
		if(obj.left != 0){
			obj.right = 500;
			obj.left = 0;
		}
		obj.animate({
			right: 0, 
			zIndex: 0
		});
	}
}

function searchFront(direction){	
	transitionView(search_view, direction);
	mapBack();
	listBack();
	favoritesBack();
	settingsBack();
	setCurrentView("search");
}
function searchBack(direction){
	if(currentView == "search"){
		if(direction == "left"){
			search_view.animate({
				right:screen_width
			});
		}else{
			search_view.animate({
				left:screen_width
			});
		}
	}
}

function mapFront(direction){
	transitionView(mapview, direction);
	searchBack();
	listBack();
	favoritesBack();
	settingsBack();
	setCurrentView("map");
}
function mapBack(direction){
	if(currentView == "map"){
		if(direction == "left"){
			mapview.animate({
				right:screen_width
			});
		}else{
			mapview.animate({
				left:screen_width
			});
		}
	}
}


function listFront(direction){
	transitionView(listview, direction);
	searchBack();
	mapBack();
	favoritesBack();
	settingsBack();
	setCurrentView("list");
}
function listBack(direction){
	if(currentView == "list"){
		if(direction == "left"){
			listview.animate({
				right:screen_width
			});
		}else{
			listview.animate({
				left:screen_width
			});
		}
	}
}

function favoritesFront(direction){
	transitionView(favorites_view, direction);
	searchBack();
	mapBack();
	listBack();
	settingsBack();
	setCurrentView("favorites");
}
function favoritesBack(direction){
	if(currentView == "favorites"){
		if(direction == "left"){
			favorites_view.animate({
				right:screen_width
			});
		}else{
			favorites_view.animate({
				left:screen_width
			});
		}
	}
}


function settingsFront(direction){
	transitionView(settings_view, direction);
	searchBack();
	mapBack();
	listBack();
	favoritesBack();
	setCurrentView("settings");
}
function settingsBack(direction){
	if(currentView == "settings"){
		if(direction == "left"){
			settings_view.animate({
				right:screen_width
			});
		}else{
			settings_view.animate({
				left:screen_width
			});
		}
	}
}
