var companyIndex = -1;
var favoritesIndex = -1;
var favoritesPopupView = Ti.UI.createView({
	width:'100%',
	height:'100%',
	backgroundColor:'#fff',
	opacity:1,
	top:screen_height,
	zIndex:30
});
var favoritesPopupTitle = Ti.UI.createLabel({
	text:"Loading...",
	top:20,
	width:'90%',
	color:'#333'
});
var favoritesPopupCloseBt = Ti.UI.createButton({
	title:"Close",
	width:'100%',
	height:'10%',
	backgroundColor:'#AAA',
	bottom:0,
});
var favoritesPopupList = Ti.UI.createTableView({
	width:'100%',
	top:60,
	height:'70%'
});
var favoritesPopupAddListRow = Ti.UI.createTableViewRow({
	title:"Add New List",
	backgroundColor:"#000",
	color:'#fff'
});

favoritesPopupView.add(favoritesPopupTitle);
favoritesPopupView.add(favoritesPopupList);
favoritesPopupView.add(favoritesPopupCloseBt);
MainWindow.add(favoritesPopupView);	

function openFavoritesPopup(index){
	companyIndex = index;
	var companyName = currentLocations[index][1];
	var companyID = currentLocations[index][2];
	favoritesPopupTitle.text = "Add "+companyName+" to a List";
	populateFavoritePopupList(companyID);
	favoritesPopupView.animate({
		top:0,
		duration:500
	});
}

function closeFavoritesPopup(){
	favoritesPopupView.animate({
		top:screen_height,
		duration:500
	});
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
		openFavoritesNamePopup();
	}else{
		if(e.rowData.favorited == false){
			favoriteCompany(e.index-1, companyIndex);
		}else{
			unfavoriteCompany(e.index-1, companyIndex);
		}
		populateFavoritePopupList(currentLocations[companyIndex][2]);
	}
});

favoritesPopupCloseBt.addEventListener('click', function(){
	closeFavoritesPopup();
	closeQuickActionView();
});




var favoritesPopupNameView = Ti.UI.createView({
	width:'100%',
	height:'100%',
	backgroundColor:'black',
	opacity:0,
	top:0,
	left:0,
	zIndex:31
});
var favoritesPopupName_textbox = Ti.UI.createTextArea({
	width:'80%',
	top: 170,
	returnKeyType:Titanium.UI.RETURNKEY_DONE
});
var favoritesPopupName_label = Ti.UI.createLabel({
	text:"Enter the new list name:",
	font:{fontSize:12},
	top:150,
	left:'10%',
	color:"#fff"
});

favoritesPopupNameView.add(favoritesPopupName_textbox);
favoritesPopupNameView.add(favoritesPopupName_label);

function openFavoritesNamePopup(){
	MainWindow.add(favoritesPopupNameView);
	favoritesPopupName_textbox.focus();
	favoritesPopupNameView.animate({
		opacity:0.8,
		duration:500
	});
}
function closeFavoritesNamePopup(){
	favoritesPopupName_textbox.blur();
	favoritesPopupNameView.animate({
		opacity:0,
		duration:500
	}, function(){
		MainWindow.remove(favoritesPopupNameView);
	});
}

favoritesPopupName_textbox.addEventListener('return', function()
{
	if(favoritesPopupName_textbox.value != ""){
		createNewCompanyList(favoritesPopupName_textbox.value);
	}
	populateFavoritePopupList();
	closeFavoritesNamePopup();
	favoritesPopupName_textbox.value = "";
});