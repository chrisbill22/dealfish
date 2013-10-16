//Pull the database if it is needed.
function fetchList() {
	
	//Copy the setPins functionality in setPins.js and replace dropPins with setList
	
}

//Actually set the list.
function setList(){
	
	//Create an array here
	
	for (var i = 0; i != currentLocations.length; i++){
	  var row = Ti.UI.createTableViewRow({
	    className: 'row',
	    objName: 'row',
	    touchEnabled: true,
	    height: 100
	  });
	  var label = Ti.UI.createLabel({
	    backgroundColor:'#313F48',
	    color: 'white',
	    objName: 'label',
	    text: currentLocations[i][1],
	    touchEnabled: false,
	    left: 0,
	    width: 200
	  });
	  listview.add(row);
	  row.add(label);
	  
	  //Push the row to the end of the array here
	  
	}
	
	//set listview.data here
}
