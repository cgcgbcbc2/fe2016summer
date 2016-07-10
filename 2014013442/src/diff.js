function diff(studentInfo1, studentInfo2){
	var result = [];
	var InInfo1;
	for(var i = 0; i < studentInfo2.length; i++){
		InInfo1 = false;
		for(var j = 0; j < studentInfo1.length; j++){
			if(studentInfo2[i]['name'] == studentInfo1[j]['name']){
				InInfo1 = true;
				break
			}
		}

		if(!InInfo1){
			result.push(studentInfo2[i]);
		}
	}

	return result;
}

// var sInfo1 = [
// 	{
// 		name:'lmy',
// 		age:21,
// 		hometown:"bj",
// 	},
// 	{
// 		name:'gzc',
// 		age:19,
// 		hometown:"gz",
// 	},
// 	{
// 		name:'lsc',
// 		age:21,
// 		hometown:"bj",
// 	},
// 	{
// 		name:'xyj',
// 		age:20,
// 		hometown:"xm",
// 	}
// ];

// var sInfo2 = [
// 	{
// 		name:'lmy',
// 		age:21,
// 		hometown:"bj",
// 	},
// 	{
// 		name:'gzc',
// 		age:19,
// 		hometown:"gz",
// 	},
// 	{
// 		name:'lsc',
// 		age:21,
// 		hometown:"bj",
// 	},
// 	{
// 		name:'xyj',
// 		age:20,
// 		hometown:"xm",
// 	}
// ]

// console.log(diff(sInfo1,sInfo2));