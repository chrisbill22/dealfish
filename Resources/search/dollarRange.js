var oneDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 20, 
	top: 110, 
	title: '$', 
	backgroundColor: whiteColor,
	color:orangeColor
});
oneDollar.addEventListener('click', function(){
	searchBar.blur();
	var amount = "one";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		oneDollar.backgroundColor = orangeColor;
		oneDollar.color = whiteColor;
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		oneDollar.backgroundColor = whiteColor;
		oneDollar.color = orangeColor;
	}
	
});
var twoDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 90, 
	top: 110, 
	title: '$$', 
	backgroundColor: whiteColor,
	color:orangeColor
});
twoDollar.addEventListener('click', function(){
	searchBar.blur();
	var amount = "two";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		twoDollar.backgroundColor = orangeColor;
		twoDollar.color = whiteColor;
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		twoDollar.backgroundColor = whiteColor;
		twoDollar.color = orangeColor;
	}
	
});
var threeDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 160, 
	top: 110, 
	title: '$$$', 
	backgroundColor: whiteColor,
	color:orangeColor
});
threeDollar.addEventListener('click', function(){
	searchBar.blur();
	var amount = "three";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		threeDollar.backgroundColor = orangeColor;
		threeDollar.color = whiteColor;
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		threeDollar.backgroundColor = whiteColor;
		threeDollar.color = orangeColor;
	}
	
});
var fourDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 230, 
	top: 110, 
	title: '$$$$', 
	backgroundColor: whiteColor,
	color:orangeColor
});
fourDollar.addEventListener('click', function(){
	searchBar.blur();
	var amount = "four";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		fourDollar.backgroundColor = orangeColor;
		fourDollar.color = whiteColor;
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		fourDollar.backgroundColor = whiteColor;
		fourDollar.color = orangeColor;
	}
	
});

search_view.add(oneDollar, twoDollar, threeDollar, fourDollar);
/*
search_view.add(twoDollar);
search_view.add(threeDollar);
search_view.add(fourDollar);
*/