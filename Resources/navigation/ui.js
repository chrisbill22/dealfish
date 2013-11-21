var navigation_bottom = Ti.UI.createView({
	width:'100%',
	height:footerHeight,
	bottom:0,
	left:0,
	zIndex:10,
	backgroundColor:"#DDD"
});

var searchSettings_blackFade = Ti.UI.createView({
	width:'100%',
	height:'100%',
	zIndex:19,
	opacity:0,
	backgroundColor:'#000'
});

function enableSearchSettings(opacity){
	searchSettings_blackFade.opacity = opacity;
}

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
	bottom:13,
	left:0,
	height: 25, 
	width: 55
});
var nav_search_img = Ti.UI.createImageView({
	backgroundImage: 'images/searchTrue.png',
	height: 25, 
	width: 25
});


var settingsBackBt = Ti.UI.createButton({
	bottom:8,
	left: 0, 
	width: 46,
	height: 66/2, 
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
});
var settingsBackBt_img = Ti.UI.createImageView({
	image: 'images/arrowLeftTrue.png',
	width: 35/2,
	height: 66/2,
	top:0
});


var nav_settings = Ti.UI.createButton({ 
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	bottom:13,
	right:0,
	height: 25, 
	width: 55
});
var nav_settings_img = Ti.UI.createImageView({
	backgroundImage: 'images/settingsTrue.png', 
	height: 25, 
	width: 25
});

//LEFT TRANSITION
var left_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:blackColor,
	bottom:0,
	left:0,
	zIndex:5
});

//RIGHT TRANSITION
var right_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:blackColor,
	bottom:0,
	right:0,
	zIndex:5
});

var settings_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:blackColor,
	bottom:0,
	left:0,
	zIndex:21,
	visible:false
});

var search_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:blackColor,
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

