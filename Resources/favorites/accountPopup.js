
//Need another disable view to be behind the buttons
var accountSetupPopup_disable = Ti.UI.createView({
	zIndex:20,
	width:'100%',
	height:'100%',
	backgroundColor:'#000',
	opacity:0.8
});
var accountSetupPopup_label = Ti.UI.createLabel({
	zIndex:21,
	text:"Information about how you will be signing up for an account and how we will be collecting some information about you.",
	width:'85%',
	color:"#fff",
	top:50
});
var accountSetupPopup_Button = Ti.UI.createButton({
	zIndex:21,
	bottom:90,
	title:'Enable Favorites',
	width:'90%',
	height:'10%',
	backgroundColor:'#333',
	color:'#DDD'
});
var accountSetupPopup_cancel = Ti.UI.createButton({
	zIndex:21,
	bottom:190,
	title:'Cancel',
	width:'90%',
	height:'10%',
	backgroundColor:'#333',
	color:'#DDD'
});
accountSetupPopup_disable.add(accountSetupPopup_cancel);
accountSetupPopup_disable.add(accountSetupPopup_Button);
accountSetupPopup_disable.add(accountSetupPopup_label);

accountSetupPopup_cancel.addEventListener('click', function(){
	disableAccount_background();
});

function disableAccount_background(){
	favorites_view.remove(accountSetupPopup_disable);
}

function enableAccount_backgrond(){
	favorites_view.add(accountSetupPopup_disable);
}