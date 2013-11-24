Ti.include("ui.js");

var rowHeight = 50;

var notificationsRows = [];

function openNavigationSettings(){
	populateNavigationSettigns();
	notifications_view.animate({left:0});
}

function populateNavigationSettigns(){
	notificationsRows = [];
	notificationsString = [];
//	notificationsRows = [{title:"Disable All Notifications", backgroundColor:'#555', color:orangeColor}];
	
	for(var i=0; i!=favorites.length; i++){
		for(var x=1; x!=favorites[i].length; x++){
			/*if(favorites[i][x][5] == true){
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
			}*/
			if(notificationsString.indexOf(favorites[i][x]) == -1){
				notificationsString.push([favorites[i][x], i, x]);
			}
		}
	}

	for(var i=0; i!= notificationsString.length; i++){
		var tempRow = Ti.UI.createTableViewRow({
			title:notificationsString[i][0][0],
			height:rowHeight,
			companyID:notificationsString[i][0][1],
			color:blackColor
		});
		
		var tempOnOff = Ti.UI.createButton({
			right:15,
			height:49/2,
			width:52/2,
			compID:notificationsString[i][0][1],
			indexI:notificationsString[i][1],
			indexX:notificationsString[i][2]
		});
		
		if(pushNotifications.indexOf(notificationsString[i][0][1]) != -1){
			tempOnOff.backgroundImage = 'images/bellActive.png';
		}else{
			tempOnOff.backgroundImage = 'images/bellInactive.png';
		}
		
		tempOnOff.addEventListener('click', function(e){
			start_loading();
			if(e.source.backgroundImage == 'images/bellActive.png'){
				disablePushCompany(e.source.compID, e.source, "", e.source.indexI, e.source.indexX);
				Ti.App.addEventListener('unsubscribed', tempOnOffDeactivate);
			}else if(e.source.backgroundImage == 'images/bellInactive.png'){
				enablePushCompany(e.source.compID, e.source, "", e.source.indexI, e.source.indexX);
				Ti.App.addEventListener('subscribed', tempOnOffActivate);
			}
		});
		
		function tempOnOffDeactivate(e){
			stop_loading();
			//pushNotifications.splice(pushNotifications.indexOf(e.companyID), 1);
	        favorites[e.i][e.x][5] = false;
			//e.switchSource.backgroundImage = 'images/bellInactive.png';
			Ti.App.removeEventListener('unsubscribed', tempOnOffDeactivate);
		}
		
		function tempOnOffActivate(e){
			stop_loading();
			//pushNotifications.push(e.companyID);
	        favorites[e.i][e.x][5] = true;
			//e.switchSource.backgroundImage = 'images/bellActive.png';
			Ti.App.removeEventListener('subscribed', tempOnOffActivate);
		}
		
		tempRow.add(tempOnOff);
		notificationsRows.push(tempRow);
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
	clearFavoriteList();
	favorites[e.i][e.x][5] = false;
	populateNavigationSettigns();
	populateFavoriteList();
	stop_loading();
});

notificationsBack.addEventListener('click', function(){
	closeNavigationSettings();
});
