Ti.include('../company/ui.js');

var mapview = Ti.UI.createView({
	left: 0,
	height: '100%', 
	width: '100%',
	bottom:0
});


var mapTitle = Ti.UI.createView({
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
mapTitle.add(mapTitle_label);

var testAnnotation = Titanium.Map.createAnnotation ({
	latitude: 40.424447,
	longitude: -86.907896,
	title: "Egyptian Cafe",
	subtitle: "Click the Button on the bottom to get your deal!", 
	pincolor: Titanium.Map.ANNOTATION_GREEN,
	animate: true,
	myid: 1
});
var map = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region:{latitude:40.424447, longitude:-86.907896, latitudeDelta:0.5, longitudeDelta:0.5},
    animate:true,
    regionFit:true,
    userLocation:true, 
    visible: true, 
    width:'100%',
    height:'88%',
    bottom:0,
    left:0,
    //left:screen_width
    //annotations:[testAnnotation]
});

var track_button = Ti.UI.createButton({
	bottom:70,
	right:15,
	zIndex:999,
	height:25,
	width:50,
	font:{fontSize:12},
	title:"Ignore",
	zIndex:10,
	borderColor:iOSBlue,
	borderRadius:13,
});
// map view click event listener
map.addEventListener('click', function(e){
	if(e.clicksource == "rightButton"){
		MainWindow.animate({
			view: companyview,
			transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT,
		});
		navigation.visible = true;
	}
});

mapview.add(mapTitle);
mapview.add(map);
mapview.add(track_button);

MainWindow.add(mapview);