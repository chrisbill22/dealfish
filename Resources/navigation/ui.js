var navigation = Ti.UI.createView({
	width:'100%',
	height:screen_width*0.2,
	bottom:0,
	left:0,
	zIndex:999,
});


var nav_search = Ti.UI.createButton({ 
	width:'20%',
	height:screen_width*0.2,
	borderRadius:30,
	backgroundColor:'#fff',
	opacity:0.8,
	bottom:0,
	left:0,
	title:"Search"
});


var nav_map = Ti.UI.createButton({ 
	width:'20%',
	height:screen_width*0.2,
	borderRadius:30,
	backgroundColor:'#fff',
	opacity:0.8,
	bottom:0,
	left:'20%',
	title:"Map"
});


var nav_list = Ti.UI.createButton({ 
	width:'20%',
	height:screen_width*0.2,
	borderRadius:30,
	backgroundColor:'#fff',
	opacity:0.8,
	bottom:0,
	left:'40%',
	title:"List"
});

var nav_favorites = Ti.UI.createButton({ 
	width:'20%',
	height:screen_width*0.2,
	borderRadius:30,
	backgroundColor:'#fff',
	opacity:0.8,
	bottom:0,
	left:'60%',
	title:"Favorites"
});

var nav_settings = Ti.UI.createButton({ 
	width:'20%',
	height:screen_width*0.2,
	borderRadius:30,
	backgroundColor:'#fff',
	opacity:0.8,
	bottom:0,
	left:'80%',
	title:"Settings"
});

navigation.add(nav_search);
navigation.add(nav_map);
navigation.add(nav_list);
navigation.add(nav_favorites);
navigation.add(nav_settings);

MainWindow.add(navigation);

