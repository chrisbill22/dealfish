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
	    className: 'row',
	    objName: 'row',
	    touchEnabled: true,
	    height: 100
	  });
	  var label = Ti.UI.createLabel({
	    backgroundColor:'#313F48',
	    color: '#576996',
	    objName: 'label',
	    text: currentLocations[i][1],
	    touchEnabled: false,
	    left: 70,
	    width: 200
	  });
	  row.add(label);
	  
	  //Push the row to the end of the array here
	  locArray.push(row);
	}
	
	//set listview.data here
	listview.data = locArray;
}
