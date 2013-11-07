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

var oneDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 20, 
	top: 110, 
	title: '$', 
	backgroundColor: "#FFF",
	color:orangeColor
});
oneDollar.addEventListener('click', function(){
	var amount = "one";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		oneDollar.backgroundColor = orangeColor;
		oneDollar.color = '#fff';
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		oneDollar.backgroundColor = '#FFF';
		oneDollar.color = orangeColor;
	}
	
});
var twoDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 90, 
	top: 110, 
	title: '$$', 
	backgroundColor: "#FFF",
	color:orangeColor
});
twoDollar.addEventListener('click', function(){
	var amount = "two";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		twoDollar.backgroundColor = orangeColor;
		twoDollar.color = '#fff';
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		twoDollar.backgroundColor = '#FFF';
		twoDollar.color = orangeColor;
	}
	
});
var threeDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 160, 
	top: 110, 
	title: '$$$', 
	backgroundColor: "#FFF",
	color:orangeColor
});
threeDollar.addEventListener('click', function(){
	var amount = "three";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		threeDollar.backgroundColor = orangeColor;
		threeDollar.color = '#fff';
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		threeDollar.backgroundColor = '#FFF';
		threeDollar.color = orangeColor;
	}
	
});
var fourDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 230, 
	top: 110, 
	title: '$$$$', 
	backgroundColor: "#FFF",
	color:orangeColor
});
fourDollar.addEventListener('click', function(){
	var amount = "four";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		fourDollar.backgroundColor = orangeColor;
		fourDollar.color = '#fff';
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		fourDollar.backgroundColor = '#FFF';
		fourDollar.color = orangeColor;
	}
	
});
var padding = 20;
var boxWidth = 80;
var boxHeight = 80;
var tempLeft = 20;
var tempTop = 165;


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

for(var i = 0; i != categories.length; i++){
	var searchBox = Titanium.UI.createButton({
		width: boxWidth,
		height: boxHeight, 
		backgroundColor: '#fff', 
		backgroundImage: 'images/categories/'+categories[i]+'.png', 
		left: tempLeft, 
		top: tempTop, 
		categoryName: categories[i],
	});
	tempLeft = tempLeft + boxWidth + padding;
	if(tempLeft >= 280){
		tempTop = tempTop + boxHeight + padding; 
		tempLeft = padding;
	}
	
	var searchObjID = searchButtonObjects.length;
	searchButtonObjects.push(searchBox);
	
	searchButtonObjects[searchObjID].addEventListener('click', function(e){
		var categoryName = e.source.categoryName;
		if(searchCategories.indexOf(categoryName) == -1){
			e.source.backgroundColor = orangeColor;
			searchCategories.push(categoryName);
		}else{
			e.source.backgroundColor = '#fff';
			searchCategories.splice(searchCategories.indexOf(categoryName), 1);
		}
	});
	
	search_view.add(searchButtonObjects[searchObjID]);
}

searchTitle.add(searchBack);
search_view.add(searchTitle);
search_view.add(searchBarButton);
search_view.add(searchBar);
//search_view.add(search_table_view);
search_view.add(searchButton);
search_view.add(oneDollar, twoDollar, threeDollar, fourDollar);
/*
search_view.add(twoDollar);
search_view.add(threeDollar);
search_view.add(fourDollar);
*/
MainWindow.add(search_view);
