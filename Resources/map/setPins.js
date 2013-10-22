//Pull database
function setPins(){
	if(checkLocationsNeedFetched()){
		fetchLocations();
		checkLocationsFetched();
		Ti.App.addEventListener('locationFetched', dropPins);
	}else{
		dropPins();
	}
}
//Put the actual pins in the map
function dropPins(){
	Ti.App.removeEventListener('locationFetched', dropPins);
	var allTempAnnotations = [];
	Ti.API.warn(currentLocations.length+" Current Locations");
	for(i=0; i!=currentLocations.length; i++){
		Ti.API.info("Setting New Pin at "+currentLocations[i][4]+", "+currentLocations[i][3]);
		var tempAnnotation = Titanium.Map.createAnnotation ({
			draggable:false,
			latitude: currentLocations[i][4],
			longitude: currentLocations[i][3],
			title: currentLocations[i][1],
			subtitle: currentLocations[i][0], 
			pincolor: Titanium.Map.ANNOTATION_GREEN,
			image: 'images/normal.png',
			animate: true,
			myid: i, 
			//rightButton: 'images/singleArrowRightButton.gif',
			rightButton: Titanium.UI.iPhone.SystemButton.INFO_DARK,
		});
		//If a flash deal change icon
		if(currentLocations[i][5] == 1){
			tempAnnotation.pincolor = "#f00";
			tempAnnotation.image = 'images/flash.png';
		}
		allTempAnnotations.push(tempAnnotation);
	}
	map.annotations = allTempAnnotations;
}
function getCompanyName(){
	for(i=0; i!=currentLocations.length; i++){
		var name = currentLocations[i][1];
	}
	return name;
}
