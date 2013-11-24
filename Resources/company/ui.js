var comview_paddingLeft = 15;
var comview_paddingRight = 10;
var comview_widthWithPadding = screen_width-comview_paddingLeft-comview_paddingRight;
var comview_paddingBetweenGorupAndDeal = 21;

var companyview = Titanium.UI.createView({
        left: 0,
        height: '100%', 
        width: '100%',
        bottom:screen_height,
        backgroundColor: whiteColor,
        zIndex: 25
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
       	height:headerHeight-20+5,
        top:20,
        left:0,
        backgroundImage: 'images/topBarTrue.png',
        color:blackColor,
        zIndex:10
});

var companyBackBt = Ti.UI.createButton({
	bottom:13,
	left: 0, 
	width: 46,
	height: 66/2, 
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});
var companyBackBt_img = Ti.UI.createImageView({
	image: 'images/arrowLeftTrue.png',
	width: 35/2,
	height: 66/2,
	top:0
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

var mainDealItem =Ti.UI.createView({
	width: '100%', 
	height: 60, 
	backgroundColor:orangeColor, 
	top: image.height+image.top+comview_paddingBetweenGorupAndDeal, 
});
mainDealItem_text = Ti.UI.createLabel({
	test: '',
	width: screen_width-(comview_paddingLeft*2),
	top:10,
	textAlign:'center',
	color: blackColor,
    font:{fontSize:'auto'}
});
mainDealItem.add(mainDealItem_text);
/*
var descriptionLabel = Titanium.UI.createLabel({
        text: '',
        width: screen_width-(comview_paddingLeft*2), 
        height: 60, 
        backgroundColor:orangeColor, 
        top: image.height+image.top+comview_paddingBetweenGorupAndDeal, 
        textAlign: 'center', 
        color: blackColor,
        font:{fontSize:'auto'}
});
*/

//Drop down
var currentCompanyDeals_button = Ti.UI.createButton({
	width:screen_width-(comview_paddingLeft*2),
	height:50,
	title:'Current Deals',
	backgroundColor:blackColor,
	top:mainDealItem.top+mainDealItem.height+comview_paddingBetweenGorupAndDeal+5,
	zIndex:3,
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	color:whiteColor,
	textAlign:'left',
	font:{fontSize:15}
});
var currentCompanyDeals_button_FavCount = Ti.UI.createLabel({
	right:0,
	color:whiteColor,
	height:'100%',
	width:30,
	text:'2',
	font:currentCompanyDeals_button.font,
	opacity:1
});
var currentCompanyDeals_button_ArrowUp = Ti.UI.createView({
	width:47/2,
	height:30/2,
	backgroundImage:'images/arrowUpTrue.png',
	right:13,
	opacity:0
});
var currentCompanyDeals_dropdown_holder = Ti.UI.createView({
	width:'90%',
	height:50,
	top:currentCompanyDeals_button.top,
	zIndex:2,
});
var currentCompanyDeals_dropdown = Ti.UI.createTableView({
	width:'100%',
	top:0,
	height:40,
	backgroundColor:whiteColor,
	rowHeight:40,
	borderColor:grey,
	separatorColor:'transparent'
});
var dealsExtended = false;
currentCompanyDeals_button.addEventListener('click', function(){
	if(dealsExtended == false){
		currentCompanyDeals_dropdown_holder.height = ((otherCompanyDealsCount+1)*50)+5;
		currentCompanyDeals_dropdown.animate({top:45});
		currentCompanyDeals_button_ArrowUp.animate({opacity:1});
		currentCompanyDeals_button_FavCount.animate({opacity:0});
		dealsExtended = true;
	}else{
		currentCompanyDeals_button_ArrowUp.animate({opacity:0});
		currentCompanyDeals_button_FavCount.animate({opacity:1});
		currentCompanyDeals_dropdown.animate({top:-1*((otherCompanyDealsCount-1)*40)}, function(){
			currentCompanyDeals_dropdown_holder.height = 40;
		});
		dealsExtended = false;
	}
});
currentCompanyDeals_dropdown_holder.add(currentCompanyDeals_dropdown);
currentCompanyDeals_button.add(currentCompanyDeals_button_FavCount);
currentCompanyDeals_button.add(currentCompanyDeals_button_ArrowUp);
companyScroll.add(currentCompanyDeals_dropdown_holder);

var aboutLabel = Titanium.UI.createLabel({
        text: '',
        width: screen_width-(comview_paddingLeft*2),
        height: Ti.UI.SIZE,   
        top: currentCompanyDeals_button.top+currentCompanyDeals_button.height+20, 
        color:blackColor, 
        font: {fontSize:'14'}, 
        borderWidth: 1 
});
var aboutTitle = Titanium.UI.createLabel({
	text: 'About:', 
	top: currentCompanyDeals_button.top+currentCompanyDeals_button.height+15,
	left: 0,
	top: 0,
	color: orangeColor, 
	font: {fontWeight: 'bold'}
});
var specialtyLabel = Titanium.UI.createLabel({
        text: '',
        width: screen_width-(comview_paddingLeft*2), 
        height: 70, 
        top: aboutLabel.bottom,
        color:blackColor, 
        font: {fontSize:'14'}, 
        borderWidth: 1
});
var specialtyTitle = Titanium.UI.createLabel({
	text: 'Specialty:',
	left: 0, 
	top: 0,
	color: orangeColor, 
	font: {fontWeight: 'bold'},
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
		image: 'images/actionbar/navOff.png'
});
var callIcon = Titanium.UI.createImageView({
		image: 'images/actionbar/phoneOff.png'
});
var websiteIcon = Titanium.UI.createImageView({
		image: 'images/actionbar/internetOffnew.png'
});
var favoritesIcon = Titanium.UI.createImageView({
		image: 'images/actionbar/favOff.png'
});




companyview.add(companyTitle);

companyBackBt.add(companyBackBt_img);
companyTitle.add(companyBackBt);

companyview.add(companyScroll);
//The reason we use individual adds vs the list is because android dones't support the list
//companyview.add(image, titleLabel, distanceLabel, priceLabel, categoryLabel, descriptionLabel);
companyScroll.add(image);
companyScroll.add(titleLabel);
companyScroll.add(distanceLabel);
companyScroll.add(priceLabel_active);
companyScroll.add(priceLabel_inactive);
companyScroll.add(mainDealItem);
companyScroll.add(categoryLabel);

companyScroll.add(currentCompanyDeals_button);

companyScroll.add(aboutLabel);
companyScroll.add(specialtyLabel);
aboutLabel.add(aboutTitle);
specialtyLabel.add(specialtyTitle);
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