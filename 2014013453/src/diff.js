/*
var infoArray1 = new Array(3);
infoArray1[0] = {name:"Jack",age:19,hometown:"London"};
infoArray1[1] = {name:"Tom",age:20,hometown:"Califonia"};
infoArray1[2] = {name:"Morrison",age:24,hometown:"Dorado"};

var infoArray2 = new Array(2)
infoArray2[0] = {name:"Zhang San",age:20,hometown:"Shanghai"};
infoArray2[1] = {name:"Odinson",age:19,hometown:"sdfjjkd"};
*/
function diff (infoArray1,infoArray2) {
	var resultArray = new Array();
	var k = 0;
	for(var i = 0; i < infoArray2.length;i++){
		var temp = infoArray2[i];
		for(var j = 0; j < infoArray1.length;j++){
			if(temp.name == infoArray1[j].name) break;
		}
		if(j == infoArray1.length){
			resultArray[k] = temp;
			k++;
		}
	}
	return resultArray;
}
/*
var result = diff(infoArray1,infoArray2);
console.log(result[0],result[1]);
*/