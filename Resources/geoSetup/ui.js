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

var enterZipcode_label = Ti.UI.createLabel({
	text:"Please Enter a Zipcode",
	font:{fontSize:12},
	top:150,
	left:'10%',
	color:"#fff",
	opacity:0
});

var enterZipcode_textbox = Ti.UI.createTextArea({
	width:'80%',
	top: 170,
	returnKeyType:Titanium.UI.RETURNKEY_DONE,
	opacity:0
});

var enterZipcode_backBt = Ti.UI.createButton({
	top:15,
	title:'Back',
	width:'90%',
	height:'10%',
	backgroundColor:'#333',
	color:'#DDD',
	opacity:0
});

geoSetupView.add(enterZipcode_backBt);
geoSetupView.add(enterZipcode_label);
geoSetupView.add(enterZipcode_textbox);
geoSetupView.add(geoSetupZipButton);
geoSetupView.add(geoSetupGeoButton);
