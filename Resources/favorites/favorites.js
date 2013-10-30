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
}

function unfavoriteCompany(favoriteIndex, companyIndex){
	compID = currentLocations[companyIndex][2];
	for(var i = 1; i <= favorites[favoriteIndex].length; i++){
		if(favorites[favoriteIndex][i][1] == compID){
			favorites[favoriteIndex].splice(i, 1);
		}
	}
}
function enablePushCompany(companyID){
	if(hasAccount()){
		enablePushCompany_db(companyID);
	}
}
function enablePushCompany_db(compID){
	//compID = currentLocations[companyIndex][2];
	favoriteRequest = createDbRequest();
	addPostVariable("compID", compID);
	addPostVariable("phoneID", deviceID);
	sendDbRequest("", favoriteRequest);
	favoriteRequest.onload = function(e){
		if(e.responseText == "true"){
			alert("Push Enabled");
		}else{
			alert("error\n"+e.responseText);
		}
	};
}
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
					title:favorites[i][x][0]
				});
				var tempOnOff = Ti.UI.createSwitch({right:15, value:false, compID:favorites[i][x][1]});
				tempRow.add(tempOnOff);
				tempOnOff.addEventListener('change', function(e){
					if(hasAccount()){
						enablePushCompany(e.source.compID);
					}
				});
			}
			tempRows.push(tempRow);
		}
	}
	favorites_tableview.data = tempRows;
}
populateFavoriteList();
