
var debug = false;
var loading = false;
var startedUp = false;

var latitudeDelta = 0.5;
var longitudeDelta = 0.5;
var currentLong = -9999;
var currentLat = -9999;
var zipcode = null;

// [0 = deal description, 1 = company name, 2 = merchant ID, 3 = longitude, 4 = latitude, 5 = flash deal]
var currentLocations = [];
//var currentLocations = [["This is a description", "Test Company", "TCP", 1.1, 1.1, 0],["This is a description", "Test Company", "TCP", 1.1, 1.1, 0],["This is a description", "Test Company", "TCP", 1.1, 1.1, 0]];

var iOSBlue = "#007AFF";
var currentView = "list";
var deviceID = "";

var activeLocation = false;
var fetchingLocations = false;

var screen_height = Ti.Platform.displayCaps.platformHeight;
var screen_width = Ti.Platform.displayCaps.platformWidth;




//Saved Variables
if(!Ti.App.Properties.getBool("pushSubscription")){
	Ti.App.Properties.setBool("pushSubscription", false);
}

if(!Ti.App.Properties.getBool("zipSetup")){
	if(Ti.App.Properties.getInt("zip")){
		zipcode = Ti.App.Properties.getInt("zip");
	}
}

if(Ti.App.Properties.getString("deviceID")){
	deviceID = Ti.App.Properties.getString("deviceID");
}
