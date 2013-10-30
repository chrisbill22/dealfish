var companyview = Titanium.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:screen_height,
	backgroundColor: '#fff',
	zIndex: 21
});
var backButton = Titanium.UI.createButton({
	title: 'Back', 
	width: 100, 
	height: 50, 
	top: 10, 
	left: 0, 
});
function openCompany(id){
	companyview.animate({
		bottom: 0
	});
	var titleLabel = Titanium.UI.createLabel({
		text: currentLocations[id][1],
		width: '50%',
		height: 50,
		borderWidth: 1, 
		top: 70, 
		right: 10,
	});
	var descriptionLabel = Titanium.UI.createLabel({
		text: currentLocations[id][0],
		width: '50%',
		height: 50,
		borderWidth: 1,
		top: 120,
		right: 10
	});
	companyview.add(titleLabel);
	companyview.add(descriptionLabel);
}
companyview.add(backButton);
MainWindow.add(companyview);