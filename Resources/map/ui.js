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
    //annotations:[testAnnotation]
});

var track_button = Ti.UI.createButton({
	bottom:55,
	width:'90%',
	title:"Track Location",
	zIndex:10,
	backgroundColor:'#DDD'
});

MainWindow.add(track_button);


MainWindow.add(mapview);