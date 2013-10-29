Ti.include("ui.js");
function createListItem(data){
	
	var title, deal, distance, flash, img;
	
	var title = data[1][1];
	var distance = data[1][6];
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
	
	Ti.API.log("Creating List Item");
	//A row view
	
	//We use a holder because the little flash icon needs to be outside of the existing box
	var tempItemHolder = Ti.UI.createView({
		width:'100%',
		height:'100%',
		left:0,
		top:0
	});
	
	var tempItem_flash = Ti.UI.createView({
		width:20,
		height:20,
		borderRadius:10,
		backgroundColor:'red',
		left:(screen_width*0.05)-10,
		top:5,
		zIndex:1
	});
	if(flash){
		tempItemHolder.add(tempItem_flash);
	}
	
	var tempItem = Ti.UI.createView({
		width:'90%',
		height:70,
		top:10,
		borderColor:'#555',
	});
	var tempItem_image = Ti.UI.createView({
		width:70,
		height:70,
		backgroundColor:iOSBlue,
		left:0
	});
	var tempItem_title = Ti.UI.createLabel({
		left: 80,
		top:10,
		width:'50%',
		font:{fontSize:14},
		text:"Loading..."
	});
	var tempItem_deal = Ti.UI.createLabel({
		left:80,
		bottom:10,
		font:{fontSize:10},
		text:"Loading..."
	});
	var tempItem_distance = Ti.UI.createLabel({
		right:5,
		top:10,
		text:"?",
		font:{fontSize:14},
	});
	
	if(distance < 1){
		tempItem_distance.text = "<1 mi";
	}else if(distance > 100){
		tempItem_distance.text = ">100 mi";
	}else{
		tempItem_distance.text = distance+" mi";
	}
	
	tempItem_title.text = title;
	tempItem_deal.text = deals[0][0];
	if(deals[0][1] == true){
		tempItem_deal.color='red';
	}
	//tempItem_distance.text = distance;
	//tempItem_image.backgroundImage = img;
	tempItem.add(tempItem_title);
	tempItem.add(tempItem_deal);
	tempItem.add(tempItem_distance);
	tempItem.add(tempItem_image);
	
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
					tempItem_deal.color = "red";
				}else{
					tempItem_deal.color = "black";
				}
				tempItem_deal.animate({opacity:1, duration:500});
			});
		},5000);
	}
	
	return tempItemHolder;
}