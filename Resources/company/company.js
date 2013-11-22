Ti.include("ui.js");

var countdown;
var otherCompanyDealsCount = 0;
var companyLocationsArray = [];
function openCompany(id, altArray){
	var tempCompanyArray = [];
	if(!altArray){
		tempCompanyArray = currentLocations;
		companyLocationsArray = [];
		currentCompanyDeals_button.title = "Current Deals";
	}else{
		tempCompanyArray = altArray;
		companyLocationsArray = altArray;
		currentCompanyDeals_button.title = "All Deals";
	}

	startCollectingStats(tempCompanyArray[id][1]);
	titleLabel.text = tempCompanyArray[id][1];
	//distanceLabel.text = tempCompanyArray[id][6];
	if(tempCompanyArray[id][6] == 0){
		distanceLabel.text = "   0.1 mi";
	}else if(tempCompanyArray[id][6] > 100){
		distanceLabel.text = "   >100 mi";
	}else{
		distanceLabel.text = "   " + tempCompanyArray[id][6] +" mi";
	}
	mainDealItem_text.text = tempCompanyArray[id][0];
	categoryLabel.text = "Category: " + tempCompanyArray[id][9];
	image.backgroundImage = getCategoryImage(tempCompanyArray[id][9]);
	
	if(tempCompanyArray[id][12]){
		aboutLabel.text = "\n" + tempCompanyArray[id][12];
		if(!tempCompanyArray[id][13]){
			aboutLabel.text += "\n\n\n";
		}
	}
	if(tempCompanyArray[id][13]){
		if(tempCompanyArray[id][12]){
			aboutLabel.text += "\n\n";
		}
		aboutLabel.text += "\n"+ tempCompanyArray[id][13]+"\n\n\n";
	}
	
	//specialtyLabel.text = "Specialty: " ;
	var priceString = "";
	for(i=0; i!=tempCompanyArray[id][14]; i++){
		priceString += "$";
	}
	priceLabel_active.text = priceString;
	
	var endTime = new Date();
	var endTimeExploded = tempCompanyArray[id][18].split(":");
	endTime.setHours(endTimeExploded[0]);
	endTime.setMinutes(endTimeExploded[1]);

	countdown = startCountDown(endTime);
	countdown.width = screen_width-(comview_paddingLeft*2);
	countdown.top = mainDealItem.top+mainDealItem.height-20;
	countdown.opacity = 0.7;
	countdown.textAlign = 'center';
	countdown.color = whiteColor;
	countdown.font = {fontSize:11};
	companyScroll.add(countdown);
	
	var otherCompanyDeals = [];

	if(!altArray){
		for(var i=0; i!=companies.length; i++){
			if(companies[i][0] == tempCompanyArray[id][2]){
				for(var z=1; z!=companies[i].length; z++){
					otherCompanyDeals.push([companies[i][z][0], companies[i][z][16]]);
				}
			}
		}
	}else{
		for(var i=0; i!=tempCompanyArray.length; i++){
			if(tempCompanyArray[i][2] == tempCompanyArray[id][2]){
				otherCompanyDeals.push([tempCompanyArray[i][0], tempCompanyArray[i][16]]);
			}
		}
	}
	otherCompanyDealsCount = otherCompanyDeals.length;
	currentCompanyDeals_button_FavCount.text = otherCompanyDealsCount;
	if(otherCompanyDealsCount == 1){
		aboutLabel.top = currentCompanyDeals_button.top;
		currentCompanyDeals_dropdown_holder.visible = false;
		currentCompanyDeals_button.visible = false;
	}else{
		currentCompanyDeals_dropdown.height = otherCompanyDealsCount*47;
		currentCompanyDeals_dropdown.top = -1*((otherCompanyDealsCount-1)*60);
		currentCompanyDeals_dropdown.data = [];
		var tempRows = [];
		for(var i=0; i!=otherCompanyDeals.length; i++){
			var tempTableRow = Ti.UI.createTableViewRow({
				/*title:otherCompanyDeals[i][0] + " - "+otherCompanyDeals[i][1],
				font:{fontSize:14, fontWeight:'normal'},
				color:blackColor,*/
				selectionStyle:'none',
				height:'auto'
			});
			var tempTableRow_title = Ti.UI.createLabel({
				text:otherCompanyDeals[i][0],
				font:{fontSize:13, fontWeight:'normal'},
				color:blackColor,
				height:'auto',
				top:30,
				width:'95%',
				textAlign:'left'
			});
			var tempTableRow_days = Ti.UI.createLabel({
				text:otherCompanyDeals[i][1],
				font:{fontSize:14, fontWeight:'bold'},
				color:orangeColor,
				height:'auto',
				width:'95%',
				textAlign:'left'
			});
			tempTableRow.add(tempTableRow_title);
			tempTableRow.add(tempTableRow_days);
			tempRows.push(tempTableRow);
		}
		currentCompanyDeals_dropdown.data = tempRows;
		aboutLabel.top = currentCompanyDeals_button.top+currentCompanyDeals_button.height+15;
		currentCompanyDeals_dropdown_holder.visible = true;
		currentCompanyDeals_button.visible = true;
	}
	
	companyview.animate({
		bottom: 0
	});
	currentCompanyID = id;
}

callButton.addEventListener('click', function(){
	var alertDialog = Titanium.UI.createAlertDialog({
    message: 'Are you sure you want to call?',
    buttonNames: ['Yes','No']
	});
	alertDialog.addEventListener('click', function(e){
		if(e.index == 0){
			//var phoneNumber = currentLocations[currentCompanyID][10];
			Titanium.Platform.openURL('tel:' + currentLocations[currentCompanyID][10]);
		}
	});
	alertDialog.show();
});
websiteButton.addEventListener('click', function(){
	//var website = 'http://www.bbc.com';
	Ti.Platform.openURL(currentLocations[currentCompanyID][11]);
});
directionsButton.addEventListener('click', function(e){
	Ti.Platform.openURL('http://maps.apple.com/?daddr='+currentLocations[currentCompanyID][4]+','+currentLocations[currentCompanyID][3]+'&saddr='+currentLat+','+currentLong);
});
favoritesButton.addEventListener('click', function(){
	openFavoritesPopup(currentCompanyID, companyLocationsArray);
});

companyBackBt.addEventListener('click', function(){
	companyScroll.remove(countdown);
	stopCollectingStats();
	companyview.animate({
		bottom: screen_height,
	});
});