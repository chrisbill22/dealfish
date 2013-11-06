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
	    top:55,
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
	width: 70, 
	left: 20, 
	top: 105, 
	title: '$', 
	backgroundColor: "#FFF"
});
var twoDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 90, 
	top: 105, 
	title: '$$', 
	backgroundColor: "#FFF"
});
var threeDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 160, 
	top: 105, 
	title: '$$$', 
	backgroundColor: "#FFF"
});
var fourDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 230, 
	top: 105, 
	title: '$$$$', 
	backgroundColor: "#FFF"
});
	var padding = 10;
	var boxWidth = 80;
	var boxHeight = 80;
	var tempLeft = 30;
	var tempTop = 160;
for(var i = 0; i != categories.length; i++){
	var searchBox = Titanium.UI.createButton({
		width: boxWidth,
		height: boxHeight, 
		backgroundColor: '#FF6600', 
		backgroundImage: 'images/categories/'+categories[i]+'.png', 
		left: tempLeft, 
		top: tempTop, 
		borderWidth: 1
	});
	tempLeft = tempLeft + boxWidth + padding;
	if(tempLeft >= 280){
		tempTop = tempTop + boxHeight + padding; 
		tempLeft = 30;
	}
	search_view.add(searchBox);
}

searchTitle.add(searchBack);
search_view.add(searchTitle);
if(!android){ search_view.add(search); }
//search_view.add(search_table_view);
search_view.add(searchButton);
search_view.add(oneDollar, twoDollar, threeDollar, fourDollar);
/*
search_view.add(twoDollar);
search_view.add(threeDollar);
search_view.add(fourDollar);
*/
MainWindow.add(search_view);
