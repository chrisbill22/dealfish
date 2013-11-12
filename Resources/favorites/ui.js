var favoritesBGColor = "#d5d5d5";
var favorites_view = Ti.UI.createScrollView({
	left: -1*screen_width,
	height: viewHeight,
	width: '100%',
	top:headerHeight,
	zIndex:0,
	backgroundColor:favoritesBGColor
});
var favorites_innerView = Ti.UI.createView({
	height:1000,
	width:'100%',
	top:0
});
/*var favorites_tableview = Ti.UI.createTableView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:0,
	data:[{title:"Favorite1"}, {title:"Favorite2"}, {title:"Favorite3"}]
});*/

var favorites_newListButton = Ti.UI.createButton({
	width:'90%',
	height:50,
	title:'Create New List',
	backgroundColor:grey,
	top:20,
	color:orangeColor,
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});

Ti.include("accountSetup.js");

favorites_view.add(favorites_innerView);
favorites_innerView.add(favorites_newListButton);
//favorites_view.add(favorites_tableview);

MainWindow.add(favorites_view);
