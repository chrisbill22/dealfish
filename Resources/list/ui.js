Ti.include("fetchList.js");
var listTitle = Ti.UI.createView({
	height:'10%',
	top:0,
	left:0,
	backgroundColor:'#DDD',
	borderWidth:0
});
var listTitle_label = Ti.UI.createLabel({
	text:"Home",
	left:'10%'
});

var list_tableview = Ti.UI.createTableView({
	right: 0,
	height: '90%', 
	width: '100%',
	bottom:0
});

var listview = Ti.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:0
});

//Moved your loop over to fetchList.js
//Need to call fetchList() sometime. Probably when the view transitions to the front


listTitle.add(listTitle_label);
listview.add(list_tableview);
listview.add(listTitle);
MainWindow.add(listview);

