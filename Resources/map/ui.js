/*var mapTitle = Ti.UI.createView({
	height:'12%',
	top:0,
	left:0,
	backgroundColor:'#DDD',
	borderWidth:0
});
var mapTitle_label = Ti.UI.createLabel({
	text:"Map",
	left:'10%',
	bottom:10
});


mapTitle.add(mapTitle_label);*/

var testAnnotation = Titanium.Map.createAnnotation ({
	latitude: 40.424447,
	longitude: -86.907896,
	title: "Egyptian Cafe",
	subtitle: "Click the Button on the bottom to get your deal!", 
	pincolor: Titanium.Map.ANNOTATION_GREEN,
	animate: true,
	myid: 1
});
var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region:{latitude:40.424447, longitude:-86.907896, latitudeDelta:0.5, longitudeDelta:0.5},
    animate:true,
    regionFit:true,
    userLocation:true, 
    visible: true, 
    width:'100%',
    height:'88%',
    bottom:0,
    left:screen_width
    //annotations:[testAnnotation]
});

var track_button = Ti.UI.createButton({
	top:0,
	width:'90%',
	title:"Track Location",
	zIndex:10,
	backgroundColor:'#DDD'
});
/*
//LEFT TRANSITION
var left_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:'#000',
	bottom:0,
	left:0
});
var startX_left;
var deltaX_left = 0;
left_slider.addEventListener('touchstart', function(e){
	search_view.zIndex = 1;
	startX_left = e.x;
});
left_slider.addEventListener('touchmove', function(e){
	if(deltaX_left <= 100){
		deltaX_left = (e.x-startX_left);
		var newLeft = (deltaX_left+(-1*screen_width));
		search_view.left = newLeft;
		if(deltaX_left > 100){
			searchFront("right");
		}
	}
});
left_slider.addEventListener('touchend', function(e){
	if(deltaX_left <= 100){
		search_view.animate({left:(-1*screen_width)}, function(){
			search_view.zIndex = 0;
		});
	}
	deltaX_left = 0;
});

//RIGHT TRANSITION
var right_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	//backgroundColor:'#000',
	bottom:0,
	right:0
});
var startX_right;
var deltaX_right = 0;
right_slider.addEventListener('touchstart', function(e){
	listview.zIndex = 1;
	startX_right = e.x;
});
right_slider.addEventListener('touchmove', function(e){
	if(deltaX_right >= -100){
		deltaX_right = (e.x-startX_right);
		var newRight = (deltaX_right+(screen_width));
		Ti.API.log("DeltaX = "+deltaX_right+", Right = "+newRight);
		listview.left = newRight;
		if(deltaX_right < -100){
			listFront("left");
		}
	}
});
right_slider.addEventListener('touchend', function(e){
	if(deltaX_right >= -100){
		listview.animate({left:(screen_width)}, function(){
			listview.zIndex = 0;
		});
	}
	deltaX_right = 0;
});


mapview.add(right_slider);
mapview.add(left_slider);
*/

mapview.add(track_button);

MainWindow.add(mapview);