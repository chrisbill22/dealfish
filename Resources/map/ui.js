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
    height:'95%',
    bottom:0,
    left:screen_width
    //annotations:[testAnnotation]
});

var track_button = Ti.UI.createButton({
	top:55,
	width:'90%',
	title:"Track Location",
	zIndex:10,
	backgroundColor:'#DDD'
});

var left_slider = Ti.UI.createView({
	width:25,
	height:'100%',
	backgroundColor:'#000',
	bottom:0,
	left:0
});

var startX;
var deltaX = 0;
left_slider.addEventListener('touchstart', function(e){
	startX = e.x;
});
left_slider.addEventListener('touchmove', function(e){
	if(deltaX <= 100){
		Ti.API.log("Delta X = "+(e.x-startX)+", Screen Left = "+((e.x-startX)+(-1*screen_width)));
		deltaX = (e.x-startX);
		var newLeft = (deltaX+(-1*screen_width));
		search_view.left = newLeft;
		if(deltaX > 100){
			searchFront("right");
		}
	}
});
left_slider.addEventListener('touchend', function(e){
	if(deltaX <= 100){
		search_view.animate({left:(-1*screen_width)});
	}
	deltaX = 0;
});

mapview.add(left_slider);
mapview.add(track_button);


MainWindow.add(mapview);