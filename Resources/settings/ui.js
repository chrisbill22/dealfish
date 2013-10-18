var settingsTitle = Ti.UI.createView({
	height:'12%',
	top:0,
	left:0,
	backgroundColor:'#DDD',
	borderWidth:0
});
var settingsTitle_label = Ti.UI.createLabel({
	text:"Settings",
	left:'10%',
	bottom:10
});

var settings_view = Titanium.UI.createView({
	height: '100%', 
	width: '100%',
	left: -1*screen_width
});

var test_button = Ti.UI.createButton({
	top:'10%',
	width:'90%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Change something"
});

var notification_button = Ti.UI.createButton({
	top:'15%',
	width:'90%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Click here to turn off notification"
});

settingsTitle.add(settingsTitle_label);
settings_view.add(settingsTitle);
settings_view.add(test_button, notification_button);

MainWindow.add(settings_view);
