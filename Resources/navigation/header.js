var listTitle = Ti.UI.createView({
	height:'12%',
	top:0,
	left:0,
	backgroundColor:'#DDD',
	borderWidth:0
});
var listTitle_label = Ti.UI.createLabel({
	text:"Home",
	bottom:10
});


function setNewHeaderTitle(title){
	if(title == "list"){
		title = "Home";
	}
	title = capitaliseFirstLetter(title);
	listTitle_label.animate({
		bottom:-50
	}, function(){
		listTitle_label.text = title;
		//listTitle_label.bottom = 0;
		listTitle_label.animate({
			bottom:10
		});
	});
}


listTitle.add(nav_search);
listTitle.add(nav_settings);
listTitle.add(listTitle_label);

MainWindow.add(listTitle);
