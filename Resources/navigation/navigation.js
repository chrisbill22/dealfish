Ti.include("ui.js");
nav_search.addEventListener('click', function(){
	
});
nav_map.addEventListener('click', function(){
	setPins();
	//bring map back to top layer
	mapview.animate({
		left: 0,
	});
	table_view.animate({
		left: 500,
	});
});
nav_list.addEventListener('click', function(){
	//bring list layer on top of map layer
	table_view.animate({
		left: 0, 
	});
	mapview.animate({
		left: 500,
	});
});
nav_favorites.addEventListener('click', function(){
	
});
nav_settings.addEventListener('click', function(){
	settings_view.animate({
		left: 0
	});
	table_view.animate({
		left: 200
	});
	mapview.animate({
		left: 500
	});
});
