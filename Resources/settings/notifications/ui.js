var notifications_view = Titanium.UI.createView({
	height: '100%', 
	width: '100%',
	left: screen_width,
	backgroundColor:'#fff',
	zIndex:21
});

var notifications_list = Ti.UI.createTableView({
	height:'90%',
	width:'100%',
	backgroundColor:'#fff',
	bottom:0
});

var notificationsBack = Ti.UI.createButton({
	title:"back",
	left:10,
	bottom:5
});
var notificationsTitle = Ti.UI.createView({
	height:'10%',
	top:0,
	left:0,
	backgroundColor:orangeColor
});

notificationsTitle.add(notificationsBack);
notifications_view.add(notifications_list);
notifications_view.add(notificationsTitle);

MainWindow.add(notifications_view);
