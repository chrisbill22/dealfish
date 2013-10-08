Ti.include("ui.js");
nav_search.addEventListener('click', function(){
	searchFront();
});
nav_map.addEventListener('click', function(){
	mapFront();
	setPins();
	//bring map back to top layer
	/*
	mapview.animate({
		left: 0,
	});
	table_view.animate({
		left: 500,
	});
	*/
});
nav_list.addEventListener('click', function(){
	//bring list layer on top of map layer
	/*
	table_view.animate({
		left: 0, 
	});
	mapview.animate({
		left: 500,
	});
	*/
	listFront();
});
nav_favorites.addEventListener('click', function(){
	favoritesFront();
});
nav_settings.addEventListener('click', function(){
	settingsFront();
});
function searchFront(){
	search_view.animate({
		left: 0
	});
	mapview.animate({
		right: 500
	});
	table_view.animate({
		right: 500
	});
	favorites_view.animate({
		right: 500
	});
	settings_view.animate({
		right: 500
	});
}
function mapFront(){
	search_view.animate({
		left: 500
	});
	mapview.animate({
		left: 0
	});
	table_view.animate({
		right: 500
	});
	favorites_view.animate({
		right: 500
	});
	settings_view.animate({
		right: 500
	});
}
function listFront(){
	search_view.animate({
		left: 500
	});
	mapview.animate({
		left: 500
	});
	table_view.animate({
		right: 0
	});
	favorites_view.animate({
		right: 500
	});
	settings_view.animate({
		right: 500
	});
}
function favoritesFront(){
	search_view.animate({
		left: 500
	});
	mapview.animate({
		left: 500
	});
	table_view.animate({
		left: 500
	});
	favorites_view.animate({
		right: 0
	});
	settings_view.animate({
		right: 500
	});
}
function settingsFront(){
	search_view.animate({
		left: 500
	});
	mapview.animate({
		left: 500
	});
	table_view.animate({
		left: 500
	});
	favorites_view.animate({
		left: 500
	});
	settings_view.animate({
		right: 0
	});
}
