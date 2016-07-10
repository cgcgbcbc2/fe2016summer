"use strict";

function diff(){
	var arguLen = arguments.length;
	if(arguLen !== 2){
		return;
	}

	var stu = [];
	for(var i = 0; i < arguments[1].length; i++){
		var find = false;
		for(var j = 0; j < arguments[0].length; j++){
			if(arguments[1][i].name === arguments[0][j].name){
				find = true;
				break;
			}
		}

		if(!find){
			stu.push(arguments[1][i]);
		}
	}

	return stu;
}