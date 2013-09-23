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


MainWindow.open();


 
Titanium.Geolocation.addEventListener('location',function(){
    getLocation();
});