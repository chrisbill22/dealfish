var searchString = "";
var searchCategories = [];
var searchButtonObjects = [];
var priceRanges = [];

Ti.include("ui.js");
Ti.include("searchResults.js");

searchBack.addEventListener('click', function(){
	searchBack();
});

searchButton.addEventListener('click', function(){
	sendSearch();
});

searchBarButton.addEventListener('click', function(){
	sendSearch();
});

function sendSearch(){
	searchResultsView.animate({left:0});
	/*var searchRequest = createDbRequest();
	addPostVariable("auth", "a1i4d5jf#8");
	addPostVariable("current_long", currentLong);
	addPostVariable("current_lat", currentLat);
	addPostVariable("distance", 1);
	
	if(searchBar.color == ""){
		addPostVariable("searchString", searchBar.value);
	}else{
		addPostVariable("searchString", "#aaa");
	}
	
	var categoriesString = "";
	for(var i=0; i!=searchCategories.length; i++){
		categoriesString += "'"+searchCategories[i]+"'";
		if(i == searchCategories.length-1){
			categoriesString +",";
		}
	}
	addPostVariable("categories", searchRequest);
	
	var pricesString = "";
	for(var i=0; i!=priceRanges.length; i++){
		pricesString += "'"+priceRanges[i]+"'";
		if(i == priceRanges.length-1){
			pricesString +",";
		}
	}
	addPostVariable("categories", pricesString);
	
	searchRequest.onload = function(e){
		var requestReturn = eval(this.responseText);
		if(requestReturn.length > 0){
			Ti.API.warn("Returned "+requestReturn.length+" search results");
			for(i=0; i!=requestReturn.length; i++){
				requestReturn[i][6] = getDistanceBetween(currentLong, currentLat, requestReturn[i][3], requestReturn[i][4]);
				Ti.API.info("DISTANCE = "+requestReturn[i][6]);
			}
			searchLocationResults = requestReturn;
		}else{
			alert("No Results Found");
		}
	};
	
	sendDbRequest("http://dealfish.genyapps.com/app/search.php", searchRequest);*/
}


