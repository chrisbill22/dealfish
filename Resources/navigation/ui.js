var navigation_bottom = Ti.UI.createView({
	width:'100%',
	height:footerHeight,
	bottom:0,
	left:0,
	zIndex:10,
	backgroundColor:"#DDD"
});


var nav_map = Ti.UI.createButton({
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	width:BOTTOM_MENU_WIDTH_PER+"%",
	height:footerHeight,
	backgroundColor:'#DDD',
	bottom:0,
	left:0,
	backgroundImage:'images/navigationOff.png'
});
var nav_list = Ti.UI.createButton({
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	width:BOTTOM_MENU_WIDTH_PER+"%",
	height:footerHeight,
	backgroundColor:'#333',
	bottom:0,
	left:BOTTOM_MENU_WIDTH_PER+"%",
	backgroundImage: 'images/homepageOn.png', 
});
var nav_favorites = Ti.UI.createButton({ 
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	width:BOTTOM_MENU_WIDTH_PER+"%",
	height:footerHeight,
	backgroundColor:'#DDD',
	bottom:0,
	left:(BOTTOM_MENU_WIDTH_PER*2)+"%",
	backgroundImage: 'images/favoritesOff.png'
});


var nav_search = Ti.UI.createButton({ 
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	bottom:10,
	left:15,
	backgroundImage: 'images/searchTrue.png',
	height: 25, 
	width: 25
});




var nav_settings = Ti.UI.createButton({ 
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	bottom:10,
	right:15,
	backgroundImage: 'images/settingsTrue.png', 
	height: 25, 
	width: 25
});

//LEFT TRANSITION
var left_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:'#000',
	bottom:0,
	left:0,
	zIndex:5
});

//RIGHT TRANSITION
var right_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:'#000',
	bottom:0,
	right:0,
	zIndex:5
});

var settings_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:'#000',
	bottom:0,
	left:0,
	zIndex:21,
	visible:false
});

var search_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:'#000',
	bottom:0,
	right:0,
	zIndex:21,
	visible:false
});

navigation_bottom.add(nav_map);
navigation_bottom.add(nav_list);
navigation_bottom.add(nav_favorites);

MainWindow.add(search_slider);
MainWindow.add(settings_slider);

MainWindow.add(right_slider);
MainWindow.add(left_slider);
MainWindow.add(navigation_bottom);

