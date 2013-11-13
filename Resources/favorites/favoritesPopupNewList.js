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
	color:whiteColor
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
	clearFavoriteList();
	if(favoritesPopupName_textbox.value != ""){
		createNewCompanyList(favoritesPopupName_textbox.value);
	}
	populateFavoriteList();
	populateFavoritePopupList();
	closeFavoritesNamePopup();
	favoritesPopupName_textbox.value = "";
});