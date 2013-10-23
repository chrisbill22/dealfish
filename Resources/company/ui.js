var companyview = Titanium.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:0
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
			view: mapview,
			transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,
		});
});
companyview.add(backButton);
MainWindow.add(companyview);


