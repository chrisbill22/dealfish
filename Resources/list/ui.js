Ti.include("fetchList.js");
var listview = Ti.UI.createTableView({
	right: 0,
	height: '95%', 
	width: '100%',
	bottom:0,
});

//Moved your loop over to fetchList.js
//Need to call fetchList() sometime. Probably when the view transitions to the front

MainWindow.add(listview);

