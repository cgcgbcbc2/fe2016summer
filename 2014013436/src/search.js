"use strict";

function search(data, value) {
	var result;
	if(typeof value === 'number') {
		result = searchNum(data, value);
	}
	else if(typeof value === 'string') {
		result = searchString(data, value);
	}
	else {
		result = searchSet(data, value);
	}
	return result;
}

function searchNum(data, value) {
	var length = data.length;
	var result = new Array;
	for(var i = 0; i < length; i ++) {
		if(data[i].age == value) {
			result.push(data[i]);
		}
	}
	if(result.length != 0) {
		return result;
	}
	return false;
}

function searchString(data, value) {
	var length = data.length;
	var result = new Array;
	for(var i = 0; i < length; i ++) {
		if(data[i].name == value) {
			result.push(data[i]);
		}
	}
	if(result.length != 0) {
		return result;
	}
	return false;
}

function searchSet(data, value) {
	var length = data.length;
	var result = new Array;
	for(var i = 0; i < length; i ++) {
		if(typeof value.age != 'undefined') {
			if(data[i].age == value.age) {
				if(typeof value.name != 'undefined') {
					if(data[i].name == value.name) {
						if(typeof value.hometown != 'undefined') {
							if(data[i].hometown == value.hometown) {
								result.push(data[i]);
							}
						}
						else
							result.push(data[i]);
					}
				}
				else {
					if(typeof value.hometown != 'undefined') {
						if(data[i].hometown == value.hometown) {
							result.push(data[i]);
						}
					}
					else
						result.push(data[i]);
				}
			}
		}
		else {
			if(typeof value.name != 'undefined') {
				if(data[i].name == value.name) {
					if(typeof value.hometown != 'undefined') {
						if(data[i].hometown == value.hometown) {
							result.push(data[i]);
						}
					}
					else
						result.push(data[i]);
				}
			}
			else {
				if(typeof value.hometown != 'undefined') {
					if(data[i].hometown == value.hometown) {
						result.push(data[i]);
					}
				}
			}
		}
	}
	if(result.length != 0) {
		return result;
	}
	return false;
}