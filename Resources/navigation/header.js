var mainHeader = Ti.UI.createView({
	height:'12%',
	top:0,
	left:0,
	backgroundImage: 'images/topBarTrue.png',
	zIndex:10
});
var mainHeader_label = Ti.UI.createLabel({
	text:"Home",
	bottom:10
});


function setNewHeaderTitle(title){
	if(title == "list"){
		title = "Home";
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


mainHeader.add(nav_search);
mainHeader.add(nav_settings);
mainHeader.add(mainHeader_label);

MainWindow.add(mainHeader);
