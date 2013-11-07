var padding = 20;
var boxWidth = 80;
var boxHeight = 80;
var tempLeft = 20;
var tempTop = 165;


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
	backgroundColor:orangeColor,
});
var searchButton = Ti.UI.createButton({
	title: "Search!",
	width: '100%',
	height: '8%', 
	bottom: 0, 
	left: 0, 
	backgroundColor: orangeColor
});

var searchBar = Titanium.UI.createTextArea({
    top:65,
    right:padding,
    zIndex:20,
    height:30,
    width:(boxWidth*3)+(padding*2)-30,
    value:"Enter restaurant, foods, etc.",
    color:"#aaa"
});
searchBar.addEventListener('focus', function(){
	if(searchBar.color == "#aaa"){
		searchBar.color = '#000';
		searchBar.value = "";	
	}
});
searchBarButton = Ti.UI.createButton({
	width:40,
	height:40,
	left:padding-10,
	top:60,
	backgroundColor:orangeColor
});


Ti.include("dollarRange.js");

Ti.include("categoryButtons.js");

searchTitle.add(searchBack);
search_view.add(searchTitle);
search_view.add(searchBarButton);
search_view.add(searchBar);
search_view.add(searchButton);

MainWindow.add(search_view);
