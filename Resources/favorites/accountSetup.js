Ti.include("accountPopup.js");
var tempCompanyID, tempSubscribe, tempFavorite, tempSwitchSource, tempLoadingSource, tempI, tempX;

accountSetupPopup_Button.addEventListener('click', function(){
	registerPushNotifications();
	//disableAccount_background();
});

accountSetupPopup_cancel.addEventListener('click', function(){
	disableAccount_background();
	tempSwitchSource.show();
	if(tempLoadingSource){
		tempLoadingSource.hide();
	}
});

function hasAccount(companyID, subscribe, favorite, switchSource, loadingSource, i, x){
	if(!Ti.App.Properties.getString("pushSubscription")){
		Ti.API.info("No Account");
		tempCompanyID = companyID;
		tempSubscribe = subscribe;
		tempFavorite = favorite;
		tempSwitchSource = switchSource;
		tempLoadingSource = loadingSource;
		tempI = i;
		tempX = x;
		enableAccount_backgrond();
		return false;
	}else{
		if(!deviceToken){
			deviceToken = Ti.App.Properties.getString("pushSubscription");
		}
		Ti.API.info("Has Account");
		return true;
	}
}
