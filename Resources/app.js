Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK; 
//Variables
Ti.include("globalVars.js");

var Cloud = require("ti.cloud");

Ti.Geolocation.purpose = "Get your location for deals in your area";

var MainWindow = Ti.UI.createWindow({
	width:'100%',
	height:'100%',
	backgroundColor:whiteColor
});

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

Ti.include("pushNotifications.js");
if(!android){
	//registerPushNotifications();
}



//Important globally used functions
Ti.include("db/fetch.js");
Ti.include("locations.js");
Ti.include("loadingScreen/loadingScreen.js");
Ti.include("statistics/statistics.js");
Ti.include("countdown.js");

//Views
Ti.include('company/company.js');
Ti.include("map/map.js");
Ti.include("list/list.js");
Ti.include("settings/settings.js");
Ti.include("search/search.js");
Ti.include("favorites/favorites.js");
Ti.include("geoSetup/geoSetup.js");

//Navigation relies on the views already being run so that's why it's down here
Ti.include("navigation/navigation.js");

if(Titanium.App.Properties.gettList("stats")){
	statistics = Titanium.App.Properties.gettList("stats");
}

if(!Ti.App.Properties.getBool("zipSetup")){
	//Initiate startup question
	show_geolocation_setup();
}else{
	if(Ti.App.Properties.getInt("zip")){
		//Reverse geo lookup the stored zipcode
		convertZip(Ti.App.Properties.getInt("zip"));
	}else{
		//Start finding current location
		trackCurrentLocation();
		setTimeout(locationTester, 5000);
	}
}

function locationTester(){
	if(loading == true){
		stop_loading();
		show_geolocation_setup();
	}
}

function appStartupCheck(){
	Ti.API.log("hi");
	//Ti.API.log("Setup Interval-- loading = "+loading+", Lat = "+currentLat+", Long = "+currentLong);
	if(loading == false && currentLat != -9999 && currentLong != -9999){
		if(!Ti.App.Properties.getInt("zip")){
			Ti.API.warn("SET STARTUP LIST");
			fetchLocations();
			checkLocationsFetched();
		}
	}else{
		setTimeout(appStartupCheck, 300);
	}
}
appStartupCheck();

//Navigation button functionlity has been moved to navigation/navigation.js

MainWindow.open();

Ti.App.addEventListener('resume', function(){
	sendStats();
});

