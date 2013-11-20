function startCountDown(futureDate){
	
	var timeCount = Ti.UI.createLabel({
		text:""
	});
	
	var currentDate = new Date();

	var millisecondsLeft = futureDate - currentDate;
	var secondsLeft = Math.round(millisecondsLeft/1000);
	if(secondsLeft > 0){
		var minutesLeft = 0;
		var hoursLeft = 0;
		var daysLeft = 0;
		
		while(secondsLeft > 60){
			minutesLeft++;
			secondsLeft -= 60;
		}
		while(minutesLeft > 60){
			hoursLeft++;
			minutesLeft-=60;
		}
		while(hoursLeft > 24){
			daysLeft++;
			hoursLeft-=24;
		}
	
		var timeString = "";
		if(daysLeft == 0){
			if(hoursLeft == 0){
				if(hoursLeft < 10){
					timeString += "0";
				}
				timeString += hoursLeft+":";
				if(minutesLeft < 10){
					timeString += "0";
				}
				timeString += minutesLeft+":";
				if(secondsLeft < 10){
					timeString += "0";
				}
				timeString += secondsLeft;
			}else{
				timeString += hoursLeft+" Hours Left";
			}
		}else{
			if(daysLeft == 1){
				timeString = daysLeft+" day, "+hoursLeft;
				if(hoursLeft == 1){
					timeString += " hour";
				}else{
					timeString +=" hours";
				}
			}else{
				timeString = daysLeft+" days";
			}
			timeString += " left";
		}
		
		timeCount.text = timeString;
		
		setInterval(function(){
			timeString = "";
			if(secondsLeft == 0){
				if(minutesLeft == 0){
					if(hoursLeft == 0){
						if(daysLeft == 0){
							timeString = "Deal Expired";
						}else{
							daysLeft--;
							hoursLeft=23;
						}
					}else{
						hoursLeft--;
						minutesLeft+=59;
					}
				}else{
					minutesLeft --;
					secondsLeft = 59;
				}
			}else{
				secondsLeft--;
			}
			
			if(timeString != "Deal Expired"){
				if(daysLeft == 0){
					if(hoursLeft == 0){
						if(hoursLeft < 10){
							timeString += "0";
						}
						timeString += hoursLeft+":";
						if(minutesLeft < 10){
							timeString += "0";
						}
						timeString += minutesLeft+":";
						if(secondsLeft < 10){
							timeString += "0";
						}
						timeString += secondsLeft;
					}else{
						timeString += hoursLeft+" Hours Left";
					}
				}else{
					if(daysLeft == 1){
						timeString = daysLeft+" day, "+hoursLeft;
						if(hoursLeft == 1){
							timeString += " hour";
						}else{
							timeString +=" hours";
						}
					}else{
						timeString = daysLeft+" days";
					}
					timeString += " left";
				}
			}
			timeCount.text = timeString;
		}, 1000);
	}else{
		timeCount.text = "Deal Expired";
	}
	return timeCount;
}
