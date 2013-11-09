Ti.include("ui.js");

function openCompany(id){
	titleLabel.text = currentLocations[id][1];
	distanceLabel.text = currentLocations[id][6];
	descriptionLabel.text = currentLocations[id][0];
	categoryLabel.text = "Category: " + currentLocations[id][9];
	image.backgroundImage = getCategoryImage(currentLocations[id][9]);
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
			Titanium.Platform.openURL('tel:3179896648');
		}
	});
	alertDialog.show();
});
websiteButton.addEventListener('click', function(){
	var website = 'http://www.bbc.com';
	Ti.Platform.openURL(website);
});
directionsButton.addEventListener('click', function(e){
	Ti.Platform.openURL('http://maps.apple.com/?daddr='+currentLocations[currentCompanyID][4]+','+currentLocations[currentCompanyID][3]+'&saddr='+currentLat+','+currentLong);
});
favoritesButton.addEventListener('click', function(){
	openFavoritesPopup(currentCompanyID);
});