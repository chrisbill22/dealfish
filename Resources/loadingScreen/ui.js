var background_disable = Ti.UI.createView({
	width:'100%',
	height:'100%',
	backgroundColor:'#000',
	opacity:0,
	zIndex:1000
});

var loading_text = Ti.UI.createLabel({
	text:'Loading...',
	color:'#fff',
	top:(screen_height*0.55),
	visible:false,
	font:{fontSize:20},
	zIndex:1001
});

MainWindow.add(background_disable);
MainWindow.add(loading_text);

