Ti.include("ui.js");
Ti.include("constants.js");
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

function transitionViewIn(obj, dir){
	Ti.API.info("Moving "+dir);
	if(dir == "right"){
		Ti.API.log(obj.left);
		if(obj.left > 0){
			Ti.API.info("Jumping View");
			obj.left = -1 * screen_width;
		}
		obj.zIndex = 1;
		obj.animate({
			left: 0,
			duration: IN_ANIMATION_SPEED
		}, function(){
			obj.zIndex = 0;
		});
	}
	
	if(dir == "left"){
		if(obj.right != 0 && obj.right != ""){
			Ti.API.info("Jumping View");
			obj.left = screen_width;
		}
		obj.zIndex = 1;
		obj.animate({
			left: 0,
			duration: IN_ANIMATION_SPEED
		}, function(){
			obj.zIndex = 0;
		});
	}
}
function transitionViewOut(obj, dir){
	obj.animate(transitionViewOutAnimation, function(){
		if(dir == "left"){
			obj.right = screen_width;
		}else{
			obj.left = screen_width;
		}
		obj.opacity = 1;
		obj.transform = Titanium.UI.create2DMatrix().scale(1,1);
	});
}


function navReset(){
	nav_favorites.backgroundColor = '#fff';
	nav_list.backgroundColor = '#fff';
	nav_map.backgroundColor = '#fff';
	nav_search.backgroundColor = '#fff';
	nav_settings.backgroundColor = '#fff';
}

function transitionNav(obj){
	navReset();
	obj.backgroundColor = '#333';
}

function searchFront(direction){	
	transitionNav(nav_search);
	mapBack();
	listBack();
	favoritesBack();
	settingsBack();
	transitionViewIn(search_view, direction);
	setCurrentView("search");
}
function searchBack(direction){
	if(currentView == "search"){
		transitionViewOut(search_view, direction);
	}
}

function mapFront(direction){
	transitionNav(nav_map);
	searchBack();
	listBack();
	favoritesBack();
	settingsBack();
	transitionViewIn(mapview, direction);
	setCurrentView("map");
}
function mapBack(direction){
	if(currentView == "map"){
		transitionViewOut(mapview, direction);
	}
}


function listFront(direction){
	transitionNav(nav_list);
	searchBack();
	mapBack();
	favoritesBack();
	settingsBack();
	transitionViewIn(listview, direction);
	setCurrentView("list");
}
function listBack(direction){
	if(currentView == "list"){
		transitionViewOut(listview, direction);
	}
}

function favoritesFront(direction){
	transitionNav(nav_favorites);
	searchBack();
	mapBack();
	listBack();
	settingsBack();
	transitionViewIn(favorites_view, direction);
	setCurrentView("favorites");
}
function favoritesBack(direction){
	if(currentView == "favorites"){
		transitionViewOut(favorites_view, direction);
	}
}


function settingsFront(direction){
	transitionNav(nav_settings);
	searchBack();
	mapBack();
	listBack();
	favoritesBack();
	transitionViewIn(settings_view, direction);
	setCurrentView("settings");
}
function settingsBack(direction){
	if(currentView == "settings"){
		transitionViewOut(settings_view, direction);
	}
}
