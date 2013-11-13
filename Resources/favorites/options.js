var favorites_optionsDisable = Ti.UI.createView({
	zIndex:20,
	width:'100%',
	height:'100%',
	backgroundColor:blackColor,
	opacity:0,
});
var favorites_optionsDisable_holder = Ti.UI.createView({
	zIndex:21,
	width:'100%',
	height:'100%',
	opacity:0
});
var favorites_deleteList = Ti.UI.createButton({
	top:150,
	title:'Delete List',
	width:'90%',
	height:50,
	backgroundColor:'#333',
	color:'#DDD',
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	listID:0
});
var favorites_cancelPopup = Ti.UI.createButton({
	top:270,
	title:'Back',
	width:'90%',
	height:50,
	backgroundColor:'#333',
	color:'#DDD',
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});

favorites_cancelPopup.addEventListener('click', function(){
	closeListOptions();
});

favorites_deleteList.addEventListener('click', function(e){
	var id = e.source.listID;
	var tempPushArray = [];
	for(var i=1; i!=favorites[id].length; i++){
		if(favorites[id][i][5] == true){
			tempPushArray.push(favorites[id][i][1]);
		}
	}
	for(var x=0; x!=favorites.length; x++){
		if(x!=id){
			for(var y=0; y!= favorites[x].length; y++){
				if(tempPushArray.indexOf(favorites[x][y][1]) != -1){
					tempPushArray.splice(tempPushArray.indexOf(favorites[x][y][1]), 1);
				}
			}
		}
	}
	if(tempPushArray.length != 0){
		var alertString = "Before deleting this list, please turn off alerts for the following:\n";
		for(var i=0; i!=tempPushArray.length; i++){
			for(var q=0; q!=favorites[id].length; q++){
				if(favorites[id][q][1] == tempPushArray[i]){
					alertString += favorites[id][q][0];
				}
			}
		}
		alert(alertString);
	}else{
		//Must call clear Favorite List even though populate Favorite list calls it because removing something from favorites that is already displayed will mess with the function
		clearFavoriteList();
		favorites.splice(id, 1);
		Ti.App.Properties.setList("favorites", favorites);
		populateFavoriteList();
		populateFavoritePopupList();
		closeListOptions();
	}
});

function disableFavorites_background(){
	favorites_optionsDisable.animate({opacity:0.9});
	favorites_optionsDisable_holder.animate({opacity:1});
}
function enableFavorites_background(){
	favorites_optionsDisable.animate({opacity:0});
}
function openListOptions(listID){
	favorites_deleteList.listID = listID;
	favorites_optionsDisable_holder.add(favorites_deleteList);
	disableFavorites_background(listID);
}
function closeListOptions(){
	enableFavorites_background();
	favorites_optionsDisable_holder.animate({opacity:0}, function(){
		favorites_optionsDisable_holder.remove(favorites_deleteList);
	});
}

favorites_optionsDisable_holder.add(favorites_cancelPopup);
favorites_view.add(favorites_optionsDisable);
favorites_view.add(favorites_optionsDisable_holder);
