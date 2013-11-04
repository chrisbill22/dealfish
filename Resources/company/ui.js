var companyview = Titanium.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:screen_height,
	backgroundColor: '#fff',
	zIndex: 21
});
var backButton = Titanium.UI.createButton({
	title: 'Back', 
	width: 100, 
	height: 50, 
	top: 10, 
	left: 0, 
});
function openCompany(id){
	titleLabel.text = currentLocations[id][1];
	distanceLabel.text = currentLocations[id][6];
	descriptionLabel.text = currentLocations[id][0];
	companyview.animate({
		bottom: 0
	});
}

var image = Ti.UI.createView({
	width:'40%',
	height:'20%',
	backgroundColor:iOSBlue,
	left:0, 
	top: 90
});
var titleLabel = Titanium.UI.createLabel({
	text: '',
	width: '50%',
	height: 50,
	borderWidth: 0, 
	top: 70, 
	right: 10,
});
var distanceLabel = Titanium.UI.createLabel({
	text: '',
	width: '50%',
	height: 50,
	borderWidth: 0,
	top: 100,
	right: 10
});
var priceLabel = Titanium.UI.createLabel({
	text: "DOLLAR SIGNS", 
	width: '50%', 
	height: 50, 
	borderWidth: 0, 
	top: 130,
	right: 10
});
var descriptionLabel = Titanium.UI.createLabel({
	text: '',
	width: '75%', 
	height: 50, 
	borderWidth: 1, 
	top: 225, 
});
var callButton = Titanium.UI.createButton({
	title: "Call", 
	width: 90, 
	height: 90, 
	borderWidth: 1, 
	top: 325,
	left: 10
});
var directionsButton = Titanium.UI.createButton({
	title: "Directions", 
	width: 90, 
	height: 90, 
	borderWidth: 1, 
	top: 325,
	left: 115
});
var favoritesButton = Titanium.UI.createButton({
	title: "Add to Favorites", 
	width: 90, 
	height: 90, 
	borderWidth: 1, 
	top: 325,
	right: 10, 
	wordWrap: true
});
companyview.add(image);
companyview.add(titleLabel);
companyview.add(distanceLabel);
companyview.add(priceLabel);
companyview.add(descriptionLabel);
companyview.add(callButton);
companyview.add(directionsButton);
companyview.add(favoritesButton);


companyview.add(backButton);
MainWindow.add(companyview);