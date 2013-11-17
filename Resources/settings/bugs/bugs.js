var bugtextbox = Ti.UI.createTextArea({
	width:'90%',
	height:'60%',
	top:70,
	zIndex:1001
});
var buglabel = Ti.UI.createLabel({
	text:"Help Us Improve",
	color:whiteColor,
	top:20,
	width:'90%',
	font:{fontWeight:'bold', fontSize:20},
	zIndex:1001,
	color:orangeColor
});
if(iOSversion > 6){
	buglabel.top += 10;
}
var bugsubmit = Ti.UI.createButton({
	width:'90%',
	height:'10%',
	bottom:'15%',
	title:"Submit!",
	color:whiteColor,
	zIndex:1001,
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	color:orangeColor
});
var bugcancel = Ti.UI.createButton({
	width:'90%',
	height:'10%',
	bottom:10,
	title:"Cancel",
	color:whiteColor,
	zIndex:1001,
	style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
	color:orangeColor
});

bugsubmit.addEventListener('click', function(){
	var bugRequest = createDbRequest();
	addPostVariable('date', (new Date()).getTime());
	addPostVariable('text', bugtextbox.value);
	addPostVariable('extra', "iOS="+Ti.Platform.version);
	sendDbRequest("http://dealfish.genyapps.com/app/submitBug.php", bugRequest);
	bugRequest.onload = function(e){
		if(this.responseText == "true"){
			alert("Thank you for your submission!");
			closeBugs();
		}else{
			alert("Our servers seem to be having trouble. Try again?");
			alert(this.responseText);
		}
	};
});
bugcancel.addEventListener('click', function(){
	closeBugs();
});

function openBugs(){
	disable_background();
	MainWindow.add(bugtextbox);
	MainWindow.add(buglabel);
	MainWindow.add(bugcancel);
	MainWindow.add(bugsubmit);
}
function closeBugs(){
	enable_backgrond();
	MainWindow.remove(bugtextbox);
	MainWindow.remove(buglabel);
	MainWindow.remove(bugcancel);
	MainWindow.remove(bugsubmit);
}
