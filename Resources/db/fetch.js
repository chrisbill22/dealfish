Ti.include("db.js");


function fetchLocations(){
	var testRequest = createDbRequest();
	testRequest.onload(function(e){
		var requestReturn = eval(this.responseText);
		alert("Description: "+requestReturn[0][0]+"\nCompany Name:"+requestReturn[0][1]+"\nMerchant ID:"+requestReturn[0][2]);
	});
	addPostVariable("fetch", "favorites");
	
	addPostVariable("current_long", -86.907948);
	addPostVariable("current_lat", 40.423962);
	addPostVariable("delta_long", 1);
	addPostVariable("delta_lat", 1);
	
	sendDbRequest("http://dealfish.genyapps.com/app/getDeals.php", testRequest);
}
