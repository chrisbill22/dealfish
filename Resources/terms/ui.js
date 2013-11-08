var termsview = Titanium.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:screen_height,
	backgroundColor: '#DDD',
	zIndex: 21, 
});
var termsTitle = Ti.UI.createView({
	height:'10%',
	top:0,
	left:0,
	backgroundColor:'#FF6600',
});
var termsbackButton = Titanium.UI.createButton({
	title: 'Back', 
	width: 100, 
	height: 50, 
	top: 10, 
	left: 0, 
});
var textview = Titanium.UI.createView({
	top: '15%',  
	width: '95%'  
});
var text = Titanium.UI.createLabel({
	text: "Terms of Service, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
	top: 0, 
	width: '100%',
	backgroundColor: "#FFF", 
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, 
});
termsbackButton.addEventListener('click', function(){
	termsview.animate({
		bottom: screen_height
	});
});

MainWindow.add(termsview);
termsview.add(termsTitle);
termsTitle.add(termsbackButton);
termsview.add(textview);
textview.add(text);

function openTerms(){
	termsview.animate({
		bottom: 0
	});
}
