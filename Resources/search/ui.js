var search_view = Titanium.UI.createView({
	height: '95%', 
	width: '100%',
	bottom:0,
	left: 500,
});

var search = Titanium.UI.createSearchBar({
    barColor:'#JJJ', 
    showCancel:true,
    height:43,
    top:0,
});
search_view.add(search);

var search_table_view = Ti.UI.createTableView({
	data:[{title: "Search View"}],
	search:search,
	width:'100%',
	height:'90%'
});
search_view.add(search_table_view);


MainWindow.add(search_view);
