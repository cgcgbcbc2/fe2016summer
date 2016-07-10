function search(o,value){
	var res = [];
	if (typeof value == "number"){
		for (var i = 0; i < o.length; i++) {
			if (o[i].age == value) {
				res.push(o[i]);
			}
		}
	}
	else if (typeof value == "string"){
		for (var i = 0; i < o.length; i++) {
			if (o[i].name == value) {
				res.push(o[i]);
			}
		}
	}
	else {
		var characters = Object.getOwnPropertyNames(value);
		if (characters.length == 0){
			return o;
		}
		for (var i = 0; i < o.length; i++) {
			flag = true;
			for (var j = 0; j < characters.length; j++) {
				if (o[i][characters[j]] != value[characters[j]]){
					flag = false;
				}
			}
			if (flag) {
				res.push(o[i]);
			}
		}
	}
	if (res.length == 0) {
		return false;
	}
	else {
		return res;
	}
}

// (function(){
// 	var o = [
// 		{name:"ljj",
// 		age:19,
// 		hometown:"oll"
// 		},
// 		{name:"lsa",
// 		age:20,
// 		hometown:"ol"
// 		}
// 	];
// 	console.log(search(o,"ol"));
// })()