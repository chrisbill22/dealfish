//Hello!

var MainWindow = Ti.UI.createWindow({
	width:'100%',
	height:'100%',
	backgroundColor:'#fff'
});
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

Ti.include("map/map.js");

var button = Ti.UI.createButton({
	bottom:25,
	width:'90%',
	title:"Get my special!",
	zIndex:10
});
MainWindow.add(button);

MainWindow.open();

Ti.include("db/dbLocations.js");

button.addEventListener('click', function(){
	var testRequest = createDbRequest();
	
	addPostVariable("current_long", -86.907948);
	addPostVariable("current_lat", 40.423962);
	addPostVariable("delta_long", 1);
	addPostVariable("delta_lat", 1);
	
	sendDbRequest("http://dealfish.genyapps.com/app/getDeals.php", testRequest);
});
