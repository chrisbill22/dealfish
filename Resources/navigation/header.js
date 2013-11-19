var mainHeader = Ti.UI.createView({
	height:headerHeight,
	top:0,
	left:0,
	backgroundImage: 'images/topBarTrue.png',
	zIndex:10
});
var mainHeader_label = Ti.UI.createLabel({
	text:"Current Deals",
	bottom:15,
	color:whiteColor,
});

if(iOSversion < 7){
	nav_search.bottom = 12;
	nav_settings.bottom = 12;
	mainHeader_label.font = {fontSize:23};
	mainHeader_label.bottom = 10;
}


function setNewHeaderTitle(title){
	if(title == "list"){
		title = "Current Deals";
	}
	title = capitaliseFirstLetter(title);
	mainHeader_label.animate({
		bottom:-50
	}, function(){
		mainHeader_label.text = title;
		//mainHeader_label.bottom = 0;
		mainHeader_label.animate({
			bottom:10
		});
	});
}

nav_search.add(nav_search_img);
nav_settings.add(nav_settings_img);
mainHeader.add(nav_search);
mainHeader.add(nav_settings);
mainHeader.add(mainHeader_label);

MainWindow.add(mainHeader);
