//accountSetup.js
function randNumb(min, max){
	return Math.floor((Math.random()*max)+min);
}
function generateID(){
	var chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","-","+","_","?","~"];
	var UUID = "";

	for(i=0; i!=50; i++){
		UUID += chars[randNumb(0, chars.length-1)];
	}
	
	return UUID;
}

//Starts with an ID and loops through until an avalible ID is found
function getDBID(){
	Ti.API.log("GETTING UUID");
	uuid = generateID();
	Ti.API.log("Checking  "+uuid);
	var checkUUIDrequest = createDbRequest();
	addPostVariable("uuid", uuid);
	sendDbRequest("http://dealfish.genyapps.com/app/checkUUID.php", checkUUIDrequest);
	checkUUIDrequest.onload = function(e){
		var requestReturn = this.responseText;
		if(requestReturn.length > 0 && requestReturn == "false"){
			signup(uuid);
			return uuid;
		}else{
			getDBID();
		}
	};
	
}

function signup(uuid){
	Ti.API.log("SIGNING UP");
	//var DBID = getDBID();
	//alert(uuid);
	var signupRequest = createDbRequest();
	addPostVariable("auth", "AjdD#Djv!@n");
	addPostVariable("uuid", uuid);
	sendDbRequest("http://dealfish.genyapps.com/app/addUser.php", signupRequest);
	signupRequest.onload = function(e){
		if(this.responseText == "true"){
			alert("Account Created Successfully");
			deviceID = uuid;
			Ti.App.Properties.setString("deviceID", uuid);
			disableAccount_background();
		}else{
			alert("error\n"+this.responseText);
		}
	};
}






//Favorites.js

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