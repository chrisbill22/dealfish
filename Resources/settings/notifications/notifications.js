Ti.include("ui.js");

var rowHeight = 40;

var notificationsRows = [];

function openNavigationSettings(){
	populateNavigationSettigns();
	notifications_view.animate({left:0});
}

function populateNavigationSettigns(){
	notificationsRows = [];
	for(var i=0; i!=favorites.length; i++){
		for(var x=1; x!=favorites[i].length; x++){
			if(favorites[i][x][5] == true){
				var tempRow = Ti.UI.createTableViewRow({
					title:favorites[i][x][0],
					height:rowHeight,
					companyID:favorites[i][x][1],
					color:'#000',
					indexI:i,
					indexX:x
				});
				notificationsRows.push(tempRow);
				notificationsRows[notificationsRows.length-1].addEventListener('click', function(e){
					disablePushCompany(e.source.compID, e.source, e.source.loadingObj, e.source.indexI, e.source.indexX);
				});
			}
		}
	}
	notifications_list.data = notificationsRows;
}

function closeNavigationSettings(){
	notifications_view.animate({left:screen_width});
}

Ti.App.addEventListener('unsubscribed', function(e){
	favorites[e.i][e.x][5] = false;
	alert(e);
	populateNavigationSettigns();
});

notificationsBack.addEventListener('click', function(){
	closeNavigationSettings();
});
