

function registerPushNotifications(){
	if(!Ti.App.Properties.getString("pushSubscription")){
		Ti.API.log("info", "Registering for push notifications");
		var deviceToken = null;
	
		Ti.Network.registerForPushNotifications({
		    // Specifies which notifications to receive
		    types: [
		        Ti.Network.NOTIFICATION_TYPE_BADGE,
		        Ti.Network.NOTIFICATION_TYPE_ALERT,
		        Ti.Network.NOTIFICATION_TYPE_SOUND
		    ],
		    success: deviceTokenSuccess,
		    error: deviceTokenError,
		    callback: receivePush
		});
	}else{
		deviceToken = Ti.App.Properties.getString("pushSubscription");
		Ti.API.log("info", "Already registered for push notifications: "+deviceToken);
	}
}
// Process incoming push notifications
function receivePush(e) {
	Titanium.API.log("info", "Incoming Push Notification!");
    alert('Received push: ' + JSON.stringify(e));
}
// Save the device token for subsequent API calls
function deviceTokenSuccess(e) {
	Titanium.API.log("info", "Device token stored: "+e.deviceToken);
    deviceToken = e.deviceToken;
    Ti.App.Properties.setString("pushSubscription", deviceToken);
    disableAccount_background();
	loginUser(tempCompanyID, tempSubscribe, tempFavorite, tempSwitchSource, tempLoadingSource, tempI, tempX);
}

function deviceTokenError(e) {
	Titanium.API.log("error", "Failed to register for push notifications!");
    alert('Failed to register for push notifications! ' + e.error);
    disableAccount_background();
}



//---------------------------------------------------
//---------------------------------------------------
//---------------------------------------------------
function favoriteSubscribe(companyID, switchSource, loadingSource, i, x){
	Ti.API.log("info", "Attempting to subscribe to channel using the device token: "+deviceToken);
	var channel = "Deals";
	if(companyID){
		channel = companyID;
	}
	Cloud.PushNotifications.subscribe({
	    channel: channel,
	    device_token: deviceToken,
	    type:'ios'
	}, function (e) {
	    if (e.success) {
	    	clearFavoriteList();
			Ti.API.log("Subscribed To Channel Successfully");
			pushNotifications.push(companyID);
			//Set true so that we don't try and subscribe again.
			favorites[i][x][5] = true;
			Ti.App.Properties.setList("pushNotifications", pushNotifications);
			Ti.App.Properties.setList("favorites", favorites);
			Ti.API.info("enable switch");
			//switchSource.backgroundImage = 'images/bellActive.png';
			//switchSource.show();
			//loadingSource.hide();
			populateFavoriteList();
	    } else {
	    	switchSource.backgroundImage = 'images/bellInactive.png';;
			switchSource.show();
			loadingSource.hide();
	        alert('Subscribe Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e))+
	            "\n\n"+deviceToken
	            );
	    }
	});
}
function favoriteUnsubscribe(companyID, switchSource, loadingSource, i, x){
	Ti.API.log("info", "Attempting to unsubscribe from channel");
	var channel = "Deals";
	if(companyID){
		channel = companyID;
	}
	Cloud.PushNotifications.unsubscribe({
	    channel: channel,
	    device_token: deviceToken,
	    type:'ios'
	}, function (e) {
	    if (e.success) {
	    	pushNotifications.splice(pushNotifications.indexOf(companyID), 1);
	        favorites[i][x][5] = false;
	        Ti.App.Properties.setList("pushNotifications", pushNotifications);
			Ti.App.Properties.setList("favorites", favorites);
			Ti.API.info("disable switch");
			if(loadingSource){
				clearFavoriteList();
				populateFavoriteList();
				//switchSource.backgroundImage = 'images/bellInactive.png';;
				//switchSource.show();
				//loadingSource.hide();
			}else{
				Ti.App.fireEvent('unsubscribed', {i:i, x:x});
			}
	    } else {
	    	switchSource.backgroundImage = 'images/bellInactive.png';;
			switchSource.show();
			loadingSource.hide();
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}

function loginUser(companyID, subscribe, favorite, switchSource, loadingSource, i, x){
    // Log in to ACS
    Cloud.Users.login({
    	
       login: 'orangedog22',
       password: 'results'
       
       //login: 'geny-beta',
       //password: 'results'
       
    }, function (e) {
        if (e.success) {
            Ti.API.log('Push Notifications Login Successful');
            if(subscribe){
            	if(favorite){
            		favoriteSubscribe(companyID, switchSource, loadingSource, i, x);
            	}else{
            		subscribeToChannel(companyID);
            	}
            }else{
            	if(favorite){
            		favoriteUnsubscribe(companyID, switchSource, loadingSource, i, x);
            	}else{
            		unsubscribeToChannel(companyID);
            	}	
            }
        } else {
            alert('Login Auth Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}

//This example subscribes to a push notification channel and checks the response.
function subscribeToChannel(companyID){
	Ti.API.log("info", "Attempting to subscribe to channel using the device token: "+deviceToken);
	var channel = "Deals";
	if(companyID){
		channel = companyID;
	}
	Cloud.PushNotifications.subscribe({
	    channel: channel,
	    device_token: deviceToken,
	    type:'ios'
	}, function (e) {
	    if (e.success) {
	       Ti.API.log("Subscribed To Channel Successfully");
	       //Set true so that we don't try and subscribe again.
	    } else {
	        alert('Subscribe Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e))+
	            "\n\n"+deviceToken
	            );
	    }
	});
}
//NOT USED YET - This example unsubscribes from a push notification channel and checks the response.
function unsubscribeToChannel(companyID){
	Ti.API.log("info", "Attempting to unsubscribe from channel");
	var channel = "Deals";
	if(companyID){
		channel = companyID;
	}
	Cloud.PushNotifications.unsubscribe({
	    channel: channel,
	    device_token: deviceToken
	}, function (e) {
	    if (e.success) {
	        alert('Success');
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}
//NOT USED YET - This example sends a push notification to a channel and checks the response.
function notifyChannel(){
	Ti.API.log("info", "Sending push notifiction");
	Cloud.PushNotifications.notify({
	    channel: 'Deals',
	    payload: 'Welcome to push notifications'
	}, function (e) {
	    if (e.success) {
	        alert('Success');
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}

/*
function unsubscribeAll(){
	Cloud.Users.login({
        login: 'orangedog22',
        password: 'results'
    }, function (e) {
        if (e.success) {
            Ti.API.log('Push Notifications Login Successful');
            for(var i=0; i!=favorites.length; i++){
	    		for(var x=1; x!=favorites[i].length; x++){
	    			if(favorites[i][x][5] == true){
			        	unsubscribeLoop(favorites[i][x][1]);
			        }
	    		}
	    	}
        } else {
            alert('Login Auth Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}

function unsubscribeLoop(channel){
	Cloud.PushNotifications.unsubscribe({
	    channel: channel,
	    device_token: deviceToken
	}, function (e) {
	    if (e.success) {
	    	for(var i=0; i!=favorites.length; i++){
	    		for(var x=1; x!=favorites[i].length; x++){
	    			if(favorites[i][x][5] == true){
			        	unsubscribeLoop(favorites[i][x][1]);
			        }
	    		}
	    	}
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
}
*/
