"use strict";

function search(input, key){
	var result;

	if(typeof key === 'number'){
		result = searchByAge(input, key);
	}
	else if(typeof key === 'string'){
		result = searchByName(input, key);
	}
	else if(typeof key === 'object'){
		result = searchByObject(input, key);
	}

	return result;
}

function searchByAge(input, key){
	var result = new Array;

	for(var i = 0; i < input.length; i++){
		if(input[i].age == key){
			result.push(input[i]);
		}
	}
	if(result.length != 0){
		return result;
	}

	return false;
}

function searchByName(input, key){
	var result = new Array;

	for(var i = 0; i < input.length; i++){
		if(input[i].name == key){
			result.push(input[i]);
		}
	}
	if(result.length != 0){
		return result;
	}

	return false;
}

function searchByObject(input, key){
	var result = new Array;

	for(var i = 0; i < input.length; i++){
		if(typeof key.age != 'undefined'){
			if(input[i].age == key.age){
				if(typeof key.name != 'undefined'){
					if(input[i].name == key.name){
						if(typeof key.hometown != 'undefined'){
							if(input[i].hometown == key.hometown){
								result.push(input[i]);
							}
						}
						else{
							result.push(input[i]);
						}
					}
				}
				else if(typeof key.hometown != 'undefined'){
					if(input[i].hometown == key.hometown){
							result.push(input[i]);
					}
				}
				else{
					result.push(input[i]);
				}
			}
		}
		else if(typeof key.name != 'undefined'){
			if(input[i].name == key.name){
				if(typeof key.hometown != 'undefined'){
					if(input[i].hometown == key.hometown){
						result.push(input[i]);
					}
				}
				else{
					result.push(input[i]);
				}
			}
		}
		else if(typeof key.hometown != 'undefined'){
			if(input[i].hometown == key.hometown){
				result.push(input[i]);
			}
		}
	}
	if(result.length != 0){
		return result;
	}

	return false;
}