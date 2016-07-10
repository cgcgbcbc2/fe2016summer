/*
var infoArray = new Array(5);
infoArray[0] = {name:"Jack",age:19,hometown:"London"};
infoArray[1] = {name:"Tom",age:20,hometown:"Califonia"};
infoArray[2] = {name:"Morrison",age:24,hometown:"Dorado"};
infoArray[3] = {name:"Zhang San",age:20,hometown:"Shanghai"};
infoArray[4] = {name:"Odinson",age:19,hometown:"sdfjjkd"};

var my_searchMeta={
	name:"Morrison",
	age:24
};
*/

function search (infoArray, searchMeta) {
	if(typeof searchMeta == "number"){
		var resultArray = new Array();
		var i = 0;
		for(var j = 0; j < infoArray.length;j++){
			if(infoArray[j].age == searchMeta){
				resultArray[i] = infoArray[j];
				i++;
			}
		}
		if(i == 0) return false;
		return resultArray;
	}
	//这里注意搜索名字的返回类型是对象而非数组
	else if(typeof searchMeta == "string"){
		var searcedObject = new Object();
		for(var i = 0; i < infoArray.length;i++){
			
			if(infoArray[i].name == searchMeta){
				searcedObject = infoArray[i];  
				return searcedObject;
			}
		}
		return false;
		
	}
	else if(typeof searchMeta == "object"){
		if(typeof searchMeta.name == "undefined" && typeof searchMeta.age == "undefined" && typeof searchMeta.hometown == "undefined"){
			return infoArray;
		}
		if(typeof searchMeta.hometown == "undefined"){
				searchMeta.hometown="";
		}
		if(typeof searchMeta.name == "undefined"){
				searchMeta.name="";
		}
		if(typeof searchMeta.age == "undefined"){
				searchMeta.age=-1;
		}
		var resultArray = new Array();
		var i = 0;
		for(var j = 0; j < infoArray.length;j++){
			if(infoArray[j].name == searchMeta.name || infoArray[j].age == searchMeta.age || infoArray[j].hometown == searchMeta.hometown){
				if(infoArray[j].name != searchMeta.name && searchMeta.name != "") continue;
				if(infoArray[j].age != searchMeta.age && searchMeta.age != -1) continue;
				if(infoArray[j].hometown != searchMeta.hometown && searchMeta.hometown != "") continue;
				resultArray[i] = infoArray[j];
				i++;
			}
		}
		if(i == 0) return false;
		return resultArray;
	}
}

/*
var result1 = search(infoArray,19);
var result2 = search(infoArray,"Tom");
var result3 = search(infoArray,my_searchMeta);
console.log(result1[0],result2,result3[0]);
*/
