//Hello!

var MainWindow = Ti.UI.createWindow({
	width:'100%',
	height:'100%',
	backgroundColor:'#fff'
});
Ti.Geolocation.purpose = "Meal Deals will track your location to show your deals in your area.";
/*
var view = Ti.UI.createView({
	width:'50%',
	height:'13%',
	top:0,
	backgroundColor:'#123456'
});

var button = Ti.UI.createButton({
	bottom:25,
	width:'90%',
	title:"Hello World"
});

button.addEventListener('click', function(){
	alert("Hello World!");
});
*/

//Variables
Ti.include("globalVars.js");

//Important globally used functions
Ti.include("navigation/navigation.js");
Ti.include("db/fetch.js");
Ti.include("locations.js");

//Views
Ti.include("map/map.js");
Ti.include("list/list.js");
Ti.include("settings/settings.js");
Ti.include("search/search.js");
Ti.include("favorites/favorites.js");

//Navigation button functionlity has been moved to navigation/navigation.js

MainWindow.open();

