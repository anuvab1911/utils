var fs = require('fs');

var path = process.env.PATH;
var tokensInPath = path.split(";");

var newPath = "";

for(var i=0,l=tokensInPath.length;i<l;i++){
	if(tokensInPath[i].trim() == ""){
		continue;
	}
	if(!fs.existsSync(tokensInPath[i])){
		console.log('Removing ' + tokensInPath[i] + ' from PATH');
	}
	else{
		newPath += tokensInPath[i] + ";";
	}
}

console.log("New PATH is " + newPath);