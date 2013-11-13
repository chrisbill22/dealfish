var comview_paddingLeft = 10;
var comview_paddingRight = 10;
var comview_widthWithPadding = screen_width-comview_paddingLeft-comview_paddingRight;
var comview_paddingBetweenGorupAndDeal = 21;

var companyview = Titanium.UI.createView({
        left: 0,
        height: '100%', 
        width: '100%',
        bottom:screen_height,
        backgroundColor: whiteColor,
        zIndex: 25, 
});
var companyScroll = Titanium.UI.createScrollView({
		width: '100%', 
		height: viewHeight,
		contentWidth: 'auto',
  		contentHeight: 'auto',
  		showVerticalScrollIndicator: true,
  		showHorizontalScrollIndicator: true, 
  		top: headerHeight, 
  		bottom: footerHeight
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
        width:104,
        height:104,
        backgroundColor:orangeColor,
        left: comview_paddingLeft, 
        top: 20, 
});
var titleLabel = Titanium.UI.createLabel({
        text: '',
        width: comview_widthWithPadding-(image.width+comview_paddingLeft),
        borderWidth: 0, 
        top: 30, 
        left: image.width+(comview_paddingLeft*2),
        height: 30,
        font:{fontSize: 18},
        color:blackColor
});
var locationImage = Titanium.UI.createImageView({
		image:'images/location.png', 
		width: 7, 
		height: 10, 
		left: 0
});
var distanceLabel = Titanium.UI.createLabel({
        text: '',
        width: '50%',
        top: 58,
        left: image.width+(comview_paddingLeft*2), 
        font:{fontSize: 12},
		color: blackColor
});
var priceLabel_active = Titanium.UI.createLabel({
        text: '', 
        width: '50%',   
        top: 75,
        left: image.width+(comview_paddingLeft*2),  
        font:{fontSize: 12},
        zIndex:1,
        color:blackColor
});
var priceLabel_inactive = Ti.UI.createLabel({
        text:"$$$$",
        color:'#AAA',
        width:priceLabel_active.width,
        height:priceLabel_active.height,
        top:priceLabel_active.top,
        left:priceLabel_active.left,
        font:priceLabel_active.font
});
var categoryLabel = Titanium.UI.createLabel({
        text: '',
        width: '50%',  
        top: 91, 
        left: image.width+(comview_paddingLeft*2), 
        font:{fontSize: 12},
        color:blackColor
});
var descriptionLabel = Titanium.UI.createLabel({
        text: '',
        width: '100%', 
        height: 60, 
        backgroundColor:orangeColor, 
        top: image.height+image.top+comview_paddingBetweenGorupAndDeal, 
        textAlign: 'center', 
        color: whiteColor
});
var aboutLabel = Titanium.UI.createLabel({
        text: '',
        width: '90%', 
        height: 'auto',  
        top: descriptionLabel.top+descriptionLabel.height+comview_paddingBetweenGorupAndDeal+5, 
        color:blackColor, 
        font: {fontSize:'14'}, 
});
var specialtyLabel = Titanium.UI.createLabel({
        text: '',
        width: '90%', 
        height: 70, 
        top: 320,
        color:blackColor, 
        font: {fontSize:'14'}, 
});
var directionsButton = Titanium.UI.createButton({
        //title: "Directions", 
        width: '25%', 
        height: footerHeight, 
        bottom: 0,
        left: 0, 
        color:orangeColor,
        backgroundColor: "#555",
        style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});
var callButton = Titanium.UI.createButton({
        //title: "Call", 
        width: '25%', 
        height: footerHeight, 
        bottom: 0,
        left: '25%',
        color:orangeColor,
        backgroundColor: "#555",
        style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});
var websiteButton = Titanium.UI.createButton({
        //title: "Website", 
        width: '25%', 
        height: footerHeight, 
        bottom: 0,
        right: 0,
        color:orangeColor,
        backgroundColor: "#555",
        style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});
var favoritesButton = Titanium.UI.createButton({
        //title: "Favorites", 
        width: '25%', 
        height: footerHeight, 
        bottom: 0,
        right: "25%",
        color:orangeColor,
        backgroundColor: "#555",
        style:Ti.UI.iPhone.SystemButtonStyle.PLAIN, 
});

var locationImage = Titanium.UI.createImageView({
		image:'images/location.png', 
		width: 7, 
		height: 10, 
		left: 0
});
var directionsIcon = Titanium.UI.createImageView({
		image: 'images/actionbar/locationOff.png'
});
var callIcon = Titanium.UI.createImageView({
		image: 'images/actionbar/phoneOff.png'
});
var websiteIcon = Titanium.UI.createImageView({
		image: 'images/actionbar/internetOff.png'
});
var favoritesIcon = Titanium.UI.createImageView({
		image: 'images/actionbar/favOff.png'
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
companyScroll.add(descriptionLabel);
companyScroll.add(categoryLabel);
companyScroll.add(aboutLabel);
companyScroll.add(specialtyLabel);
//companyview.add(callButton, directionsButton, favoritesButton, websiteButton);
companyview.add(callButton);
companyview.add(directionsButton);
companyview.add(favoritesButton);
companyview.add(websiteButton);
distanceLabel.add(locationImage);
directionsButton.add(directionsIcon);
callButton.add(callIcon);
websiteButton.add(websiteIcon);
favoritesButton.add(favoritesIcon);
/*
companyview.add(pinButton);*/

MainWindow.add(companyview);