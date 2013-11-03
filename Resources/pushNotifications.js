var tempCompanyID = "";
var tempSubscribe = "";
function registerPushNotifications(companyID, subscribe){
	tempSubscribe = subscribe;
	tempCompanyID = companyID;
	if(Ti.App.Properties.getBool("pushSubscription") == false){
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
		Ti.API.log("info", "Already registered for push notifications");
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
    loginUser(tempCompanyID, tempSubscribe);
}

function deviceTokenError(e) {
	Titanium.API.log("error", "Failed to register for push notifications!");
    alert('Failed to register for push notifications! ' + e.error);
}



//---------------------------------------------------
//---------------------------------------------------
//---------------------------------------------------

function loginUser(companyID, subscribe){
    // Log in to ACS
    Cloud.Users.login({
        login: 'orangedog22',
        password: 'results'
    }, function (e) {
        if (e.success) {
            Ti.API.log('Push Notifications Login Successful');
            if(subscribe){
            	subscribeToChannel(companyID);
            }else{
            	unsubscribeToChannel(companyID);
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
	       Ti.App.Properties.setBool("pushSubscription", true);
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

