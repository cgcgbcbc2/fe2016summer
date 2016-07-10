function search(data, input){
	//若只有一个参数，返回所有资料
	if (arguments.length == 1){
		return data;
	}
	//如果搜索条件为数字
	if (typeof input == "number") {
		//声明数组
		var myArray = new Array();
		var j = 0;
		for (var i = data.length - 1; i >= 0; i--) {
			//符合条件即加入搜索结果
			if(data[i].age == input){
				myArray[j] = data[i];
				j++;
			}	
		}
		if (myArray.length != 0) {
			return myArray;
		}
		else {
			return false;
		}
	}
	//如果搜索条件为字符串（名称）
	else if (typeof input == "string") {
		var target;
		for (var i = data.length - 1; i >= 0; i--) {
			//找到第一个符合条件
			if(data[i].name == input){
				target = data[i];
				return target;
			}	
		}
		//未找到，返回false
		if (target == undefined) {
			return false;
		}
	}
	//如果搜索条件为对象
	else if(typeof input == "object"){
		var myArray = new Array();
		var j = 0;
		var flag = 1;
		for (var i = data.length - 1; i >= 0; i--) {
			//检查input所有属性是否符合
			for(var property in input){       
       			if (data[i][property] != input[property]) {
       				flag = 0;
       			}
    		} 
    		if (flag == 1) {
    			myArray[j] = data[i];
    			j++;
    		} 
    		flag = 1;
		}
		if (myArray.length != 0) {
			return myArray;
		}
		else {
			return false;
		}
	}
	//其他情况输入搜索条件不接受
	else {
		return false;
	}
}