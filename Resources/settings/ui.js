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
	height:'10%',
	top:0,
	left:0,
	backgroundColor:'#FF6600',
});
var settingsTitle_label = Ti.UI.createLabel({
	text:"Gear",
	right: 10, 
	bottom: 10
});
var data = [
	{title: 'Notifications'}, 
	{title: 'Set Location'},
	{title: 'My Preferences'}, 
	{title: 'Privacy Statement'}, 
	{title: 'Terms of Use'}
];
var settingsTable = Ti.UI.createTableView({
	data: data, 
	top: 55, 
	footerTitle: '', 
	font:{fontFamily: 'Helvetica'},
});



settingsTitle.add(settingsTitle_label);
settingsTitle.add(settingsBack);
settings_view.add(settingsTitle);
settings_view.add(settingsTable);

MainWindow.add(settings_view);
