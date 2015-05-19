var Default = require("./config");
var Del = require("del");
var Fs = require("fs");
var Url = require("url");
var Walk = require('fs-walk');
var makeArray = require("make-array");
// 结果存储
var result = [];

function log(mes){
	console.log(mes);
}




// 清除老文件
Default.forEach(function(item){
	log("删除相应的manifest:"+item.name);
	// 删除相应的manifest
	Del.sync(Url.resolve(item.dist,item.name));
	log("删除manifest成功"+item.name);
	item.list&&item.list.forEach(function(obj){
		makeArray(obj.dir).forEach(function(dir){
			Walk.walkSync(dir, function(basedir, filename, stat) {
			    console.log(basedir,filename,stat);
			});
		})
		result.concat();
	})
})

