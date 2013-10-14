Ti.include("fetchList.js");
var listview = Ti.UI.createTableView({
	right: 0,
	height: '95%', 
	width: '100%',
	bottom:0,
	data: fetchList()
});

MainWindow.add(listview);

