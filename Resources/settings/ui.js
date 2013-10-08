var settings_view = Titanium.UI.createView({
	height: '100%', 
	width: '100%',
	right: 500
});

var test_button = Ti.UI.createButton({
	top:25,
	width:'90%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Change something"
});

var notification_button = Ti.UI.createButton({
	top:50,
	width:'90%',
	zIndex:0,
	backgroundColor:'#DDD',
	title:"Click here to turn off notification"
});

settings_view.add(test_button, notification_button);

MainWindow.add(settings_view);
