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
function getDBID(uuid){
	if(!uuid){
		uuid = generateID();
	}
	var checkUUIDrequest = createDbRequest();
	
	addPostVariable("uuid", uuid);
	
	sendDbRequest("http://dealfish.genyapps.com/app/checkUUID.php", checkUUIDrequest);
	
	checkUUIDrequest.onload = function(e){
		var requestReturn = this.responseText;
		if(requestReturn.length > 0 && requestReturn == "false"){
			return true;
		}else{
			deviceID = generateID();
			Ti.API.log("Checking  "+deviceID);
			checkDBID(deviceID);
		}
	};
	
}

function signup(){
	if(!deviceID){
		var DBID = checkDBID();
		//alert(uuid);
		var signupRequest = createDbRequest();
		addPostVariable("auth", "AjdD#Djv!@n");
		addPostVariable("uuid", DBID);
		sendDbRequest("http://dealfish.genyapps.com/app/addUser.php", signupRequest);
		signupRequest.onload = function(e){
			if(e.responseText == "true"){
				alert("Account Created Successfully");
				deviceID = DBID;
				Ti.App.Properties.setString("deviceID". DBID);
			}else{
				alert("error\n"+e.responseText);
			}
		};
	}
}


accountSetupPopup_Button.addEventListener('click', function(){
	signup();
	alert(deviceID);
});
