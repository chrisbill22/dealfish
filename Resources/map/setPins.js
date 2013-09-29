function setPins(){
	if(currentLocations.length == 0){
		Ti.API.warn("Current Locations is empty. Waiting for data...");
		fetchLocations();
		checkLocationsEmpty();
	}else{
		var allTempAnnotations = [];
		for(i=0; i!=currentLocations.length; i++){
			Ti.API.info("Setting New Pin at "+currentLocations[i][4]+", "+currentLocations[i][3]);
			var tempAnnotation = Titanium.Map.createAnnotation ({
				latitude: currentLocations[i][4],
				longitude: currentLocations[i][3],
				title: currentLocations[i][1],
				subtitle: currentLocations[i][0], 
				pincolor: Titanium.Map.ANNOTATION_GREEN,
				animate: true,
				myid: i
			});
			allTempAnnotations.push(tempAnnotation);
		}
		
		mapview.annotations = allTempAnnotations;
	}
}

function checkLocationsEmpty(){
	setTimeout(function(){
		if(fetchingLocations == true){
			checkLocationsEmpty();
			Ti.API.warn("Current Locations is empty. Waiting for data...");
		}else{
			Ti.API.warn("...done");
			if(currentLocations.length != 0){
				setPins();
			}
		}
	}, 300);
}