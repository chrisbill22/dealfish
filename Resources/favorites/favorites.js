Ti.include("favoritesPopupNewList.js");
Ti.include("favoritesPopup.js");
Ti.include("ui.js");
/*favorites_view.addEventListener('swipe', function(e){
	favoritesFront(getSlideDirection("favorites"));
	
	if(e.direction == "right"){
		listFront(getSlideDirection("list"));
	}
	
	if(e.direction == "left"){
		settingsFront(getSlideDirection("settings"));
	}
});*/

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
	]
] */
function favoriteCompany(favoriteIndex, companyIndex){
	compName = currentLocations[companyIndex][1];
	compID = currentLocations[companyIndex][2];
	longitude = currentLocations[companyIndex][3];
	latitude = currentLocations[companyIndex][4];;
	distanceFrom = currentLocations[companyIndex][6];;
	favorites[favoriteIndex].push([compName, compID, longitude, latitude, distanceFrom]);
	Ti.App.Properties.setList("favorites", favorites);
}

function unfavoriteCompany(favoriteIndex, companyIndex){
	compID = currentLocations[companyIndex][2];
	for(var i = 1; i <= favorites[favoriteIndex].length; i++){
		if(favorites[favoriteIndex][i][1] == compID){
			favorites[favoriteIndex].splice(i, 1);
		}
	}
}
function enablePushCompany(companyID, switchSource, loadingSource, i, x){
	if(hasAccount()){
		enablePushCompany_db(companyID, switchSource, loadingSource, i, x);
	}
}
function enablePushCompany_db(compID, switchSource, loadingSource, i, x){
	//compID = currentLocations[companyIndex][2];
	Ti.API.info("Enabling Push Notification...");
	var favoriteRequest = createDbRequest();
	addPostVariable("auth", "jdEkdvV#@dQ-Ql");
	addPostVariable("action", "add");
	addPostVariable("compID", compID);
	addPostVariable("phoneID", deviceID);
	sendDbRequest("http://dealfish.genyapps.com/app/favorites.php", favoriteRequest);
	favoriteRequest.onload = function(e){
		if(this.responseText == "true"){
			loginUser(compID, true);
			favorites[i][x][5] = true;
			Ti.App.Properties.setList("favorites", favorites);
			Ti.API.info("enable switch");
			switchSource.backgroundColor = "#0A0";
			switchSource.show();
			loadingSource.hide();
		}else{
			alert("Request could not be completed: "+this.responseText);
			switchSource.backgroundColor = "#DDD";
			switchSource.show();
			loadingSource.hide();
			//alert("error\n"+this.responseText);
		}
	};
	favoriteRequest.onerror = function(e){
		switchSource.backgroundColor = "#DDD";
		switchSource.show();
		loadingSource.hide();
		alert(e.error);
		fetchingLocations = false;
		Ti.API.error(e.error);
	};
}

function disablePushCompany(companyID, switchSource, loadingSource, i, x){
	if(hasAccount()){
		disablePushCompany_db(companyID, switchSource, loadingSource, i, x);
	}
}
function disablePushCompany_db(compID, switchSource, loadingSource, i, x){
	//compID = currentLocations[companyIndex][2];
	Ti.API.info("Disabling Push Notification...");
	var favoriteRequest = createDbRequest();
	addPostVariable("auth", "jdEkdvV#@dQ-Ql");
	addPostVariable("action", "remove");
	addPostVariable("compID", compID);
	addPostVariable("phoneID", deviceID);
	sendDbRequest("http://dealfish.genyapps.com/app/favorites.php", favoriteRequest);
	favoriteRequest.onload = function(e){
		if(this.responseText == "true"){
			registerPushNotifications(compID, false);
			favorites[i][x][5] = false;
			Ti.App.Properties.setList("favorites", favorites);
			Ti.API.info("disable switch");
			switchSource.backgroundColor = "#DDD";
			switchSource.show();
			loadingSource.hide();
		}else{
			alert("Request could not be completed: "+this.responseText);
			switchSource.backgroundColor = "#0A0";
			switchSource.show();
			loadingSource.hide();
			//alert("error\n"+this.responseText);
		}
	};
	favoriteRequest.onerror = function(e){
		switchSource.backgroundColor = "#0A0";
		switchSource.show();
		loadingSource.hide();
		alert(e.error);
		fetchingLocations = false;
		Ti.API.error(e.error);
	};
}

/*
function populateFavoriteList(){
	var tempRows = [];
	tempRows[0] = favoritesPopupAddListRow;
	for(var i=0; i!=favorites.length; i++){
		for(var x=0; x!=favorites[i].length; x++){
			if(x == 0){
				var tempRow = Ti.UI.createTableViewRow({
					title:favorites[i][0],
					backgroundColor:'#666',
					color:'#fff'
				});
			}else{
				var tempRow = Ti.UI.createTableViewRow({
					title:favorites[i][x][0],
					height:50,
					companyID:favorites[i][x][1]
				});
				var tempLoading = Ti.UI.createActivityIndicator({
				    style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
				    color: '#FFF',
				    right:15,
				    height:40,
				    width:40
				});
				var tempOnOff = Ti.UI.createButton({right:0, backgroundColor:'#DDD', height:'100%', width:50, compID:favorites[i][x][1], indexI:i, indexX:x, loadingObj:tempLoading});
				if(favorites[i][x][5] == true){
					tempOnOff.backgroundColor = '#0A0';
				}
				tempRow.add(tempOnOff);
				tempRow.add(tempLoading);
				tempOnOff.addEventListener('click', function(e){
					e.source.hide();
					e.source.loadingObj.show();
					if(e.source.backgroundColor == '#DDD'){
						enablePushCompany(e.source.compID, e.source, e.source.loadingObj, e.source.indexI, e.source.indexX);
					}else{
						disablePushCompany(e.source.compID, e.source, e.source.loadingObj, e.source.indexI, e.source.indexX);
					}
				});
			}
			tempRows.push(tempRow);
		}
	}
	favorites_tableview.data = tempRows;
}
populateFavoriteList();


favorites_tableview.addEventListener('click', function(e){
	if(e.index == 0){
		openFavoritesNamePopup();
	}else{
		openCompany(getFirstInstanceOfCompanyID(e.rowData.companyID));
	}
});
*/


favorites_newListButton.addEventListener('click', function(){
	openFavoritesNamePopup();
});

var favoriteObjects = [];

function populateFavoriteList(){
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
			backgroundColor:iOSBlue,
			top:tempTop,
			color:'#fff',
			zIndex:zIndexTracker
		});
		
		zIndexTracker -= 1;
		
		var tempCover = Ti.UI.createView({
			width:'90%',
			height:tempTop,
			top:0,
			zIndex:zIndexTracker,
			backgroundColor:'#fff'
		});
		
		var tempRestaurants = Ti.UI.createTableView({
			data:[],
			backgroundColor:'#FFF',
			width:'90%',
			bottom:favorites_innerView.height-(tempTop+headerHeight),
			zIndex:zIndexTracker,
			rowHeight:rowHeight,
			height:(favorites[i].length-1)*rowHeight
		});
		
		var tempRestaurants_rows = [];
		for(var x=1; x!=favorites[i].length; x++){
			Ti.API.info("Adding Row "+favorites[i][x][0]);
			var tempRow = Ti.UI.createTableViewRow({
				title:favorites[i][x][0],
				height:rowHeight,
				companyID:favorites[i][x][1],
				color:'#000'
			});
			
			var tempLoading = Ti.UI.createActivityIndicator({
			    style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
			    color: '#FFF',
			    right:15,
			    height:40,
			    width:40
			});
			var tempOnOff = Ti.UI.createButton({right:0, backgroundColor:'#DDD', height:'100%', width:50, compID:favorites[i][x][1], indexI:i, indexX:x, loadingObj:tempLoading});
			if(favorites[i][x][5] == true){
				tempOnOff.backgroundColor = '#0A0';
			}
			tempRow.add(tempOnOff);
			tempRow.add(tempLoading);
			tempOnOff.addEventListener('click', function(e){
				e.source.hide();
				e.source.loadingObj.show();
				if(e.source.backgroundColor == '#DDD'){
					enablePushCompany(e.source.compID, e.source, e.source.loadingObj, e.source.indexI, e.source.indexX);
				}else{
					disablePushCompany(e.source.compID, e.source, e.source.loadingObj, e.source.indexI, e.source.indexX);
				}
			});
			
			tempRestaurants_rows.push(tempRow);
		}
		tempRestaurants.data = tempRestaurants_rows;
		favoriteObjects.push([tempTitleButton, tempCover, tempRestaurants, false]);
		
		var id = favoriteObjects.length-1;
		
		favoriteObjects[id][0].addEventListener('click', function(e){
			var id = e.source.listID;
			var companyCount = favorites[id].length-1;
			var moveAmount = companyCount*rowHeight;
			//alert("List: "+favoriteObjects[id]);
			
			if(favoriteObjects[id][3]){
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
		});
		
		favorites_innerView.add(favoriteObjects[id][2]);
		favorites_innerView.add(favoriteObjects[id][1]);
		favorites_innerView.add(favoriteObjects[id][0]);
	}
}
populateFavoriteList();
