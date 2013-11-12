var notifications_view = Titanium.UI.createView({
	height: '100%', 
	width: '100%',
	left: screen_width,
	backgroundColor:whiteColor,
	zIndex:21
});

var notifications_list = Ti.UI.createTableView({
	height:'90%',
	width:'100%',
	backgroundColor:whiteColor,
	bottom:0
});

var notificationsBack = Ti.UI.createButton({
	backgroundImage: 'images/arrowLeftTrue.png', 
	bottom: 5, 
	left: 10, 
	width: 20,
	height: 25,
});
var notificationsTitle = Ti.UI.createView({
	height:headerHeight,
	top:0,
	left:0,
	backgroundImage: 'images/topBarTrue.png'
});

notificationsTitle.add(notificationsBack);
notifications_view.add(notifications_list);
notifications_view.add(notificationsTitle);

MainWindow.add(notifications_view);
