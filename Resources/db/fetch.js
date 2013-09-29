Ti.include("db.js");


function fetchLocations(){
	fetchingLocations = true;
	var testRequest = createDbRequest();
	
	testRequest.onload = function(e){
		var requestReturn = eval(this.responseText);
		if(requestReturn.length > 0){
			Ti.API.warn("Set "+requestReturn.length+" locations");
			//alert("Description: "+requestReturn[0][0]+"\nCompany Name:"+requestReturn[0][1]+"\nMerchant ID:"+requestReturn[0][2]);
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
		addPostVariable("current_long", currentLong);
		addPostVariable("current_lat", currentLat);
		addPostVariable("delta_long", 1);
		addPostVariable("delta_lat", 1);
		sendDbRequest("http://dealfish.genyapps.com/app/getDeals.php", testRequest);
		Ti.API.warn("Request sent");
	}
}
