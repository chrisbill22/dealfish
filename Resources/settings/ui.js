Ti.include('terms/ui.js');
Ti.include('privacy/ui.js');
Ti.include('notifications/notifications.js');
Ti.include('bugs/bugs.js');

var settings_view = Titanium.UI.createView({
	height: '100%', 
	width: '100%',
	left: -1*screen_width,
	backgroundColor:whiteColor,
	zIndex:20
});

var settingsBackBt = Ti.UI.createButton({
	bottom:8,
	left: 0, 
	width: 46,
	height: 66/2, 
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});
var settingsBackBt_img = Ti.UI.createImageView({
	image: 'images/arrowLeftTrue.png',
	width: 35/2,
	height: 66/2,
	top:0
});

var settingsTitle = Ti.UI.createView({
	height:headerHeight,
	top:0,
	left:0,
	width:'100%',
	backgroundImage: 'images/topBarTrue.png'
});
/*var settingsTitle_label = Ti.UI.createLabel({
	text:"Gear",
	right: 10, 
	bottom: 10
});*/
var data = [
	{title: 'Notifications'}, 
	{title: 'Set Location'}, 
	/*{title: 'Privacy Statement'}, 
	{title: 'Terms of Use'},*/
	{title: 'Submit Bugs / Feedback'}
];
var settingsTable = Ti.UI.createTableView({
	data: data, 
	top: headerHeight, 
	height:viewHeight+footerHeight,
	font:{fontFamily: 'Helvetica'}
});

settingsTable.addEventListener('click', function(e){
	if(e.index == 0){
		openNavigationSettings();
	}else if(e.index == 1){
		show_geolocation_setup();
	}else if(e.index == 2){
		openBugs();
	}
});

//settingsTitle.add(settingsTitle_label);
settingsBackBt.add(settingsBackBt_img);
settingsTitle.add(settingsBackBt);
settings_view.add(settingsTitle);
settings_view.add(settingsTable);

MainWindow.add(settings_view);
