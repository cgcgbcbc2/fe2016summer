"use strict";

function diff(set1, set2) {
	var length1 = set1.length;
	var length2 = set2.length;
	var result = new Array;
	var flag = 0;
	for(var i = 0;i < length2; i ++) {
		for(var j = 0; j < length1; j ++) {
			if(set2[i].name == set1[j].name) {
				flag = 1;
			}
		}
		if(flag == 0) {
			result.push(set2[i]);
		}
		flag = 0;
	}
	if(result.length != 0) {
		return result;
	}
	return false;
}