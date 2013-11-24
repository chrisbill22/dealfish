var companyIndex = -1;
var favoritesIndex = -1;
var favoriteDataArray = [];

var favoritesPopupView = Ti.UI.createView({
	width:'100%',
	height:'100%',
	backgroundColor:whiteColor,
	opacity:1,
	top:screen_height,
	zIndex:30
});


var favoritesPopupBackBt = Ti.UI.createButton({
	bottom:13,
	left: 0, 
	width: 46,
	height: 66/2, 
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
});
var favoritesPopupBackBt_img = Ti.UI.createImageView({
	image: 'images/arrowLeftTrue.png',
	width: 35/2,
	height: 66/2,
	top:0
});
var favoritesPopupTitle = Ti.UI.createView({
	top:20,
	left:0,
	backgroundImage: 'images/topBarTrue.png',
	height:headerHeight-20+5,
	zIndex:10
});

var favoritesPopupTitle_label = Ti.UI.createLabel({
	text:"Loading...",
	top:20,
	width:'90%',
	color:'#333'
});

var favoritesPopupList = Ti.UI.createTableView({
	width:'100%',
	top:headerHeight,
	height:viewHeight+footerHeight
});
var favoritesPopupAddListRow = Ti.UI.createTableViewRow({
	title:"Add New List",
	backgroundColor:blackColor,
	color:whiteColor
});

favoritesPopupBackBt.add(favoritesPopupBackBt_img);
favoritesPopupTitle.add(favoritesPopupBackBt);
favoritesPopupView.add(favoritesPopupTitle);
favoritesPopupView.add(favoritesPopupList);
MainWindow.add(favoritesPopupView);	

function openFavoritesPopup(index, altArray){
	var tempLocations = [];
	favoriteDataArray = [];
	if(altArray.length != 0){
		favoriteDataArray = altArray;
	}else{
		favoriteDataArray = currentLocations;
	}
	companyIndex = index;
	var companyName = favoriteDataArray[index][1];
	var companyID = favoriteDataArray[index][2];
	favoritesPopupTitle_label.text = "Add "+companyName+" to a List";
	populateFavoritePopupList(companyID);
	favoritesPopupView.animate({
		top:0,
		duration:500
	});
	altArray = [];
}

function closeFavoritesPopup(){
	favoritesPopupView.animate({
		top:screen_height,
		duration:500
	});
	clearFavoriteList();
	populateFavoriteList();
}

function populateFavoritePopupList(companyID){
	var tempRows = [];
	tempRows[0] = favoritesPopupAddListRow;
	for(var i=0; i!=favorites.length; i++){
		var tempRow = Ti.UI.createTableViewRow({
			title:favorites[i][0],
			favorited:false
		});
		for(var x=0; x!=favorites[i].length; x++){
			if(favorites[i][x][1] == companyID){
				tempRow.backgroundColor = "#CCFFB2";
				tempRow.favorited = true;
			}
		}
		tempRows.push(tempRow);
	}
	favoritesPopupList.data = tempRows;
}

favoritesPopupList.addEventListener('click', function(e){
	if(e.index == 0){
		openFavoritesNamePopup(favoriteDataArray[companyIndex][2]);
	}else{
		if(e.rowData.favorited == false){
			favoriteCompany(e.index-1, companyIndex, favoriteDataArray);
		}else{
			unfavoriteCompany(e.index-1, companyIndex, favoriteDataArray);
		}
		populateFavoritePopupList(favoriteDataArray[companyIndex][2]);
	}
});

favoritesPopupBackBt.addEventListener('click', function(){
	closeFavoritesPopup();
	closeQuickActionView();
});



