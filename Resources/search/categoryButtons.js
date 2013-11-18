

for(var i = 0; i != categories.length; i++){
	var searchBox = Titanium.UI.createButton({
		width: boxWidth,
		height: boxHeight, 
		backgroundColor: whiteColor, 
		//image: 'images/categories/black/'+categories[i]+'.png', 
		left: tempLeft, 
		top: tempTop, 
		categoryName: categories[i],
		style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
	});
	var categoryLabel = Titanium.UI.createLabel({
		text: categories[i], 
		bottom: 0, 
		textAlign: 'center',
		font: {fontSize: 10},
	});
	var categoryImage = Titanium.UI.createImageView({
		image: 'images/categories/black/'+categories[i]+'.png',
		width: boxWidth/1.25,
		height: boxHeight/1.25
	});
	tempLeft = tempLeft + boxWidth + padding;
	if(tempLeft >= 280){
		tempTop = tempTop + boxHeight + padding; 
		tempLeft = padding;
	}
	
	var searchObjID = searchButtonObjects.length;
	searchButtonObjects.push(searchBox);
	searchBox.add(categoryLabel);
	searchBox.add(categoryImage);
	searchButtonObjects[searchObjID].addEventListener('click', function(e){
		searchBar.blur();
		var categoryName = e.source.categoryName;
		if(searchCategories.indexOf(categoryName) == -1){
			e.source.children[1].image = 'images/categories/white/'+e.source.categoryName+'.png';
			e.source.children[1].width = boxWidth/1.25;
			e.source.children[1].height = boxHeight/1.25;
			e.source.backgroundColor = orangeColor;
			e.source.children[0].color = whiteColor;
			searchCategories.push(categoryName);
		}else{
			e.source.children[1].image = 'images/categories/black/'+e.source.categoryName+'.png';
			e.source.children[1].width = boxWidth/1.25;
			e.source.children[1].height = boxHeight/1.25;
			e.source.backgroundColor = whiteColor;
			e.source.children[0].color = blackColor;
			searchCategories.splice(searchCategories.indexOf(categoryName), 1);
		}
	});
	
	search_view_scroll.add(searchButtonObjects[searchObjID]);
}