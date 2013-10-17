var geoSetupView = Ti.UI.createView({
	width:'100%',
	height:'100%',
	zIndex:1001,
	top:0,
	top:screen_height,
	left:0
});

var geoSetupZipButton = Ti.UI.createButton({
	top:screen_height*0.35,
	title:'Set Your ZipCode',
	width:'90%',
	height:'10%',
	backgroundColor:'#333',
	color:'#DDD'
});

var geoSetupGeoButton = Ti.UI.createButton({
	bottom:screen_height*0.35,
	title:'Allow Geolocation',
	width:'90%',
	height:'10%',
	backgroundColor:'#333',
	color:'#DDD'
});

geoSetupView.add(geoSetupZipButton);

geoSetupView.add(geoSetupGeoButton);
