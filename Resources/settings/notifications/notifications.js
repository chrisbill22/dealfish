Ti.include("ui.js");

var rowHeight = 40;

var notificationsRows = [];

function openNavigationSettings(){
	populateNavigationSettigns();
	notifications_view.animate({left:0});
}

function populateNavigationSettigns(){
//	notificationsRows = [{title:"Disable All Notifications", backgroundColor:'#555', color:orangeColor}];
	for(var i=0; i!=favorites.length; i++){
		for(var x=1; x!=favorites[i].length; x++){
			if(favorites[i][x][5] == true){
				var tempRow = Ti.UI.createTableViewRow({
					title:favorites[i][x][0],
					height:rowHeight,
					companyID:favorites[i][x][1],
					color:blackColor,
					indexI:i,
					indexX:x
				});
				notificationsRows.push(tempRow);
				notificationsRows[notificationsRows.length-1].addEventListener('click', function(e){
					start_loading();
					disablePushCompany(e.source.compID, e.source, e.source.loadingObj, e.source.indexI, e.source.indexX);
				});
			}
		}
	}
	if(notificationsRows.length == 0){
		var tempRow = Ti.UI.createTableViewRow({
			title:"No Notifications Enabled",
			height:rowHeight,
			color:blackColor
		});
		notificationsRows.push(tempRow);
	}
	notifications_list.data = notificationsRows;
}

function closeNavigationSettings(){
	notifications_view.animate({left:screen_width});
}
/*
notifications_list.addEventListener('click', function(e){
	if(e.index == 0){
		var disableNotificationAlters = Ti.UI.createAlertDialog({
			title:"Are You Sure?",
			message:"You will no longer receive any notifications about any new deals.",
			buttonNames:['Disable','Cancel']
		});
		disableNotificationAlters.addEventListener('click', function(e){
			if(e.index == 0){
				
			}
		});
		disableNotificationAlters.show();
	}
});
*/
Ti.App.addEventListener('unsubscribed', function(e){
	alert("unsubscribed!");
	clearFavoriteList();
	favorites[e.i][e.x][5] = false;
	populateNavigationSettigns();
	populateFavoriteList();
	stop_loading();
});

notificationsBack.addEventListener('click', function(){
	closeNavigationSettings();
});
