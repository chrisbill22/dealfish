Ti.include("fetchList.js");
var table_view = Ti.UI.createTableView({
	right: 500,
	height: '100%', 
	width: '100%',
	data: currentLocations[1],
});

MainWindow.add(table_view);

