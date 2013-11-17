
var debug = false;
var loading = false;
var startedUp = false;

var latitudeDelta = 0.5;
var longitudeDelta = 0.5;
var currentLong = -9999;
var currentLat = -9999;
var zipcode = null;



var pushNotifications = [];


var categories = ['Bakery', 'Bar', 'Breakfast', 'Burgers', 'Chinese', 'Club', 'Coffee', 'Diner', 'Greek', 'IceCream', 'Italian', 'Japanese', 'Mexican', 'Pizza', 'Sandwiches', 'Seafood', 'Thai'];
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
10 = phone
11 = website
12 = bio
13 = specialties
14 = price range - 1 to 4, 1-low, 4-high
15 = dealID
] */
var currentLocations = [];

/* [
	0 = merchant ID
	1 = [ currentLocaitons[x] ]
	2 = [ currentLocaitons[y] ]
] */
var companies = [];

var searchLocationResults = [];
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

var orangeColor = "#FF962D";
var whiteColor = "#F7F7F7";
var blackColor = "#31313F";
var grey = "#5C5C5C";

var currentView = "list";
var currentSubView = ""; // this will store the last view open before switching to settings, search, or any other layover view
var deviceID = "";
var deviceToken = "";

var activeLocation = false;
var fetchingLocations = false;
var fetchedLocations = false;
var zipCodeBased = false;

var iOSversion = (Ti.Platform.version).slice(0, 1);

var screen_height = Ti.Platform.displayCaps.platformHeight;
var screen_width = Ti.Platform.displayCaps.platformWidth;

var headerHeight = 96/2;
var footerHeight = 96/2;

if(iOSversion > 6){
	headerHeight+=20;
}

var viewHeight = screen_height-(headerHeight+footerHeight);
var masterBackground = 'images/background.png';

var os = Titanium.Platform.osname;
var android = false;
if(os == "android"){
	android = true;
}


//Saved Variables


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

if(Ti.App.Properties.getList("pushNotifications")){
	pushNotifications = Ti.App.Properties.getList("pushNotifications");
}

