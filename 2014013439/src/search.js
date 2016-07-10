
function search(array, arg){
	"use strict"; 
	var ans;
	if ((typeof arg) == "string") {
		for (var i = 0; i < array.length; i++) {
			if (array[i].name === arg) {
				return array[i];
			}
		}
	}

	if ((typeof arg) == "number") {
		ans = new Array();
		for (var i = 0; i < array.length; i++) {
			if (array[i].age === arg) {
				ans.push(array[i]);
			}
		}
		return ans;
	}

	if ((typeof arg) == "object") {
		ans = new Array();
		for (var i = 0; i < array.length; i++) {
			var judge = true;
			for (var j in arg) {
				if (!(arg[j] === array[i][j])) {
					judge = false;
				}
			}

			if (judge) {
				ans.push(array[i]);
			}
		}
		return ans;
	}
}

if (exports) {  
    exports.search = search;
}