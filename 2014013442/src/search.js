function search(studentInfo, request){
	switch (typeof request){
		case "number":{
			var result = [];
			for(var i = 0; i < studentInfo.length; i++){
				if(studentInfo[i]['age'] == request){
					result.push(studentInfo[i]);
				}
			}
			if(result.length == 0){
				return false;
			}
			else{
				return result;
			}
			break;
		}

		case "string":{
			for(var i = 0; i < studentInfo.length; i++){
				if(studentInfo[i]['name'] == request){
					return studentInfo[i]
				}
			}
			return false;

			break;
		}

		case "object":{
			console.log('object');
			var hasName, hasAge, hasHometown;
			var hasFind = false;
			var result = [];
			hasHometown = hasAge = hasName = true;
			if(request['name'] == undefined){
				//console.log('name undefined');
				hasName = false;
			}

			if(request['age'] == undefined){
				hasAge = false;
				//console.log('age undefined');
			}

			if(request['hometown'] == undefined){
				hasHometown = false;
				//console.log('hometown undefined');
			}

			if(!hasName && ! hasAge && !hasHometown){
				//console.log(1);
				return studentInfo;
			}

			for(var i = 0; i < studentInfo.length; i++){
				if(request['name'] != studentInfo[i]['name']){
					if(hasName){
						continue;
					}
				}
				if(request['age'] != studentInfo[i]['age']){
					if(hasAge){
						continue;
					}
				}
				if(request['hometown'] != studentInfo[i]['hometown']){
					if(hasHometown){
						continue;
					}
				}

				result.push(studentInfo[i]);
				hasFind = true;
			}
			if(hasFind){
				return result;
			}
			else{
				return false;
			}
			break;
		}

		default:{
			console.log("illegal type of arguments");
			break;
		}
	}

}

// var test = {};
// var studentInfo1 = [
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

// search(studentInfo1,test);