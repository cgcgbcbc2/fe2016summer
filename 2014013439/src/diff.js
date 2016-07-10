function diff(array1, array2){
	"use strict"; 
	var ans = new Array();
	
	for (var i = 0; i < array2.length; i++) {
		var judge = true;
		for (var j = 0; j < array1.length; j++) {
			if (array2[i].name === array1[j].name) {
				judge = false;
			}
		}
		if (judge) {
			ans.push(array2[i]);
		}
	}

	return ans;
}

if (exports) {  
    exports.diff = diff;
}