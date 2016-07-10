/*
第2讲的讲师“樊中恺”很喜欢大家,但是就是不知道大家的具体情况。
于是某个同学做了一个方法search来帮助我来查找关于同学的信息。

一个同学的信息可以用如下对象表 :
{
	name: "Amy", //英文名
	age: 21, //年龄
	hometown: 'BeiJing' //老家 
}

search 法有两个参数: 
第一个是由上面数据结构为元素组成的数组。 
第二个参数是一个可变参数,其值可以是:
	1,数字:表示查找所有年龄和这个数字相同的同学信息组成的数组,找不到的情况下返回false; 
	2,字符串:表示返回名称和该字符串同名的第一个同学的信息,找不到返回false; 
	3,对象:可以是包含name,age和hometown任意一个或多个信息的对象( 如{name: xxx, hometown: xxx})。要
求找到和这个对象匹配的同学信息组成的数组,如果找不到,返回false。
*/

function search() {
	argnum = arguments.length;
	if (argnum != 2) { 
		console.error("Invalid Arguments!");
		return;
	}
	infos = arguments[0];

	if (typeof arguments[1] == "number") {
		// case one
		ageresult = new Array;
		for (var i = 0; i < infos.length; i++) {
			if (infos[i]['age'] == arguments[1]) {
				ageresult.push(infos[i]);
			}
		}

		if (ageresult.length == 0) {return false;}
		else {return ageresult;}
		
	} else if (typeof arguments[1] == "string") {
		// case two
		for (var i = 0; i < infos.length; i++) {
			if (infos[i]['name'] == arguments[1]) {
				return infos[i];
			}
		}
		return false;

	} else if (typeof arguments[1] == "object") {
		// case three
		inforesult = new Array;
		for (var i = 0; i < infos.length; i++) {
			if ((arguments[1].name == undefined || infos[i].name == arguments[1].name) &&
				(arguments[1].age == undefined || infos[i].age == arguments[1].age) &&
				(arguments[1].hometown == undefined || infos[i].hometown == arguments[1].hometown)) {
				inforesult.push(infos[i]);
			}
			
		}
		if (inforesult.length == 0) {return false;}
		else {return inforesult;}
	} else {
		console.error("Invalid Arguments");
		return;
	}

}


// for testing
// var test = [
// 	{
// 		name : 'name1',
// 		age: 19,
// 		hometown: 'city1'
// 	},
// 	{
// 		name : 'name2',
// 		age: 10,
// 		hometown: 'city1'
// 	},
// 	{
// 		name : 'name3',
// 		age: 19,
// 		hometown: 'city2'
// 	},
// 	{
// 		name : 'name4',
// 		age: 20,
// 		hometown: 'city1'
// 	},
// 	{
// 		name : 'name1',
// 		age: 20,
// 		hometown: 'city3'
// 	},
// 	{
// 		name : 'name1',
// 		age: 19,
// 		hometown: 'city2'
// 	},
// 	{
// 		name : 'name5',
// 		age: 100,
// 		hometown: 'city7'
// 	},
// 	{
// 		name : 'name1',
// 		age: 19,
// 		hometown: 'city2'
// 	},
// 	{
// 		name : 'name6',
// 		age: 14,
// 		hometown: 'city8'
// 	},
// 	{
// 		name : 'name1',
// 		age: 19,
// 		hometown: 'city1'
// 	}
// ]

// var query1 = 100;

// var query2 = 'asdfs';

// var query3 = {
// 	name: 'name1',
// 	age: 19,
// 	hometown: 'city2'
// };

// console.log(search(test, query3));
