function fetchCompany() {
	//Copy the setPins functionality in setPins.js and replace dropPins with setList
	if(checkLocationsNeedFetched()){
		fetchLocations();
		checkLocationsFetched();
		Ti.App.addEventListener('locationFetched', setCompany);
	}else{
		setCompany();
		alert("Set Company working");
	}
}

//Actually set the list.
function setCompany(){
	//Row array actually contains the table view rows
	var rowArray = [];
	//Data array will be used to find duplicate deals in the global deals array and combine them
	var dataArray = [];
	/* [
	0 = merchant ID
	1 = [
		0 = deal description,
		1 = company name,
		2 = merchant ID,
		3 = longitude,
		4 = latitude,
		5 = flash deal,
		6 = distance from current location (default -1, calculated in-app),
		7 = start date,
		8 = end date
		]
	2 = ["]
	] */
	//Convert from global deals array to dataArray
	for (var i = 0; i != currentLocations.length; i++){
		var duplicateMerchant = false;
		for(var z = 0; z != dataArray.length; z++){
			Ti.API.log("Check");
			if(dataArray[z][0] == currentLocations[i][2]){
				Ti.API.log("Duplicate z="+z+" Deal Name="+currentLocations[i][0]);
				//If there is a duplicate merchant ID add it onto the existing one
				dataArray[z].push(currentLocations[i]);
				duplicateMerchant = true;
			}
		}
		//If this is a new merchant ID add it onto the back
		if(duplicateMerchant == false){
			Ti.API.log("New Merchant. Z="+dataArray.length);
			dataArray.push([currentLocations[i][2], currentLocations[i]]);
		}
		//First comapany, second deal they are offering, description of deal
		//alert(dataArray[0][2][0]);
	}
	
	
	for (var i = 0; i != dataArray.length; i++){
		var title = Ti.UI.createView({
			height: 80,
			dealID:i, 
			zIndex: 22
		});
		alert("Start Date: "+currentLocations[i][7]+"\nEnd Date: "+currentLocations[i][8]);
		
		title.add(dataArray[i]);
		title.addEventListener('click', function(e){
			alert(e);
		});
		
		//Push the row to the end of the array here
		//rowArray.push(row);
	}
	
	//set listview.data here
	//list_tableview.data = rowArray;
	alert("Set company went through");
}