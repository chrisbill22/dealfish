Ti.include("accountPopup.js");

function randNumb(min, max){
	return Math.floor((Math.random()*max)+min);
}
function generateID(){
	var chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","-","+","_","?","~"];
	var UUID = "";

	for(i=0; i!=50; i++){
		UUID += chars[randNumb(0, chars.length-1)];
	}
	
	return UUID;
}

//Starts with an ID and loops through until an avalible ID is found
function getDBID(){
	Ti.API.log("GETTING UUID");
	uuid = generateID();
	Ti.API.log("Checking  "+uuid);
	var checkUUIDrequest = createDbRequest();
	addPostVariable("uuid", uuid);
	sendDbRequest("http://dealfish.genyapps.com/app/checkUUID.php", checkUUIDrequest);
	checkUUIDrequest.onload = function(e){
		var requestReturn = this.responseText;
		if(requestReturn.length > 0 && requestReturn == "false"){
			signup(uuid);
			return uuid;
		}else{
			getDBID();
		}
	};
	
}

function signup(uuid){
	Ti.API.log("SIGNING UP");
	//var DBID = getDBID();
	//alert(uuid);
	var signupRequest = createDbRequest();
	addPostVariable("auth", "AjdD#Djv!@n");
	addPostVariable("uuid", uuid);
	sendDbRequest("http://dealfish.genyapps.com/app/addUser.php", signupRequest);
	signupRequest.onload = function(e){
		if(this.responseText == "true"){
			alert("Account Created Successfully");
			deviceID = uuid;
			Ti.App.Properties.setString("deviceID", uuid);
			disableAccount_background();
		}else{
			alert("error\n"+this.responseText);
		}
	};
}


accountSetupPopup_Button.addEventListener('click', function(){
	getDBID();
});

function hasAccount(){
	if(!deviceID){
		Ti.API.info("No Account");
		enableAccount_backgrond();
		return false;
	}else{
		Ti.API.info("Has Account");
		return true;
	}
}
