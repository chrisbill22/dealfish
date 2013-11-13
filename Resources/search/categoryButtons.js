

for(var i = 0; i != categories.length; i++){
	var searchBox = Titanium.UI.createButton({
		width: boxWidth,
		height: boxHeight, 
		backgroundColor: whiteColor, 
		backgroundImage: 'images/categories/black/'+categories[i]+'.png', 
		left: tempLeft, 
		top: tempTop, 
		categoryName: categories[i],
		style:Ti.UI.iPhone.SystemButtonStyle.PLAIN
	});
	tempLeft = tempLeft + boxWidth + padding;
	if(tempLeft >= 280){
		tempTop = tempTop + boxHeight + padding; 
		tempLeft = padding;
	}
	
	var searchObjID = searchButtonObjects.length;
	searchButtonObjects.push(searchBox);
	
	searchButtonObjects[searchObjID].addEventListener('click', function(e){
		searchBar.blur();
		var categoryName = e.source.categoryName;
		if(searchCategories.indexOf(categoryName) == -1){
			e.source.backgroundImage = 'images/categories/white/'+e.source.categoryName+'.png';
			e.source.backgroundColor = orangeColor;
			searchCategories.push(categoryName);
		}else{
			e.source.backgroundImage = 'images/categories/black/'+e.source.categoryName+'.png';
			e.source.backgroundColor = whiteColor;
			searchCategories.splice(searchCategories.indexOf(categoryName), 1);
		}
	});
	
	search_view_scroll.add(searchButtonObjects[searchObjID]);
}