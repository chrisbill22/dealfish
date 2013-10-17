//Hello!
var Cloud = require("ti.cloud");

var MainWindow = Ti.UI.createWindow({
	width:'100%',
	height:'100%',
	backgroundColor:'#fff'
});
Ti.include("pushNotifications.js");
registerPushNotifications();

//Variables
Ti.include("globalVars.js");

//Important globally used functions
Ti.include("navigation/navigation.js");
Ti.include("db/fetch.js");
Ti.include("locations.js");
Ti.include("loadingScreen/loadingScreen.js");

//Views
Ti.include("map/map.js");
Ti.include("list/list.js");
Ti.include("settings/settings.js");
Ti.include("search/search.js");
Ti.include("favorites/favorites.js");

if(!Ti.App.Properties.getBool("zipSetup")){
	//Initiate startup question
	Ti.include("geoSetup/geoSetup.js");
	show_geolocation_setup();
}else{
	if(Ti.App.Properties.getInt("zip")){
		//Reverse geo lookup the stored zipcode
	}else{
		//Start finding current location
	}
}

function appStartupCheck(){
	//Ti.API.log("Setup Interval-- loading = "+loading+", Lat = "+currentLat+", Long = "+currentLong);
	if(loading == false && currentLat != -9999 && currentLong != -9999){
		Ti.API.log("SET STARTUP LIST");
		fetchList();
	}else{
		setTimeout(appStartupCheck, 300);
	}
}
appStartupCheck();

//Navigation button functionlity has been moved to navigation/navigation.js

MainWindow.open();

