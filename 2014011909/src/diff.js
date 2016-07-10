function diff(){
	var result[];
	for(var i = 0; i < arguments[1].length; ++i){
		var success = true;
		for(var j = 0; j < arguments[0].length; ++j){
			if(arguments[1][i].name == arguments[0][j].name){
				success = false;
				break;
			}
		}
		if(success){
			result.push(arguments[1][i]);
		}
	}
	return result;
}

