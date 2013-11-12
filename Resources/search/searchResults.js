var searchResultsView = Ti.UI.createView({
	width:'100%',
	height:'100%',
	zIndex:21,
	left:screen_width*-1,
	top:0,
	backgroundColor:whiteColor
});
var searchResultsBack = Ti.UI.createButton({
	backgroundImage: 'images/arrowLeftTrue.png', 
	width: 15,
	height: 25,
	bottom: 5, 
	left: 10,
});
var searchResultsTitle = Ti.UI.createView({
	height:headerHeight,
	top:0,
	left:0,
	backgroundColor:orangeColor,
});

var searchResultsList = Ti.UI.createTableView({
	top:'10%',
	width:'100%',
	height:'90%',
	rowHeight:80,
	style: Ti.UI.iPhone.TableViewStyle.PLAIN,
	separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
	separatorColor: 'transparent'
});

searchResultsBack.addEventListener('click', function(){
	searchResultsView.animate({left:(screen_width*-1)});
});



function setSearchedList(mainArray){
	//Row array actually contains the table view rows
	var rowArray = [];
	//Data array will be used to find duplicate deals in the global deals array and combine them
	var dataArray = [];
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
		9 = category
		10 = phone
		11 = website
		12 = bio
		13 = specialties
		14 = price range - 1 to 4, 1-low, 4-high
		]
	2 = ["]
	] */
	
	if(mainArray.length > 0){
		//Convert from global deals array to dataArray
		for (var i = 0; i != mainArray.length; i++){
			var duplicateMerchant = false;
			for(var z = 0; z != dataArray.length; z++){
				Ti.API.log("Check");
				if(dataArray[z][0] == mainArray[i][2]){
					Ti.API.log("Duplicate z="+z+" Deal Name="+mainArray[i][0]);
					//If there is a duplicate merchant ID add it onto the existing one
					dataArray[z].push(mainArray[i]);
					duplicateMerchant = true;
				}
			}
			//If this is a new merchant ID add it onto the back
			if(duplicateMerchant == false){
				Ti.API.log("New Merchant. Z="+dataArray.length);
				dataArray.push([mainArray[i][2], mainArray[i]]);
			}
			//First comapany, second deal they are offering, description of deal
			//alert(dataArray[0][2][0]);
		}
		
		
		for (var i = 0; i != dataArray.length; i++){
			var row = Ti.UI.createTableViewRow({
				height: 80,
				companyID:dataArray[i][0]
			});
			//alert("Start Date: "+mainArray[i][7]+"\nEnd Date: "+mainArray[i][8]);
			
			row.add(createListItem(dataArray[i]));
			row.addEventListener('click', function(e){
				if(longpressTracker == false){
					openCompany(getFirstInstanceOfCompanyID(e.rowData.companyID, mainArray), mainArray);
				}else{
					longpressTracker = false;
				}
			});
			row.addEventListener('longpress', function(e){
				longpressTracker = true;
				//openQuickActionView(getFirstInstanceOfCompanyID(e.rowData.companyID));
			});
			
			//Push the row to the end of the array here
			rowArray.push(row);
		}
	}else{
		var row = Ti.UI.createTableViewRow({
			height: 80,
			title:"Sorry! No deals in your area."
		});
		rowArray.push(row);
	}
	//set listview.data here
	return rowArray;
}



searchResultsTitle.add(searchResultsBack);
searchResultsView.add(searchResultsTitle);
searchResultsView.add(searchResultsList);
MainWindow.add(searchResultsView);
