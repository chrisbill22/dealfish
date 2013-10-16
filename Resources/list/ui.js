Ti.include("fetchList.js");
var listview = Ti.UI.createTableView({
	right: 0,
	height: '95%', 
	width: '100%',
	bottom:0,
});
for (var i = 0; i != currentLocations.length; i++){
  var row = Ti.UI.createTableViewRow({
    className: 'row',
    objName: 'row',
    touchEnabled: true,
    height: 100
  });
  var label = Ti.UI.createLabel({
    backgroundColor:'#313F48',
    color: 'white',
    objName: 'label',
    text: currentLocations[i][1],
    touchEnabled: false,
    left: 0,
    width: 200
  });
  listview.add(row);
  row.add(label);
}
MainWindow.add(listview);

