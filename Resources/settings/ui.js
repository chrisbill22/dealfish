var settings_view = Titanium.UI.createView({
	height: '100%', 
	width: '100%',
	left: -1*screen_width,
	backgroundColor:'#fff',
	zIndex:20
});

var settingsBack = Ti.UI.createButton({
	title:"back",
	left:10,
	bottom:5
});
var settingsTitle = Ti.UI.createView({
	height:'12%',
	top:0,
	left:0,
	backgroundColor:'#DDD',
	borderWidth:1
});
var settingsTitle_label = Ti.UI.createLabel({
	text:"Settings",
});

var signup_button = Ti.UI.createButton({
	top:'15%',
	width:'100%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Sign Up", 
	borderWidth: 1
});

var account_button = Ti.UI.createButton({
	top:'20%',
	width:'100%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Account", 
	borderWidth: 1
});

var notifications_button = Ti.UI.createButton({
	top:'25%',
	width:'100%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Notifications", 
	borderWidth: 1
});

var location_button = Ti.UI.createButton({
	top:'30%',
	width:'100%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Location", 
	borderWidth: 1
});

var privacy_button = Ti.UI.createButton({
	top:'45%',
	width:'100%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Privacy Statement", 
	borderWidth: 1
});

var terms_button = Ti.UI.createButton({
	top:'55%',
	width:'100%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Terms of Use", 
	borderWidth: 1
});

settingsTitle.add(settingsTitle_label);
settingsTitle.add(settingsBack);
settings_view.add(settingsTitle);
settings_view.add(signup_button);
settings_view.add(account_button);
settings_view.add(notifications_button);
settings_view.add(location_button);
settings_view.add(privacy_button);
settings_view.add(terms_button);


MainWindow.add(settings_view);
