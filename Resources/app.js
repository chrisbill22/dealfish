//Hello!

var MainWindow = Ti.UI.createWindow({
	width:'100%',
	height:'100%',
	backgroundColor:'#fff'
});

var view = Ti.UI.createView({
	width:'50%',
	height:'13%',
	top:0,
	backgroundColor:'#123456'
});

var button = Ti.UI.createButton({
	bottom:25,
	width:'90%',
	title:"Hello World"
});
var testAnnotation = Titanium.Map.createAnnotation ({
	latitude: 33.74511,
	longitude: -84.38993,
	title: "Test",
	subtitle: "Test Subtitle", 
	pincolor: Titanium.Map.ANNOTATION_GREEN,
	animate: true,
	myid: 1
});

button.addEventListener('click', function(){
	alert("Hello World!");
});

var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region:{latitude:33.74511, longitude:-84.38993, latitudeDelta:0.5, longitudeDelta:0.5},
    animate:true,
    regionFit:true,
    userLocation:true, 
    visible: true, 
    annotations:[testAnnotation]
});
function getLocation(){
//Get the current position and set it to the mapview
Titanium.Geolocation.getCurrentPosition(function(e){
        var region={
            latitude: e.coords.latitude,
            longitude: e.coords.longitude,
            animate:true,
            latitudeDelta:0.001,
            longitudeDelta:0.001
        };
        mapview.setLocation(region);
});
}
MainWindow.add(button);
MainWindow.add(view);
MainWindow.open();
MainWindow.add(mapview);

 
Titanium.Geolocation.addEventListener('location',function(){
    getLocation();
});