var privacyview = Titanium.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:screen_height,
	backgroundColor: '#DDD',
	zIndex: 21, 
});
var privacyTitle = Ti.UI.createView({
	height:'10%',
	top:0,
	left:0,
	backgroundColor:'#FF6600',
});
var privacybackButton = Titanium.UI.createButton({
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
	text: 'Privacy Statement'
});

privacybackButton.addEventListener('click', function(){
	privacyview.animate({
		bottom: screen_height
	});
});

MainWindow.add(privacyview);
privacyview.add(privacyTitle);
privacyTitle.add(privacybackButton);
privacyview.add(textview);

function openPrivacy(){
	privacyview.animate({
		bottom: 0
	});
}