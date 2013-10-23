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

function checkDBID(uuid){
	var testRequest = createDbRequest();
	
	addPostVariable("uuid", uuid);
	
	sendDbRequest("http://dealfish.genyapps.com/app/checkUUID.php", testRequest);
	
	testRequest.onload = function(e){
		var requestReturn = this.responseText;
		if(requestReturn.length > 0 && requestReturn == "false"){
			return true;
		}else{
			deviceID = generateID();
			Ti.API.log("Checking - 2 "+deviceID);
			checkDBID(deviceID);
		}
	};
	
}

function signup(){
	deviceID = generateID();
	Ti.API.log("Checking "+deviceID);
	checkDBID(deviceID);
	//alert(uuid);
}


accountSetupPopup_Button.addEventListener('click', function(){
	signup();
	alert(deviceID);
});
