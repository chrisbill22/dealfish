var favorites_view = Ti.UI.createTableView({
	left: -1*screen_width,
	height: '95%', 
	width: '100%',
	bottom:0,
	data:[{title:"Favorites"}]
});

MainWindow.add(favorites_view);
