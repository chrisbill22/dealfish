var companyview = Titanium.UI.createView({
        left: 0,
        height: '100%', 
        width: '100%',
        bottom:screen_height,
        backgroundColor: whiteColor,
        zIndex: 25, 
});
var companyScroll = Titanium.UI.createScrollView({
		width: '95%', 
		height: viewHeight,
		contentWidth: 'auto',
  		contentHeight: 'auto',
  		showVerticalScrollIndicator: true,
  		showHorizontalScrollIndicator: true, 
  		top: headerHeight
});
var companyTitle = Ti.UI.createView({
        height:headerHeight,
        top:0,
        left:0,
        backgroundImage: 'images/topBarTrue.png',
        color:blackColor
});
var backButton = Titanium.UI.createButton({
        backgroundImage: 'images/arrowLeftTrue.png', 
        width: 15,
        height: 25,
        bottom: 10, 
        left: 5, 
});
//------
var image = Ti.UI.createView({
        width:90,
        height:90,
        backgroundColor:orangeColor,
        left: 0, 
        top: 20, 
});
var titleLabel = Titanium.UI.createLabel({
        text: '',
        width: '50%',
        borderWidth: 0, 
        top: 35, 
        left: 100,
        height: 30,
        font:{fontSize: 16},
        color:blackColor
});
var distanceLabel = Titanium.UI.createLabel({
        text: '',
        width: '50%',
        top: 60,
        left: 100, 
        font:{fontSize: 12},
		color: blackColor
});
var priceLabel_active = Titanium.UI.createLabel({
        text: "", 
        width: '50%',   
        top: 77,
        left: 100,  
        font:{fontSize: 12},
        zIndex:1,
        color:blackColor
});
var priceLabel_inactive = Ti.UI.createLabel({
        text:"$$$$",
        color:'#DDD',
        width:priceLabel_active.width,
        height:priceLabel_active.height,
        top:priceLabel_active.top,
        left:priceLabel_active.left,
        font:priceLabel_active.font
});
var categoryLabel = Titanium.UI.createLabel({
        text: '',
        width: '50%',  
        top: 95, 
        left: 100, 
        font:{fontSize: 12},
        color:blackColor
});
var descriptionLabel = Titanium.UI.createLabel({
        text: '',
        width: '100%', 
        height: 50, 
        backgroundColor:orangeColor, 
        top: 180, 
        textAlign: 'center', 
        color: whiteColor
});
var aboutLabel = Titanium.UI.createLabel({
        text: '',
        width: '90%', 
        height: 70,  
        top: 215, 
        color:blackColor, 
        font: {fontSize:'14'}, 
});
var specialtyLabel = Titanium.UI.createLabel({
        text: '',
        width: '90%', 
        height: 70, 
        top: 310,
        color:blackColor, 
        font: {fontSize:'14'}, 
});
var directionsButton = Titanium.UI.createButton({
        title: "Directions", 
        width: '25%', 
        height: footerHeight, 
        bottom: 0,
        left: 0, 
        color:orangeColor,
        backgroundColor: "#555",
        style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});
var callButton = Titanium.UI.createButton({
        title: "Call", 
        width: '25%', 
        height: footerHeight, 
        bottom: 0,
        left: '25%',
        color:orangeColor,
        backgroundColor: "#555",
        style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});
var websiteButton = Titanium.UI.createButton({
        title: "Website", 
        width: '25%', 
        height: footerHeight, 
        bottom: 0,
        right: 0,
        color:orangeColor,
        backgroundColor: "#555",
        style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});
var favoritesButton = Titanium.UI.createButton({
        title: "Favorites", 
        width: '25%', 
        height: footerHeight, 
        bottom: 0,
        right: "25%",
        color:orangeColor,
        backgroundColor: "#555",
        style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});

companyview.add(companyTitle);
companyTitle.add(backButton);
companyview.add(companyScroll);
//The reason we use individual adds vs the list is because android dones't support the list
//companyview.add(image, titleLabel, distanceLabel, priceLabel, categoryLabel, descriptionLabel);
companyScroll.add(image);
companyScroll.add(titleLabel);
companyScroll.add(distanceLabel);
companyScroll.add(priceLabel_active);
companyScroll.add(priceLabel_inactive);
companyview.add(descriptionLabel);
companyScroll.add(categoryLabel);
companyScroll.add(aboutLabel);
companyScroll.add(specialtyLabel);
//companyview.add(callButton, directionsButton, favoritesButton, websiteButton);
companyview.add(callButton);
companyview.add(directionsButton);
companyview.add(favoritesButton);
companyview.add(websiteButton);

/*
companyview.add(pinButton);*/

MainWindow.add(companyview);