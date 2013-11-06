
var debug = false;
var loading = false;
var startedUp = false;

var latitudeDelta = 0.5;
var longitudeDelta = 0.5;
var currentLong = -9999;
var currentLat = -9999;
var zipcode = null;

var categories = ['Chinese', 'Coffee', 'Pizza', 'Bar'];
/* [
0 = deal description,
1 = company name,
2 = merchant ID,
3 = longitude,
4 = latitude,
5 = flash deal,
6 = distance from current location (default -1, calculated in-app),
7 = start date,
8 = end date
9 = category
] */
var currentLocations = [];
//var currentLocations = [["This is a description", "Test Company", "TCP", 1.1, 1.1, 0],["This is a description", "Test Company", "TCP", 1.1, 1.1, 0],["This is a description", "Test Company", "TCP", 1.1, 1.1, 0]];

var currentCompanyID = -1;
//

/* [
0 = listName
1 = [
	0 = company name
	1 = merchant ID
	2 = long
	3 = lat
	4 = distance from current location (default -1, calculated in-app)
	5 = push enabled (temp)
	]
] */
var favorites = [];

var iOSBlue = "#007AFF";
var currentView = "list";
var currentSubView = ""; // this will store the last view open before switching to settings, search, or any other layover view
var deviceID = "";
var deviceToken = "";

var activeLocation = false;
var fetchingLocations = false;
var fetchedLocations = false;
var zipCodeBased = false;

var screen_height = Ti.Platform.displayCaps.platformHeight;
var screen_width = Ti.Platform.displayCaps.platformWidth;
var os = Titanium.Platform.osname;
var android = false;
if(os == "android"){
	android = true;
}



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

if(Ti.App.Properties.getList("favorites")){
	favorites = Ti.App.Properties.getList("favorites");
}
