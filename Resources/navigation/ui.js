var navigation_bottom = Ti.UI.createView({
	width:'100%',
	height:screen_width*0.2,
	bottom:0,
	left:0,
	zIndex:10,
	backgroundColor:"#DDD"
});


var nav_map = Ti.UI.createButton({ 
	width:BOTTOM_MENU_WIDTH_PER+"%",
	height:screen_width*0.2,
	backgroundColor:'#DDD',
	bottom:0,
	left:0,
	title:"Map"
});
var nav_list = Ti.UI.createButton({ 
	width:BOTTOM_MENU_WIDTH_PER+"%",
	height:screen_width*0.2,
	backgroundColor:'#333',
	bottom:0,
	left:BOTTOM_MENU_WIDTH_PER+"%",
	title:"Home"
});
var nav_favorites = Ti.UI.createButton({ 
	width:BOTTOM_MENU_WIDTH_PER+"%",
	height:screen_width*0.2,
	backgroundColor:'#DDD',
	bottom:0,
	left:(BOTTOM_MENU_WIDTH_PER*2)+"%",
	title:"Favorites"
});






var navigation_top = Ti.UI.createView({
	width:'100%',
	height:screen_width*0.2,
	top:0,
	left:0,
	zIndex:10,
});


var nav_search = Ti.UI.createButton({ 
	/*width:'20%',
	height:screen_width*0.2,
	borderRadius:30,
	backgroundColor:'#DDD',
	opacity:0.8,
	bottom:0,
	left:0,
	title:"Search"*/
	bottom:10,
	left:15,
	height:25,
	width:50,
	font:{fontSize:12},
	title:"Search",
	borderColor:iOSBlue,
	borderRadius:13,
});




var nav_settings = Ti.UI.createButton({ 
	/*width:'20%',
	height:screen_width*0.2,
	borderRadius:30,
	backgroundColor:'#DDD',
	opacity:0.8,
	bottom:0,
	left:'80%',
	title:"Settings"*/
	bottom:10,
	right:15,
	height:25,
	width:50,
	font:{fontSize:12},
	title:"Settings",
	borderColor:iOSBlue,
	borderRadius:13,
});

//LEFT TRANSITION
var left_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:'#000',
	bottom:0,
	left:0
});

//RIGHT TRANSITION
var right_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:'#000',
	bottom:0,
	right:0
});

//Add to list view because list view is by default the first view open
listview.add(right_slider);
listview.add(left_slider);

//navigation.add(nav_search);
navigation_bottom.add(nav_map);
navigation_bottom.add(nav_list);
navigation_bottom.add(nav_favorites);
//navigation.add(nav_settings);

MainWindow.add(navigation_bottom);

