function search(){
	//若第二个参数为数字
	if(typeof arguments[1] === "number"){
		var result = [];
		for(var i = 0; i < arguments[0].length; ++i){
			if(arguments[0][i].age == arguments[1]){
				result.push(arguments[0][i]);
			}
		}
		if(result.length){
			return result;
		}
		return false;
	}
	//若第二个参数为字符串
	else if(typeof arguments[1] === "string"){
		for(var i = 0; i < arguments[0].length; ++i){
			if(arguments[0][i].name == arguments[1]){
				return arguments[0][i];
			}
		}
		return false;
	}
	//若第二个参数为对象
	else if(typeof arguments[1] === "object"){
		var result = [];
		for(var i = 0; i < arguments[0].length; ++i){
			//遍历成员
			var success = true;
			for(var member in arguments[1]){
				if(arguments[0][i][member] != arguments[1][member]){
					success = false;
					break;
				}
			}
			if(success){
				result.push(arguments[0][i]);
			}
		}
		if(result.length){
			return result;
		}
		else{
			return false;
		}
	}
}