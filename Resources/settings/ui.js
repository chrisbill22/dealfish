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
	backgroundImage: 'images/arrowLeftTrue.png', 
	bottom: 5, 
	left: 10, 
	width: 20,
	height: 25, 
});
var settingsTitle = Ti.UI.createView({
	height:headerHeight,
	top:0,
	left:0,
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
	top: '10%', 
	footerTitle: '', 
	font:{fontFamily: 'Helvetica'},
});

settingsTable.addEventListener('click', function(e){
	if(e.index == 0){
		openNavigationSettings();
	}else if(e.index == 1){
		show_geolocation_setup();
	}else if(e.index == 2){
		openPrivacy();
	}else if(e.index == 3){
		openTerms();
	}else if(e.index == 4){
		openBugs();
	}
});

//settingsTitle.add(settingsTitle_label);
settingsTitle.add(settingsBackBt);
settings_view.add(settingsTitle);
settings_view.add(settingsTable);

MainWindow.add(settings_view);
