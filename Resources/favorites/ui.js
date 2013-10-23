var favorites_view = Ti.UI.createView({
	left: -1*screen_width,
	height: '100%', 
	width: '100%',
	bottom:0
});

var favoritesTitle = Ti.UI.createView({
	height:'12%',
	top:0,
	left:0,
	backgroundColor:'#DDD',
	borderWidth:0
});
var favoritesTitle_label = Ti.UI.createLabel({
	text:"Favorites",
	left:'10%',
	bottom:10
});
var favorites_tableview = Ti.UI.createTableView({
	left: 0,
	height: '88%', 
	width: '100%',
	bottom:0,
	data:[{title:"Favorite1"}, {title:"Favorite2"}, {title:"Favorite3"}]
});

Ti.include("accountSetup.js");


favoritesTitle.add(favoritesTitle_label);
favorites_view.add(favorites_tableview);
favorites_view.add(favoritesTitle);

MainWindow.add(favorites_view);
