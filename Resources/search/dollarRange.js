var oneDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 20, 
	top: 110, 
	title: '$', 
	backgroundColor: "#FFF",
	color:orangeColor
});
oneDollar.addEventListener('click', function(){
	var amount = "one";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		oneDollar.backgroundColor = orangeColor;
		oneDollar.color = '#fff';
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		oneDollar.backgroundColor = '#FFF';
		oneDollar.color = orangeColor;
	}
	
});
var twoDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 90, 
	top: 110, 
	title: '$$', 
	backgroundColor: "#FFF",
	color:orangeColor
});
twoDollar.addEventListener('click', function(){
	var amount = "two";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		twoDollar.backgroundColor = orangeColor;
		twoDollar.color = '#fff';
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		twoDollar.backgroundColor = '#FFF';
		twoDollar.color = orangeColor;
	}
	
});
var threeDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 160, 
	top: 110, 
	title: '$$$', 
	backgroundColor: "#FFF",
	color:orangeColor
});
threeDollar.addEventListener('click', function(){
	var amount = "three";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		threeDollar.backgroundColor = orangeColor;
		threeDollar.color = '#fff';
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		threeDollar.backgroundColor = '#FFF';
		threeDollar.color = orangeColor;
	}
	
});
var fourDollar = Titanium.UI.createButton({
	height: 40, 
	width: 70, 
	left: 230, 
	top: 110, 
	title: '$$$$', 
	backgroundColor: "#FFF",
	color:orangeColor
});
fourDollar.addEventListener('click', function(){
	var amount = "four";
	if(priceRanges.indexOf(amount) == -1){
		priceRanges.push(amount);
		fourDollar.backgroundColor = orangeColor;
		fourDollar.color = '#fff';
	}else{
		priceRanges.splice(priceRanges.indexOf(amount), 1);
		fourDollar.backgroundColor = '#FFF';
		fourDollar.color = orangeColor;
	}
	
});

search_view.add(oneDollar, twoDollar, threeDollar, fourDollar);
/*
search_view.add(twoDollar);
search_view.add(threeDollar);
search_view.add(fourDollar);
*/