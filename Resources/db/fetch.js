Ti.include("db.js");


function fetchLocations(){
	fetchingLocations = true;
	var testRequest = createDbRequest();
	testRequest.onload = function(e){
		var requestReturn = eval(this.responseText);
		if(requestReturn.length > 0){
			Ti.API.warn("Set "+requestReturn.length+" locations");
			//alert("Description: "+requestReturn[0][0]+"\nCompany Name:"+requestReturn[0][1]+"\nMerchant ID:"+requestReturn[0][2]);
			//This little loop calculates the distance between the place and current location.
			for(i=0; i!=requestReturn.length; i++){
				requestReturn[i][6] = getDistanceBetween(currentLong, currentLat, requestReturn[i][3], requestReturn[i][4]);
				Ti.API.info("DISTANCE = "+requestReturn[i][6]);
			}
			currentLocations = requestReturn;
		}else{
			alert("No deals in your area");
		}
		fetchingLocations = false;
	};
	
	if(currentLat == -9999 || currentLong == -9999){
		Ti.API.warn("Current Lat or Current Long have not been set yet. Cannot fetch locations without finding location first.");
		fetchingLocations = false;
	}else{
		
		var currentDate = new Date();
		var weekday=new Array(7);
		weekday[0]="sunday";
		weekday[1]="monday";
		weekday[2]="tuesday";
		weekday[3]="wednesday";
		weekday[4]="thursday";
		weekday[5]="friday";
		weekday[6]="saturday";
		
		addPostVariable("current_long", currentLong);
		addPostVariable("current_lat", currentLat);
		addPostVariable("delta_long", 1);
		addPostVariable("delta_lat", 1);
		Ti.API.log("Sending Time = "+(Math.round(new Date().getTime() / 1000))-14400);
		addPostVariable("currentTime",(Math.round(new Date().getTime() / 1000)) - 14400);
		
		//alert(weekday[currentDate.getDay()]);
		addPostVariable("dayOfWeek", weekday[currentDate.getDay()]);
		
		sendDbRequest("http://dealfish.genyapps.com/app/getDeals.php", testRequest);
		Ti.API.warn("Request sent");
	}
}

function checkLocationsNeedFetched(){
	if(currentLocations.length == 0){
		Ti.API.warn("Current Locations is empty. Waiting for data...");
		return true;
	}else if(debug == true){
		Ti.API.warn("DEBUG IS ON. Refresh current locations from DB. Waiting for data...");
		return true;
	}else{
		return false;
	}
}

function checkLocationsFetched(){
	setTimeout(function(){
		if(fetchingLocations == true){
			checkLocationsFetched();
			Ti.API.warn("Current Locations is empty. Waiting for data...");
		}else{
			Ti.API.warn("...done");
			if(currentLocations.length != 0){
				Ti.App.fireEvent('locationFetched');
			}
		}
	}, 300);
}