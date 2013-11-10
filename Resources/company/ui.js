var companyview = Titanium.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:screen_height,
	backgroundColor: '#FFF',
	zIndex: 25, 
});
var companyTitle = Ti.UI.createView({
	height:'10%',
	top:0,
	left:0,
	backgroundImage: 'images/topBarTrue.png'
});
var backButton = Titanium.UI.createButton({
	backgroundImage: 'images/arrowLeftTrue.png', 
	width: 15,
	height: 30,
	top: 20, 
	left: 5, 
});
//------
var image = Ti.UI.createView({
	width:80,
	height:80,
	backgroundColor:'#FF6600',
	left: 10, 
	top: 70, 
});
var titleLabel = Titanium.UI.createLabel({
	text: 'Loading...',
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
var priceLabel_active = Titanium.UI.createLabel({
	text: "", 
	width: '50%', 
	height: 50,  
	top: 150,
	right: 10, 
	font:{fontSize: 10},
	zIndex:1
});
priceLabel_inactive = Ti.UI.createLabel({
	text:"$$$$",
	color:'#DDD',
	width:priceLabel_active.width,
	height:priceLabel_active.height,
	top:priceLabel_active.top,
	right:priceLabel_active.right,
	font:priceLabel_active.font
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
	bottom: 0,
	left: 0, 
	color:orangeColor,
	backgroundColor: "#555"
});
var callButton = Titanium.UI.createButton({
	title: "Call", 
	width: '25%', 
	height: '10%', 
	bottom: 0,
	left: '25%',
	color:orangeColor,
	backgroundColor: "#555"
});
var websiteButton = Titanium.UI.createButton({
	title: "Website", 
	width: '25%', 
	height: '10%', 
	bottom: 0,
	right: 0,
	color:orangeColor,
	backgroundColor: "#555"
});
var favoritesButton = Titanium.UI.createButton({
	title: "Favorites", 
	width: '25%', 
	height: '10%', 
	bottom: 0,
	right: "25%",
	color:orangeColor,
	backgroundColor: "#555"
});

companyview.add(companyTitle);
companyTitle.add(backButton);

//The reason we use individual adds vs the list is because android dones't support the list
//companyview.add(image, titleLabel, distanceLabel, priceLabel, categoryLabel, descriptionLabel);
companyview.add(image);
companyview.add(titleLabel);
companyview.add(distanceLabel);
companyview.add(priceLabel_active);
companyview.add(priceLabel_inactive);
companyview.add(descriptionLabel);
companyview.add(categoryLabel);

//companyview.add(callButton, directionsButton, favoritesButton, websiteButton);
companyview.add(callButton);
companyview.add(directionsButton);
companyview.add(favoritesButton);
companyview.add(websiteButton);

/*
companyview.add(pinButton);*/

MainWindow.add(companyview);