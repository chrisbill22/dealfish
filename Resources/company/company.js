Ti.include("ui.js");

function openCompany(id, altArray){
	var tempCompanyArray = [];
	if(!altArray){
		tempCompanyArray = currentLocations;
	}else{
		tempCompanyArray = altArray;
	}
	titleLabel.text = tempCompanyArray[id][1];
	distanceLabel.text = tempCompanyArray[id][6];
	descriptionLabel.text = tempCompanyArray[id][0];
	categoryLabel.text = "Category: " + tempCompanyArray[id][9];
	image.backgroundImage = getCategoryImage(tempCompanyArray[id][9]);
	aboutLabel.text = "About: " + tempCompanyArray[id][12];
	specialtyLabel.text = "Specialty: " + tempCompanyArray[id][13];
	var priceString = "";
	for(i=0; i!=tempCompanyArray[id][14]; i++){
		priceString += "$";
	}
	priceLabel_active.text = priceString;
	
	companyview.animate({
		bottom: 0
	});
	currentCompanyID = id;
}

callButton.addEventListener('click', function(){
	var alertDialog = Titanium.UI.createAlertDialog({
    message: 'Are you sure you want to call?',
    buttonNames: ['Yes!','No!']
	});
	alertDialog.addEventListener('click', function(e){
		if(e.index == 0){
			//var phoneNumber = currentLocations[currentCompanyID][10];
			Titanium.Platform.openURL('tel:' + currentLocations[currentCompanyID][10]);
		}
	});
	alertDialog.show();
});
websiteButton.addEventListener('click', function(){
	//var website = 'http://www.bbc.com';
	Ti.Platform.openURL(currentLocations[currentCompanyID][11]);
});
directionsButton.addEventListener('click', function(e){
	Ti.Platform.openURL('http://maps.apple.com/?daddr='+currentLocations[currentCompanyID][4]+','+currentLocations[currentCompanyID][3]+'&saddr='+currentLat+','+currentLong);
});
favoritesButton.addEventListener('click', function(){
	openFavoritesPopup(currentCompanyID);
});