Ti.include("fetchList.js");
//Main List View
var listview = Ti.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:0
});

var listTitle = Ti.UI.createView({
	height:'12%',
	top:0,
	left:0,
	backgroundColor:'#DDD',
	borderWidth:0
});
var listTitle_label = Ti.UI.createLabel({
	text:"Home",
	left:'10%',
	bottom:10
});

var list_tableview = Ti.UI.createTableView({
	right: 0,
	height: '88%', 
	width: '100%',
	bottom:0,
	rowHeight:80,
	style: Ti.UI.iPhone.TableViewStyle.PLAIN,
	separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
	separatorColor: 'transparent'
});

//A row view
/*
var listViewItem = Ti.UI.createView({
	width:'90%',
	height:'100%',
	top:10,
});
var listViewItem_image = Ti.UI.createView({
	width:60,
	height:60,
	backgroundColor:iOSBlue,
	left:0
});
var listViewItem_title = Ti.UI.createLabel({
	left: 70,
	top:10,
	width:'70%',
	font:{fontSize:12},
	text:"Loading..."
});
var listViewItem_deal = Ti.UI.createLabel({
	left:70,
	bottom:10,
	font:{fontSize:10},
	text:"Loading..."
});
var listViewItem_distance = Ti.UI.createLabel({
	right:5,
	top:10,
	text:"0.0 mi"
});
*/
//Moved your loop over to fetchList.js
//Need to call fetchList() sometime. Probably when the view transitions to the front


listTitle.add(listTitle_label);
listview.add(list_tableview);
listview.add(listTitle);
MainWindow.add(listview);

