Ti.include("ui.js");

function start_loading(){
	loading = true;
	disable_background();
	loading_text.visible = true;
	loading_text.animate({opacity:1, top:(screen_height*0.50)});
}

function stop_loading(){
	if(loading == true){
		loading_text.animate({opacity:0, top:(screen_height*0.45)}, function(){
			loading_text.visible = false;
		});
		enable_backgrond();
		loading = false;
	}
}

function disable_background(){
	background_disable.animate({opacity:0.7});
}

function enable_backgrond(){
	background_disable.animate({opacity:0});
}
