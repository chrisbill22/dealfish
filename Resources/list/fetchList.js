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
			height: 80,
			dealID:i
		});
		
		row.add(createListItem(currentLocations[i][1], currentLocations[i][0], currentLocations[i][6], ""));
		row.addEventListener('click', function(e){
			alert(e.rowData.dealID);
		});
		
		//Push the row to the end of the array here
		locArray.push(row);
	}
	
	//set listview.data here
	list_tableview.data = locArray;
}
