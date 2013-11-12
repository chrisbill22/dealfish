Ti.include("fetchList.js");
//Main List View
var listview = Ti.UI.createView({
	left: 0,
	height: viewHeight, 
	width: '100%',
	top:headerHeight,
	zIndex:0,
	backgroundImage:masterBackground
});

var listTitle = Ti.UI.createView({
	height:'10%',
	top:0,
	left:0,
	backgroundImage: 'images/topBarTrue.png',
	borderWidth:0
});
var listTitle_label = Ti.UI.createLabel({
	text:"Home",
	left:'10%',
	bottom:10
});

var list_tableview = Ti.UI.createTableView({
	right: 0,
	height: '100%', 
	width: '100%',
	bottom:0,
	rowHeight:80,
	style: Ti.UI.iPhone.TableViewStyle.PLAIN,
	separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
	separatorColor: 'transparent',
	backgroundImage:masterBackground
});

listTitle.add(listTitle_label);
listview.add(list_tableview);
MainWindow.add(listview);

