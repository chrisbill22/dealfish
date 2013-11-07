

for(var i = 0; i != categories.length; i++){
	var searchBox = Titanium.UI.createButton({
		width: boxWidth,
		height: boxHeight, 
		backgroundColor: '#fff', 
		backgroundImage: 'images/categories/'+categories[i]+'.png', 
		left: tempLeft, 
		top: tempTop, 
		categoryName: categories[i],
	});
	tempLeft = tempLeft + boxWidth + padding;
	if(tempLeft >= 280){
		tempTop = tempTop + boxHeight + padding; 
		tempLeft = padding;
	}
	
	var searchObjID = searchButtonObjects.length;
	searchButtonObjects.push(searchBox);
	
	searchButtonObjects[searchObjID].addEventListener('click', function(e){
		var categoryName = e.source.categoryName;
		if(searchCategories.indexOf(categoryName) == -1){
			e.source.backgroundColor = orangeColor;
			searchCategories.push(categoryName);
		}else{
			e.source.backgroundColor = '#fff';
			searchCategories.splice(searchCategories.indexOf(categoryName), 1);
		}
	});
	
	search_view.add(searchButtonObjects[searchObjID]);
}