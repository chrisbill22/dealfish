var companyview = Titanium.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:screen_height,
});
var backButton = Titanium.UI.createButton({
	title: 'Back', 
	width: 100, 
	height: 50, 
	top: 10, 
	left: 0
});
backButton.addEventListener('click', function(){
		MainWindow.animate({
			view: map,
			transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,
		});
		companyview.visible = false;
});
companyview.add(backButton);
MainWindow.add(companyview);


