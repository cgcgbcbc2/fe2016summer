function search(stu, target){
	if (typeof target == 'object'){
		var result = [];
		for (var i = 0; i < stu.length; i++){
			if (target.name == undefined || target.name == stu[i].name){
				if (target.age == undefined || target.age == stu[i].age){
					if (target.homtown == undefined || target.homtown == stu[i].homtown){
						result.splice(0, 0, stu[i]);
					}
				}
			}
		}
		if (result.length){
			return result;
		}
		else return false;
	}
	else if (typeof target == 'string'){
		for (var i = 0; i < stu.length; i++){
			if (stu[i].name == target){
				return stu[i];
			}
		}
		return false;
	}
	else if (typeof target == 'number'){
		var result = [];
		for (var i = 0; i < stu.length; i++){
			if (stu[i].age == target){
				result.splice(0, 0, stu[i]);
			}
		}
		if (result.length){
			return result;
		}
		else return false;
	}
}