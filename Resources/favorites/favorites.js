Ti.include("favoritesPopupNewList.js");
Ti.include("favoritesPopup.js");
Ti.include("ui.js");
Ti.include("options.js");

function createNewCompanyList(name){
	//LOCAL ONLY
	favorites.push([name]);	
	Ti.App.Properties.setList("favorites", favorites);
}

/* [
0 = listName
1 = [
	0 = company name
	1 = merchant ID
	2 = long
	3 = lat
	4 = distance from current location (default -1, calculated in-app)
	5 = Subscribed to push
	]
] */
function favoriteCompany(favoriteIndex, companyIndex, altArray){
	var tempLocations = [];
	if(altArray.length != 0){
		tempLocations = altArray;
	}else{
		tempLocations = currentLocations;
	}
	compName = tempLocations[companyIndex][1];
	compID = tempLocations[companyIndex][2];
	longitude = tempLocations[companyIndex][3];
	latitude = tempLocations[companyIndex][4];;
	distanceFrom = tempLocations[companyIndex][6];
	favorites[favoriteIndex].push([compName, compID, longitude, latitude, distanceFrom]);
	Ti.App.Properties.setList("favorites", favorites);
}

function unfavoriteCompany(favoriteIndex, companyIndex, altArray){
	var tempLocations = [];
	if(altArray.length != 0){
		tempLocations = altArray;
	}else{
		tempLocations = currentLocations;
	}
	compID = tempLocations[companyIndex][2];
	for(var i = 1; i <= favorites[favoriteIndex].length-1; i++){
		if(favorites[favoriteIndex][i][1] == compID){
			favorites[favoriteIndex].splice(i, 1);
		}
	}
	Ti.App.Properties.setList("favorites", favorites);
}
function enablePushCompany(companyID, switchSource, loadingSource, i, x){
	if(hasAccount(companyID, true, true, switchSource, loadingSource, i, x)){
		//enablePushCompany_db(companyID, switchSource, loadingSource, i, x);
		loginUser(companyID, true, true, switchSource, loadingSource, i, x);
	}
}


function disablePushCompany(companyID, switchSource, loadingSource, i, x){
	if(hasAccount(companyID, false, true, switchSource, loadingSource, i, x)){
		//disablePushCompany_db(companyID, switchSource, loadingSource, i, x);
		loginUser(companyID, false, true, switchSource, loadingSource, i, x);
	}
}


favorites_newListButton.addEventListener('click', function(){
	openFavoritesNamePopup();
});

var favoriteObjects = [];

function clearFavoriteList(){
	for(var i=0; i!=favorites.length; i++){
		var id = i;
		favorites_innerView.remove(favoriteObjects[id][2]);
		favorites_innerView.remove(favoriteObjects[id][1]);
		favorites_innerView.remove(favoriteObjects[id][0]);
	}
}

function populateFavoriteList(){
	if(favoriteObjects.length > 0){
		//clearFavoriteList();
	}
	favoriteObjects = [];
	var zIndexTracker = (favorites.length*2)+1;
	//Starts at 20 down, 50 for height of add list button, 20 for padding between
	var tempTop = 20;
	var headerHeight = 50;
	var rowHeight = 40;
	var paddingBetween = 10;
	
	favorites_newListButton.zIndex = zIndexTracker;
	for(var i=0; i!=favorites.length; i++){
		zIndexTracker -= 1;
		
		tempTop += headerHeight+paddingBetween;
		
		var tempTitleButton = Ti.UI.createButton({
			width:'90%',
			height:headerHeight,
			title:favorites[i][0],
			listID:favoriteObjects.length,
			backgroundColor:orangeColor,
			top:tempTop,
			zIndex:zIndexTracker,
			style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
			color:whiteColor,
			textAlign:'left',
			font:{fontSize:20}
		});
		var tempFavCount = Ti.UI.createLabel({
			right:0,
			color:whiteColor,
			height:'100%',
			width:30,
			text:favorites[i].length-1,
			font:tempTitleButton.font,
			opacity:1
		});
		var tempArrowUp = Ti.UI.createView({
			width:47/2,
			height:30/2,
			backgroundImage:'images/arrowUpTrue.png',
			right:13,
			opacity:0
		});
		
		tempTitleButton.add(tempArrowUp);
		tempTitleButton.add(tempFavCount);
		
		zIndexTracker -= 1;
		
		var tempCover = Ti.UI.createView({
			width:'90%',
			height:tempTop,
			top:0,
			zIndex:zIndexTracker,
			backgroundColor:favoritesBGColor
		});
		
		var tempRestaurants = Ti.UI.createTableView({
			data:[],
			backgroundColor:whiteColor,
			width:'90%',
			bottom:favorites_innerView.height-(tempTop+headerHeight),
			zIndex:zIndexTracker,
			rowHeight:rowHeight,
			height:(favorites[i].length-1)*rowHeight
		});
		var tempRestaurants_rows = [];
		if(favorites[i].length > 1){
			for(var x=1; x!=favorites[i].length; x++){
				Ti.API.info("Adding Row "+favorites[i][x][0]);
				var tempRow = Ti.UI.createTableViewRow({
					title:favorites[i][x][0],
					height:rowHeight,
					companyID:favorites[i][x][1],
					color:blackColor,
					backgroundSelectedColor:'#fff',
					selectedBackgroundColor:orangeColor,
					font:{fontSize:14, fontWeight:'normal'}
				});
				
				
				tempRow.addEventListener('click', function(e){
					if(e.source == "[object TiUITableViewRow]"){
						openCompany(getFirstInstanceOfCompanyID(e.source.companyID));
					}
				});
				
				var tempLoading = Ti.UI.createActivityIndicator({
				    style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
				    color: whiteColor,
				    right:15,
				    height:40,
				    width:40
				});
				var tempOnOff = Ti.UI.createButton({right:15, height:49/2, width:52/2, compID:favorites[i][x][1], indexI:i, indexX:x, loadingObj:tempLoading});
				if(pushNotifications.indexOf(favorites[i][x][1]) != -1){
					tempOnOff.backgroundImage = 'images/bellActive.png';
				}else{
					tempOnOff.backgroundImage = 'images/bellInactive.png';
				}
				tempRow.add(tempOnOff);
				tempRow.add(tempLoading);
				tempOnOff.addEventListener('click', function(e){
					e.source.hide();
					e.source.loadingObj.show();
					if(e.source.backgroundImage == 'images/bellInactive.png'){
						enablePushCompany(e.source.compID, e.source, e.source.loadingObj, e.source.indexI, e.source.indexX);
					}else if(e.source.backgroundImage == 'images/bellActive.png'){
						disablePushCompany(e.source.compID, e.source, e.source.loadingObj, e.source.indexI, e.source.indexX);
					}else{
						alert("Program Error. Incorrect image key");
					}
				});
				
				tempRestaurants_rows.push(tempRow);
			}
		}else{
			tempRestaurants_rows.push(Ti.UI.createTableViewRow({
				height:rowHeight,
				color:grey,
				title:"No Items"
			}));
		}
		tempRestaurants.data = tempRestaurants_rows;
		favoriteObjects.push([tempTitleButton, tempCover, tempRestaurants, false]);
		
		var id = favoriteObjects.length-1;
		
		favoriteObjects[id][0].addEventListener('click', function(e){
			if(longpressTracker == false){
				
				var id = e.source.listID;
				var companyCount = favorites[id].length-1;
				var moveAmount = companyCount*rowHeight;
				//alert("List: "+favoriteObjects[id]);
				
				if(favoriteObjects[id][3]){
					e.source.children[0].animate({opacity:0});
					e.source.children[1].animate({opacity:1});
					favoriteObjects[id][2].animate({bottom:favoriteObjects[id][2].bottom+(moveAmount)}, function(){
						favoriteObjects[id][2].bottom = favoriteObjects[id][2].bottom+(moveAmount);
						//We do this because the animation doesn't actually set the value.
						for(z=id+1; z!=favoriteObjects.length; z++){
							favoriteObjects[z][0].top = favoriteObjects[z][0].top-(moveAmount);
							favoriteObjects[z][1].top = favoriteObjects[z][1].top-(moveAmount);
							favoriteObjects[z][2].bottom = favoriteObjects[z][2].bottom+(moveAmount);
						}
					});
					favoriteObjects[id][3] = false;
					for(z=id+1; z!=favoriteObjects.length; z++){
						favoriteObjects[z][0].animate({top:favoriteObjects[z][0].top-(moveAmount)});
						favoriteObjects[z][1].animate({top:favoriteObjects[z][1].top-(moveAmount)});
						favoriteObjects[z][2].animate({bottom:favoriteObjects[z][2].bottom+(moveAmount)});
					}
				}else{
					e.source.children[0].animate({opacity:1});
					e.source.children[1].animate({opacity:0});
					favoriteObjects[id][2].animate({bottom:favoriteObjects[id][2].bottom-(moveAmount)}, function(){
						favoriteObjects[id][2].bottom = favoriteObjects[id][2].bottom-(moveAmount);
						//We do this because the animation doesn't actually set the value.
						for(z=id+1; z!=favoriteObjects.length; z++){
							favoriteObjects[z][0].top = favoriteObjects[z][0].top+(moveAmount);
							favoriteObjects[z][1].top = favoriteObjects[z][1].top+(moveAmount);
							favoriteObjects[z][2].bottom = favoriteObjects[z][2].bottom-(moveAmount);
						}
					});
					favoriteObjects[id][3] = true;
					for(z=id+1; z!=favoriteObjects.length; z++){
						favoriteObjects[z][0].animate({top:favoriteObjects[z][0].top+(moveAmount)});
						favoriteObjects[z][1].animate({top:favoriteObjects[z][1].top+(moveAmount)});
						favoriteObjects[z][2].animate({bottom:favoriteObjects[z][2].bottom-(moveAmount)});
					}
				}
			}else{
				longpressTracker = false;
			}
		});

		favoriteObjects[id][0].addEventListener('longpress', function(e){
			var id = e.source.listID;
			longpressTracker = true;
			openListOptions(id);
		});
		
		favorites_innerView.add(favoriteObjects[id][2]);
		favorites_innerView.add(favoriteObjects[id][1]);
		favorites_innerView.add(favoriteObjects[id][0]);
	}
}
populateFavoriteList();
