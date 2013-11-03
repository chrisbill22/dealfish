Ti.include("constants.js");
Ti.include("ui.js");
Ti.include("swipe.js");
Ti.include("header.js");

//Clicks
nav_search.addEventListener('click', function(){
	//searchFront(getSlideDirection("search"));
	transitionLeftViewIn();
});
nav_map.addEventListener('click', function(){
	mapFront(getSlideDirection("map"));
});
nav_list.addEventListener('click', function(){
	listFront(getSlideDirection("list"));
});
nav_favorites.addEventListener('click', function(){
	favoritesFront(getSlideDirection("favorites"));
});
nav_settings.addEventListener('click', function(){
	//settingsFront(getSlideDirection("settings"));
	transitionRightViewIn();
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
	setNewHeaderTitle(viewName);
	Ti.API.info("Current View = "+currentView);
}
function setCurrentSubView(viewName){
	currentSubView = viewName;
	Ti.API.info("Saving last sub view as = "+currentView);
}

function transitionViewIn(obj, dir){
	Ti.API.info("Moving "+dir);
	
	var tempZ = obj.zIndex;
	
	if(dir == "right"){
		Ti.API.log(obj.left);
		if(obj.left > 0){
			Ti.API.info("Jumping View");
			obj.left = -1 * screen_width;
		}
		obj.zIndex = tempZ+1;
		obj.animate({
			left: 0,
			duration: IN_ANIMATION_SPEED
		}, function(){
			obj.zIndex = tempZ;
		});
	}
	
	if(dir == "left"){
		if(obj.left < 0){
			Ti.API.info("Jumping View");
			obj.left = screen_width;
		}
		obj.zIndex = tempZ+1;
		obj.animate({
			left: 0,
			duration: IN_ANIMATION_SPEED
		}, function(){
			obj.zIndex = tempZ;
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
function slideViewOut(obj, dir){
	if(dir == "left"){
		obj.animate({
			left:(screen_width*-1),
			duration : OUT_ANIMATION_SPEED
		});
	}else if(dir == "right"){
		obj.animate({
			left:screen_width,
			duration : OUT_ANIMATION_SPEED
		});
	}
	/*obj.animate(transitionViewOutAnimation, function(){
		if(dir == "left"){
			obj.left = screen_width;
		}else{
			obj.left = screen_width;
		}
		obj.opacity = 1;
		obj.transform = Titanium.UI.create2DMatrix().scale(1,1);
	});*/
}

function navReset(){
	nav_favorites.backgroundColor = '#DDD';
	nav_list.backgroundColor = '#DDD';
	nav_map.backgroundColor = '#DDD';
	nav_search.backgroundColor = '#DDD';
	nav_settings.backgroundColor = '#DDD';
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
	setCurrentSubView(currentView);
	setCurrentView("search");
}
function searchBack(direction){
	direction = "left";
	if(currentView == "search"){
		slideViewOut(search_view, direction);
		setCurrentView(currentSubView);
		setCurrentSubView("");
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
	fetchList();
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
	setCurrentSubView(currentView);
	setCurrentView("settings");
}
function settingsBack(direction){
	direction = "right";
	if(currentView == "settings"){
		slideViewOut(settings_view, direction);
		setCurrentView(currentSubView);
		setCurrentSubView("");
	}
}
