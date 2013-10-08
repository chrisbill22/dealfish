var search_view = Titanium.UI.createView({
	height: '100%', 
	width: '100%',
	left: 500
});

var search = Titanium.UI.createSearchBar({
    barColor:'#JJJ', 
    showCancel:true,
    height:43,
    top:0,
});

MainWindow.add(search_view);
