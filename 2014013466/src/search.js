function search(students, query){
	"use strict";
	var l = students.length;
	var result;
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
	else if(typeof query == "string"){
		for(var i = 0; i < l; i ++){
			if(students[i].name === query){
				return students[i];
			}
			return false;
		}
	}
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