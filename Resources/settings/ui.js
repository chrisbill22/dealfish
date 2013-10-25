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
	borderWidth:0
});
var settingsTitle_label = Ti.UI.createLabel({
	text:"Settings",
});

var test_button = Ti.UI.createButton({
	top:'15%',
	width:'90%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Change something"
});

var notification_button = Ti.UI.createButton({
	top:'25%',
	width:'90%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Click here to turn off notification"
});

settingsTitle.add(settingsTitle_label);
settingsTitle.add(settingsBack);
settings_view.add(settingsTitle);
settings_view.add(test_button, notification_button);

MainWindow.add(settings_view);
