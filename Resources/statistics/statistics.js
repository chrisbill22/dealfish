/*
 * 0 = merchID
 * 1 = visit date
 * 2 = total time on company page
 * 3 = deal ID number 1
 * 4 = deal ID number 2
 */
var statistics = [];
var aStat = [];
function startCollectingStats(merchID){
	aStat = [];
	aStat[0] = merchID;
	aStat[1] = new Date().getTime();
	aStat[2] = 0;
	for(i=0; i!=currentLocations.length; i++){
		if(currentLocations[i][1] == merchID){
			aStat.push(currentLocations[i][15]);
		}
	}
	alert(aStat);	
}
function stopCollectingStats(){
	aStat[2] = new Date().getTime()-aStat[1];
	statistics.push(aStat);
	aStat = [];
	sendStats();
}

function sendStats(){
	if(statistics.length > 0){
		var statRequest = createDbRequest();
		
		statRequest.onload = function(e){
			var result = this.responseText;
			alert(result);
			if(result.indexOf("true") != -1){
				statistics = [];
				Ti.API.info("Stats send success.");
			}else{
				Ti.API.warn("Error in sending statistics.. Will try again later");
			}
		};
		
		addPostVariable('auth', 'd45e88w9');
		var sendStatString = "";
		for(x=0; x != statistics.length; x++){
			sendStatString += "array(";
			for(y=0; y != statistics[x].length; y++){
				sendStatString += "'"+statistics[x][y]+"'";
				if(y != statistics[x].length - 1){
					sendStatString += ",";
				}
			}
			sendStatString += ")";
			if(x != statistics.length - 1){
				sendStatString += ", ";
			}
		}
		addPostVariable('statData', sendStatString);
		
		sendDbRequest("http://dealfish.genyapps.com/app/getStatistics.php", statRequest);
	}else{
		Ti.API.info("No Stats");
	}
}


