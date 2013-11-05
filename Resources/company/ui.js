var companyview = Titanium.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:screen_height,
	backgroundColor: '#DDD',
	zIndex: 21, 
});
var companyTitle = Ti.UI.createView({
	height:'10%',
	top:0,
	left:0,
	backgroundColor:'#FF6600',
});
var backButton = Titanium.UI.createButton({
	title: 'Back', 
	width: 100, 
	height: 50, 
	top: 10, 
	left: 0, 
});
function openCompany(id){
	var cat = currentLocations[id][9];
	
	titleLabel.text = currentLocations[id][1];
	distanceLabel.text = currentLocations[id][6];
	descriptionLabel.text = currentLocations[id][0];
	categoryLabel.text = "Category: " + currentLocations[id][9];
	image.backgroundImage = getCategoryImage(currentLocations[id][9]);
	companyview.animate({
		bottom: 0
	});
}

var image = Ti.UI.createView({
	width:'40%',
	height:'20%',
	backgroundColor:'#FF6600',
	left: 10, 
	top: 95, 
});
var titleLabel = Titanium.UI.createLabel({
	text: '',
	width: '50%',
	height: 50,
	borderWidth: 0, 
	top: 90, 
	right: 10,
	font:{fontSize: 18},
});
var distanceLabel = Titanium.UI.createLabel({
	text: '',
	width: '50%',
	height: 50,
	borderWidth: 0,
	top: 125,
	right: 10, 
	font:{fontSize: 10},
});
var priceLabel = Titanium.UI.createLabel({
	text: "DOLLAR SIGNS", 
	width: '50%', 
	height: 50, 
	borderWidth: 0, 
	top: 150,
	right: 10, 
	font:{fontSize: 10},
});
var categoryLabel = Titanium.UI.createLabel({
	text: '',
	width: '50%', 
	height: 50, 
	top: 175, 
	right: 10, 
	font:{fontSize: 10}
});
var descriptionLabel = Titanium.UI.createLabel({
	text: '',
	width: '100%', 
	height: 50, 
	backgroundColor: "#FF6600", 
	top: 235, 
	textAlign: 'center'
});
var directionsButton = Titanium.UI.createButton({
	title: "Directions", 
	width: '25%', 
	height: '10%', 
	borderWidth: 1, 
	bottom: 0,
	left: 0, 
	backgroundColor: "#545454"
});
var callButton = Titanium.UI.createButton({
	title: "Call", 
	width: '25%', 
	height: '10%', 
	borderWidth: 1, 
	bottom: 0,
	left: '25%',
	backgroundColor: "#545454"
});
var websiteButton = Titanium.UI.createButton({
	title: "Website", 
	width: '25%', 
	height: '10%', 
	borderWidth: 1, 
	bottom: 0,
	right: 0,
	backgroundColor: "#545454"
});
var favoritesButton = Titanium.UI.createButton({
	title: "Favorites", 
	width: '25%', 
	height: '10%', 
	borderWidth: 1, 
	bottom: 0,
	right: "25%",
	backgroundColor: "#545454"
});
callButton.addEventListener('click', function(){
	var the_number = '3179896648';
	Ti.Platform.openURL('tel: '+ the_number);
});
websiteButton.addEventListener('click', function(){
	var website = 'http://www.bbc.com';
	Ti.Platform.openURL(website);
});
companyview.add(companyTitle);
companyTitle.add(backButton);
companyview.add(image, titleLabel, distanceLabel, priceLabel, categoryLabel, descriptionLabel);
/*
companyview.add(titleLabel);
companyview.add(distanceLabel);
companyview.add(priceLabel);
companyview.add(descriptionLabel);
*/
companyview.add(callButton, directionsButton, favoritesButton, websiteButton);
/*
companyview.add(directionsButton);
companyview.add(favoritesButton);
companyview.add(categoryLabel);
companyview.add(pinButton);
*/
MainWindow.add(companyview);