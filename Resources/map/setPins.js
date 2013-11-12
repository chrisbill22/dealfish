//Pull database
function setPins(){
	if(checkLocationsNeedFetched()){
		fetchLocations();
		checkLocationsFetched();
		Ti.App.addEventListener('locationFetched', dropPins);
	}else{
		//dropPins();
	}
}

function getPinImage(category, flash){
	if(category == "Pizza"){
		return "images/pins/normal/defaultPin.png";
	}
	if(categories.indexOf(category) != -1){
		if(flash){
			return "images/pins/flash/"+category+".png";
		}else{
			return "images/pins/normal/"+category+".png";
		}
	}else{
		if(flash){
			return "images/pins/flash/defaultPin.png";	
		}else{
			return "images/pins/normal/defaultPin.png";
		}
	}
}

//Put the actual pins in the map
function dropPins(customData){
	var pinData = companies;
	if(customData){
		pinData = customData;
	}
	Ti.App.removeEventListener('locationFetched', dropPins);
	var allTempAnnotations = [];
	Ti.API.warn(currentLocations.length+" Current Locations");
	for(i=0; i!=pinData.length; i++){
		allTempAnnotations.push(createPin(pinData[i]));
	}
	map.annotations = allTempAnnotations;
}

function createPin(data){
	var deals = [];
	var flash = false;
	for(x=1; x != data.length; x++){
		deals.push([data[x][0], data[x][5]]);
		if(data[x][5] == true){
			flash = true;
		}
	}
	Ti.API.info("Setting New Pin at "+data[1][4]+", "+data[1][3]);
		var annotationView = Titanium.UI.createView({
			width:200,
			height:40,
			top:0
		});
		var annotationViewTitle = Ti.UI.createLabel({
			text:data[1][1],
			top:0,
			width:200,
			height:12,
			font:{fontSize:14, fontWeight:"Bold"},
			color:whiteColor
		});
		var annotationViewDeals = Ti.UI.createLabel({
			text:deals[0][0],
			top:13,
			height:25,
			width:200,
			color:whiteColor,
			font:{fontSize:12}
		});
		annotationView.add(annotationViewTitle);
		annotationView.add(annotationViewDeals);
		var tempAnnotation = Titanium.Map.createAnnotation ({
			draggable:false,
			latitude: data[1][4],
			longitude: data[1][3],
			//title: currentLocations[i][1],
			//subtitle: currentLocations[i][0],
			title:" ",
			subtitle:"",
			pincolor: Titanium.Map.ANNOTATION_GREEN,
			image: getPinImage(data[1][9], flash),
			animate: true,
			myid: getFirstInstanceOfCompanyID(data[0]), 
			leftView: annotationView,
			//rightButton: 'images/singleArrowRightButton.gif',
			rightButton: Titanium.UI.iPhone.SystemButton.INFO_DARK,
		});
		var currentDeal = 0;
		if(deals.length > 1){
			setInterval(function(){
				annotationViewDeals.animate({opacity:0, duration:500}, function(){
					if(currentDeal == deals.length-1){
						currentDeal = 0;
					}else{
						currentDeal++;
					}
					annotationViewDeals.text = deals[currentDeal][0];
					if(deals[currentDeal][1] == true){
						annotationViewDeals.color = "red";
					}else{
						annotationViewDeals.color = "white";
					}
					annotationViewDeals.animate({opacity:1, duration:500});
				});
			}, 5000);
		}
		/*//If a flash deal change icon
		if(data[1][5] == 1){
			tempAnnotation.pincolor = "#f00";
			tempAnnotation.image = 'images/flash.png';
		}*/
		return tempAnnotation;
}
