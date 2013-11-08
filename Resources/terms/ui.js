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
	top: '10%', 
	left: 0, 
	height: '100%', 
	text: 'Terms of Service'
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

function openTerms(){
	termsview.animate({
		bottom: 0
	});
}
