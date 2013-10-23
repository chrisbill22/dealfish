//Pull the database if it is needed.
function fetchList() {
	//Copy the setPins functionality in setPins.js and replace dropPins with setList
	if(checkLocationsNeedFetched()){
		fetchLocations();
		checkLocationsFetched();
		Ti.App.addEventListener('locationFetched', setList);
	}else{
		setList();
	}
}

//Actually set the list.
function setList(){
	
	//Create an array here
	var locArray = [];
	for (var i = 0; i != currentLocations.length; i++){
		var row = Ti.UI.createTableViewRow({
			height: 80
		});
		/*var label = Ti.UI.createLabel({
			color: iOSBlue,
			text: currentLocations[i][1],
			touchEnabled: false,
			left: 20,
			width: 200
		});
		row.add(label);*/
		
		row.add(createListItem(currentLocations[i][1], currentLocations[i][0], 0.1, ""));
		
		//Push the row to the end of the array here
		locArray.push(row);
	}
	
	//set listview.data here
	list_tableview.data = locArray;
}
