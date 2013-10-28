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
var companyName = Titanium.UI.createLabel({
	title: getCompanyName(),
	width: 200, 
	height: 60, 
	top: 50, 
	left: 50
});
companyview.add(backButton);
MainWindow.add(companyview);

function getCompanyName(){
	for(i=0; i!=currentLocations.length; i++){
		var name = currentLocations[i][1];
	}
	return name;
}