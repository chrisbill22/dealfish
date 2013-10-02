function fetchList() {
	var list = new Array();
	var locations = fetchLocations();
	for (var i = 0; i < locations.length; i++){
		list[i] = location[i];	
	}
}
