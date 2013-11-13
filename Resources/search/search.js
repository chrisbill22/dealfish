var searchString = "";
var searchCategories = [];
var searchButtonObjects = [];
var priceRanges = [];

Ti.include("ui.js");
Ti.include("searchResults.js");

searchBack.addEventListener('click', function(){
	searchBar.blur();
	searchBack();
});

searchButton.addEventListener('click', function(){
	sendSearch();
});

searchBarButton.addEventListener('click', function(){
	sendSearch();
});

function returnPriceKey(price){
	if(price == "one"){
		return 1;
	}else if(price == "two"){
		return 2;
	}else if(price == "three"){
		return 3;
	}else if(price == "four"){
		return 4;
	}
}

function sendSearch(){
	searchBar.blur();
	start_loading();
	searchResultsView.animate({left:0});
	var searchRequest = createDbRequest();
	addPostVariable("auth", "a1i4d5jf#8");
	addPostVariable("current_long", currentLong);
	addPostVariable("current_lat", currentLat);
	addPostVariable("distance", 1);
	addPostVariable("currentTime",(Math.round(new Date().getTime() / 1000)) - 14400);
	
	if(searchBar.color != "#aaa"){
		addPostVariable("searchString", searchBar.value);
	}else{
		addPostVariable("searchString", "");
	}
	
	var categoriesString = "";
	for(var i=0; i!=searchCategories.length; i++){
		categoriesString += "'"+searchCategories[i]+"'";
		if(i != searchCategories.length-1){
			categoriesString += ",";
		}
	}
	addPostVariable("categories", categoriesString);
	
	var pricesString = "";
	for(var i=0; i!=priceRanges.length; i++){
		pricesString += "'"+returnPriceKey(priceRanges[i])+"'";
		if(i != priceRanges.length-1){
			pricesString += ",";
		}
	}
	addPostVariable("prices", pricesString);
	
	searchRequest.onload = function(e){
		try{
			var requestReturn = eval(this.responseText);
		}catch(e){
			alert("Could not process response: \n"+this.responseText);
			var requestReturn = [];
		}
		if(requestReturn.length > 0){
			Ti.API.warn("Returned "+requestReturn.length+" search results");
			for(i=0; i!=requestReturn.length; i++){
				requestReturn[i][6] = getDistanceBetween(currentLong, currentLat, requestReturn[i][3], requestReturn[i][4]);
				Ti.API.info("DISTANCE = "+requestReturn[i][6]);
			}
			searchLocationResults = requestReturn;
			searchResultsList.data = setSearchedList(requestReturn);
		}else{
			searchResultsList.data = [{title: "No Results Found"}];
			alert("No Results Found");
		}
		stop_loading();
	};
	
	sendDbRequest("http://dealfish.genyapps.com/app/search.php", searchRequest);
}


