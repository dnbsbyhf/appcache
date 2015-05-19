var Fs = require("fs");
var template = require("./template")
module.exports = function(key){
	var content  = Fs.readFileSync(key);



	return result.map(function(item){
		return template.replace("@value@",item);
	})
}