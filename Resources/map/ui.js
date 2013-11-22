var mapview = Ti.UI.createView({
	left: 0,
	height: viewHeight, 
	width: '100%',
	top:headerHeight,
	zIndex:0,
	opacity:0,
	backgroundImage:masterBackground
});

var mapTitle = Ti.UI.createView({
	height:'12%',
	top:0,
	left:0,
	backgroundImage: 'images/topBarTrue.png'
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
    //mapType: Titanium.Map.STANDARD_TYPE,
    //region:{latitude:40.424447, longitude:-86.907896, latitudeDelta:0.5, longitudeDelta:0.5},
    //animate:true,
    //regionFit:true,
    //userLocation:true, 
    //visible: true, 
    width:'100%',
    height:'100%',
    bottom:0,
    left:0,
    annotations:[]
    //hideAnnotationWhenTouchMap:true
    //left:screen_width
    //annotations:[testAnnotation]
});

var track_button = Ti.UI.createButton({
	bottom:25,
	right:15,
	height:25,
	width:50,
	font:{fontSize:12},
	title:"Track",
	zIndex:10,
	borderColor:orangeColor,
	borderRadius:13,
});

// map view click event listener
map.addEventListener('click', function(e){
	if(e.clicksource == "rightButton"){
		openCompany(e.annotation.myid);
	}
});


//mapview.add(mapTitle);
mapview.add(map);
//mapview.add(track_button);

MainWindow.add(mapview);