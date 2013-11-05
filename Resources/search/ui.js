var search_view = Titanium.UI.createView({
	height: '100%', 
	width: '100%',
	bottom:0,
	zIndex:20,
	left: screen_width,
	backgroundColor: '#DDD'
});
var searchBack = Ti.UI.createButton({
	title:"back",
	left:10,
	bottom:5,
});
var searchTitle = Ti.UI.createView({
	height:'10%',
	top:0,
	left:0,
	backgroundColor:'#FF6600',
});
var searchButton = Ti.UI.createButton({
	title: "Search!",
	width: '100%',
	height: '8%', 
	bottom: 0, 
	left: 0, 
	backgroundColor: '#FF6600'
});
/*
var searchTitle_label = Ti.UI.createLabel({
	text:"Search",
	left:'10%',
	bottom:10
});
*/
//This search is not supported in android
if(!android){
	var search = Titanium.UI.createSearchBar({
	    barColor:'#JJJ', 
	    showCancel:false,
	    height:'7%',
	    top:'10%',
	    zIndex:20
	});
}
/*
var search_table_view = Ti.UI.createTableView({
	data:[{title: "Search View"}],
	width:'100%',
	height:'90%',
	bottom:0,
	zIndex:0
});
if(!android){
	search_table_view.search = search;
}
*/
var oneDollar = Titanium.UI.createButton({
	height: 40, 
	width: 60, 
	left: 40, 
	top: '20%', 
	title: '$', 
	backgroundColor: "#FFF"
});
var twoDollar = Titanium.UI.createButton({
	height: 40, 
	width: 60, 
	left: 100, 
	top: '20%', 
	title: '$$', 
	backgroundColor: "#FFF"
});
var threeDollar = Titanium.UI.createButton({
	height: 40, 
	width: 60, 
	right: 100, 
	top: '20%', 
	title: '$$$', 
	backgroundColor: "#FFF"
});
var fourDollar = Titanium.UI.createButton({
	height: 40, 
	width: 60, 
	right: 40, 
	top: '20%', 
	title: '$$$$', 
	backgroundColor: "#FFF"
});
searchTitle.add(searchBack);
search_view.add(searchTitle);
if(!android){ search_view.add(search); }
//search_view.add(search_table_view);
search_view.add(searchButton);
search_view.add(oneDollar);
search_view.add(twoDollar);
search_view.add(threeDollar);
search_view.add(fourDollar);

MainWindow.add(search_view);
