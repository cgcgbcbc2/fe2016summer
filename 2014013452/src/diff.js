/*
请同学们再针对进阶练习2,写一个diff函数,参数为两个同学信息数组,
返回一个数组——包含那些存在于第一个数组但是却不存在于第二个数组中
的同学信息(比较时只看name)组成的数组。
*/

function diff(arr1, arr2) {
	arr1.sort(function (obj1, obj2) {
		return (obj1.name > obj2.name) - 0.5;
	})
	arr2.sort(function (obj1, obj2) {
		return (obj1.name > obj2.name) - 0.5;
	})
	result = [];
	n = arr1.length;
	m = arr2.length;
	i = 0, j = 0;
	while (i != n && j != m) {
		if (arr1[i].name < arr2[j].name) {i = i + 1;}
		else if (arr1[i].name > arr2[j].name) {result.push(arr2[j]); j = j + 1;}
		else {j = j + 1;}
	}

	while (j != m) {
		result.push(arr2[j]);
		j = j + 1;
	}

	return result;
}



function diff_BF(arr1, arr2) {
	result = [];
	for (i in arr2) {
		found = false;
		for (j in arr1) {
			if (arr1[j].name == arr2[i].name) {
				found = true;
				break;
			}
		}
		if (found == false) {
			result.push(arr2[i]);
		}
	}
	return result;
}

// for testing
// var test1 = [
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
// ]

// var test2 = [
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
// ];

// console.log(diff(test1, test2));
// console.log(diff_BF(test1, test2));