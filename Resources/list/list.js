Ti.include("quickActionView.js");
Ti.include("ui.js");


function createListItem(data){
	
	var title, deal, distance, flash, img;
	
	var title = data[1][1];
	var distance = data[1][6];
	var cateogry = data[1][9];
	var deals = [];
	var flash = false;
	//var img = category;
	
	//Go through and add all of the flash deals first
	for(i=1; i!=data.length; i++){
		if(data[i][5] == true){
			flash = true;
			deals.push([data[i][0], true]);
		}
	}
	//Go through and add all of the normal deals last
	for(i=1; i!=data.length; i++){
		if(data[i][5] == false){
			deals.push([data[i][0], false]);
		}
	}
	
	/* [
	0 = merchant ID
	1 = [
		0 = deal description,
		1 = company name,
		2 = merchant ID,
		3 = longitude,
		4 = latitude,
		5 = flash deal,
		6 = distance from current location (default -1, calculated in-app),
		7 = start date,
		8 = end date
		]
	2 = ["]
	] */
	
	//Ti.API.log("Creating List Item");
	//A row view
	
	//We use a holder because the little flash icon needs to be outside of the existing box
	var tempItemHolder = Ti.UI.createView({
		width:'100%',
		height:'100%',
		left:0,
		top:0
	});
	
	var tempItem_flash = Ti.UI.createView({
		width:50,
		height:20,
		borderRadius:10,
		backgroundColor:whiteColor,
		borderColor:orangeColor,
		left:(screen_width*0.05),
		top:60,
		zIndex:2
	});
	var tempItem_flash_label = Ti.UI.createLabel({
		width:'auto',
		height:17,
		font:{fontSize:8, fontWeight:'bold'},
		text:"1 Day Only",
		color:orangeColor
	});
	if(flash){
		tempItemHolder.add(tempItem_flash);
		tempItem_flash.add(tempItem_flash_label);
	}
	
	var tempItem = Ti.UI.createView({
		width:(screen_width*0.94)-60,
		right:'3%',
		height:70,
		top:10,
		backgroundColor:whiteColor
	});
	var tempItem_image = Ti.UI.createView({
		width:60,
		height:60,
		top:15,
		backgroundColor:orangeColor,
		left:'3%',
		backgroundImage:getCategoryImage(cateogry),
		zIndex:1
	});
	var tempItem_title = Ti.UI.createLabel({
		left: 10,
		top:3,
		width:'70%',
		font:{fontSize:16, fontFamily:'verdana'},
		text:"Loading..."
	});
	var tempItem_deal = Ti.UI.createLabel({
		left:10,
		bottom:5,
		font:{fontSize:13},
		text:"Loading...",
		width:'85%'
	});
	var tempItem_distance = Ti.UI.createLabel({
		right:5,
		top:3,
		text:"?",
		font:{fontSize:12},
	});
	
	var tempPriceLabel_active = Titanium.UI.createLabel({
        text: '',  
        top: 20,
        font:{fontSize: 12},
        zIndex:1,
        color:blackColor,
        right:5,
        
	});
	var tempPriceLabel_inactive = Ti.UI.createLabel({
        text:"$$$$",
        color:'#AAA',
        width:tempPriceLabel_active.width,
        height:tempPriceLabel_active.height,
        top:tempPriceLabel_active.top,
        right:tempPriceLabel_active.right,
        font:tempPriceLabel_active.font
	});
	
	
	var tempItem_locationIcon = Ti.UI.createImageView({
		image: 'images/location.png', 
		length: 10, 
		width: 7, 
		left: 0
	});
	
	if(distance == 0){
		tempItem_distance.text = "   0.1 mi";
	}else if(distance > 100){
		tempItem_distance.text = "   >100 mi";
	}else{
		tempItem_distance.text ="   " + distance+" mi";
	}
	
	var priceString = "";
	for(i=0; i!=data[i][14]; i++){
		priceString += "$";
	}
	tempPriceLabel_active.text = priceString;
	
	tempItem_title.text = title;
	tempItem_deal.text = deals[0][0];
	if(deals[0][1] == true){
		tempItem_deal.color=orangeColor;
	}
	//tempItem_distance.text = distance;
	//tempItem_image.backgroundImage = img;
	tempItem.add(tempItem_title);
	tempItem.add(tempItem_deal);
	tempItem.add(tempItem_distance);
	tempItem.add(tempPriceLabel_active);
	tempItem.add(tempPriceLabel_inactive);
	tempItemHolder.add(tempItem_image);
	tempItem_distance.add(tempItem_locationIcon);
	tempItemHolder.add(tempItem);
	
	var currentDeal = 0;
	if(deals.length > 1){
		setInterval(function(){
			tempItem_deal.animate({opacity:0, duration:500}, function(){
				if(currentDeal == deals.length-1){
					currentDeal = 0;
				}else{
					currentDeal++;
				}
				tempItem_deal.text = deals[currentDeal][0];
				if(deals[currentDeal][1] == true){
					tempItem_deal.color = orangeColor;
				}else{
					tempItem_deal.color = "black";
				}
				tempItem_deal.animate({opacity:1, duration:500});
			});
		},5000);
	}
	
	return tempItemHolder;
}
