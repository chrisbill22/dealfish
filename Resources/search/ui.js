var search_view = Titanium.UI.createView({
	height: '100%', 
	width: '100%',
	bottom:0,
	zIndex:20,
	left: screen_width,
});

var searchBack = Ti.UI.createButton({
	title:"back",
	right:10,
	bottom:5
});
var searchTitle = Ti.UI.createView({
	height:'12%',
	top:0,
	left:0,
	backgroundColor:'#DDD',
	borderWidth:0
});
var searchTitle_label = Ti.UI.createLabel({
	text:"Search",
	left:'10%',
	bottom:10
});


var search = Titanium.UI.createSearchBar({
    barColor:'#JJJ', 
    showCancel:true,
    height:'7%',
    top:'12%',
    zIndex:20
});

var search_table_view = Ti.UI.createTableView({
	data:[{title: "Search View"}],
	search:search,
	width:'100%',
	height:'81%',
	bottom:0,
	zIndex:0
});

searchTitle.add(searchBack);
searchTitle.add(searchTitle_label);
search_view.add(searchTitle);
search_view.add(search);
search_view.add(search_table_view);


MainWindow.add(search_view);
