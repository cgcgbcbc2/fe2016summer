function search(){
	//输入可变参数为数字时
	if (typeof arguments[1] == "number"){
		var arr = new Array();
		var loc = 0;
		for(var i = 0; i < arguments[0].length; i++){
			if(arguments[0][i].age == arguments[1]){
				arr[loc] = arguments[0][i];
				loc++;
			}
		}
		console.log(arr);
		if(arr.length == 0){
			return false;
		}
		else{
			return arr;
		}
	}
	
	//输入可变参数为字符串时
	if (typeof arguments[1] == "string"){
		var obj;
		for(var i = 0; i < arguments[0].length; i++){
			if(arguments[0][i].name == arguments[1]){
				obj = arguments[0][i];
				return obj;
			}
		}
		return false;
	}
	
	
	//输入可变参数为对象时
	if (typeof arguments[1] == "object"){
		var arr1 = new Array();		//用作筛选第一条件后的数组
		if(arguments[1].hasOwnProperty("name")){
			var loc = 0;
			for(var i = 0; i < arguments[0].length; i++){
			if(arguments[0][i].name == arguments[1].name){
				arr1[loc] = arguments[0][i];
				loc++;
			}
		}
		}
		else{
			arr1 = arguments[0];
		}
		
		var arr2 = new Array()	//筛选年龄条件
		if(arguments[1].hasOwnProperty("age")){
			var loc = 0;
			for(var i = 0; i < arr1.length; i++){
			if(arr1[i].age == arguments[1].age){
				arr2[loc] = arr1[i];
				loc++;
			}
		}
		}
		else{
			arr2 = arr1;
		}
		
		var arr3 = new Array()		//筛选hometown
		if(arguments[1].hasOwnProperty("hometown")){
			var loc = 0;
			for(var i = 0; i < arr2.length; i++){
				if(arr2[i].hometown == arguments[1].hometown){
					arr3[loc] = arr2[i];
					loc++;
				}
			}
		}
		else{
			arr3 = arr2;
		}
		
		if(arr3.length != 0){
			return arr3;
		}
		else {
			return false;
		}
	}
}


/* search([{ name: "Amy",   age: 21,   hometown: 'BeiJing' } ,
{name: "Mark",   age: 19,   hometown: 'Wuhan' },
{name: "kobe",   age: 19,   hometown: 'BeiJing'}], {age: 19}) */
