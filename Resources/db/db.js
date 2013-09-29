
var postVariables = {};

function createDbRequest(){
	var request = Titanium.Network.createHTTPClient({
		onerror : function(e){
			alert("error");
			Ti.API.error(e.error);
		},
		timeout:5000
	});
	return request;
}

function sendDbRequest(URL, request){
	//alert(postVariables);
	//alert({"Test":"Hello World"});
	request.open("POST", URL);
	request.send(postVariables);
}

function addPostVariable(name, value){
	postVariables[name] = value;
}

