function search(students, query){
	"use strict";
	var l = students.length;
	var result;
	// first case: find by age
	if(typeof query === "number"){
		result = [];
		for(var i = 0; i < l; i ++){
			if(students[i].age === query){
				result.push(students[i]);
			}
		}
		if (result.length === 0){
			return false;
		}
		else{
			return result;
		}
	}
	// second case: find by name
	else if(typeof query == "string"){
		for(var i = 0; i < l; i ++){
			if(students[i].name === query){
				return students[i];
			}
			return false;
		}
	}
	// last case
	else{
		result = [];
		for(var i = 0; i < l; i ++){
			if( (query.name === undefined || students[i].name === query.name) &&
				(query.age === undefined || students[i].age === query.age) &&
				(query.hometown === undefined || students[i].hometown === query.hometown) ){
				result.push(students[i]);
			}
		}
		if (result.length === 0){
			return false;
		}
		else{
			return result;
		}
	}
}

function diff(s1, s2){
	"use strict";
	var l2 = s2.length;
	var result = [];
	for(var i = 0; i < l2; i ++){
		if(search(s1, s2[i].name) === false){
			result.push(s2[i]);
		}
	}
	return result;
}