Ti.include('terms/ui.js');
Ti.include('privacy/ui.js');
Ti.include('notifications/notifications.js');

var settings_view = Titanium.UI.createView({
	height: '100%', 
	width: '100%',
	left: -1*screen_width,
	backgroundColor:'#fff',
	zIndex:20
});

var settingsBackBt = Ti.UI.createButton({
	backgroundImage: 'images/arrowLeftTrue.png', 
	width: 15,
	height: 25,
	bottom: 10, 
	left: 5, 
	width: 30,
	height: 30,
	top: 20, 
	left: 5,
});
var settingsTitle = Ti.UI.createView({
	height:'10%',
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
	{title: 'Privacy Statement'}, 
	{title: 'Terms of Use'}
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
	}
});

//settingsTitle.add(settingsTitle_label);
settingsTitle.add(settingsBackBt);
settings_view.add(settingsTitle);
settings_view.add(settingsTable);

MainWindow.add(settings_view);
