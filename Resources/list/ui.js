Ti.include("fetchList.js");
var listview = Ti.UI.createTableView({
	right: 500,
	height: '95%', 
	width: '100%',
	bottom:0,
	data: [{title:"List View"}]
});

MainWindow.add(listview);

