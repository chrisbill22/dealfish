Ti.include("ui.js");


function createListItem(title, deal, distance, img){
	Ti.API.log("Creating List Item");
	//A row view
	var tempItem = Ti.UI.createView({
		width:'95%',
		height:70,
		top:10,
		borderColor:'#555',
		borderWidth:1
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
		text:"?"
	});
	
	if(distance < 1){
		tempItem_distance.text = "<1 mi";
	}else if(distance > 100){
		tempItem_distance.text = ">100 mi";
	}else{
		tempItem_distance.text = distance+" mi";
	}
	
	tempItem_title.text = title;
	tempItem_deal.text = deal;
	//tempItem_distance.text = distance;
	//tempItem_image.backgroundImage = img;
	
	tempItem.add(tempItem_title);
	tempItem.add(tempItem_deal);
	tempItem.add(tempItem_distance);
	tempItem.add(tempItem_image);
	
	return tempItem;
}
