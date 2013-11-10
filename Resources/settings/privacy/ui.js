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
var textview = Titanium.UI.createScrollView({
  	top: '15%',   
	contentHeight: 'auto', 
	contentWidth: 'auto', 
	showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});
var text = Titanium.UI.createLabel({
	text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
	top: 0, 
	width: '100%',
	backgroundColor: "#FFF", 
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, 
	height: 'auto'
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
textview.add(text);

function openPrivacy(){
	privacyview.animate({
		bottom: 0
	});
}