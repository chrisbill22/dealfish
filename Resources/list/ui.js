Ti.include("fetchList.js");
//Main List View
var listview = Ti.UI.createView({
	left: 0,
	height: viewHeight, 
	width: '100%',
	top:headerHeight,
	zIndex:0,
	backgroundImage:masterBackground
});

var listTitle = Ti.UI.createView({
	height:'10%',
	top:0,
	left:0,
	backgroundImage: 'images/topBarTrue.png',
	borderWidth:0
});
var listTitle_label = Ti.UI.createLabel({
	text:"Home",
	left:'10%',
	bottom:10
});

var list_pullRefreshView = Ti.UI.createView({
	width:'100%',
	height:60,
	backgroundColor:blackColor
});
var list_pullRefreshView_label = Ti.UI.createLabel({
	text:'Pull To Update',
	color:whiteColor,
	width:200,
	height:'auto',
	bottom:15,
	textAlign:'center'
});
list_pullRefreshView.add(list_pullRefreshView_label);

var list_tableview = Ti.UI.createTableView({
	right: 0,
	height: '100%', 
	width: '100%',
	bottom:0,
	rowHeight:80,
	style: Ti.UI.iPhone.TableViewStyle.PLAIN,
	separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
	separatorColor: 'transparent',
	backgroundImage:masterBackground,
	headerPullView:list_pullRefreshView
});

var pulling = false;
var reloading = false;
list_tableview.addEventListener('scroll', function(e){
	var offset = e.contentOffset.y;
	if(offset <= -65.0 && !pulling){
		pulling = true;
		list_pullRefreshView_label.text = "Release to Update";
	}else if(pulling && offset > -65.0 && offset < 0){
		pulling = false;
		list_pullRefreshView.animate({backgroundColor:blackColor});
		list_pullRefreshView_label.text = "Pull To Update";
	}
});
list_tableview.addEventListener('dragend', function(e){
	if(pulling && !reloading){
		reloading = true;
		pulling = false;
		list_pullRefreshView.animate({backgroundColor:orangeColor});
		list_pullRefreshView_label.text = "Updating...";
		list_tableview.setContentInsets({top:60},{animated:true});
		fetchLocations();
		checkLocationsFetched();
		Ti.App.addEventListener('locationFetched', stopPullRefresh);
	}
});
function stopPullRefresh(){
	list_tableview.setContentInsets({top:0}, {animated:true});
	list_pullRefreshView.animate({backgroundColor:blackColor});
}

listTitle.add(listTitle_label);
listview.add(list_tableview);
MainWindow.add(listview);

