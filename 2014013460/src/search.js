function search() {
	var result = new Array();
	var k = 0;
	if (typeof(arguments[1]) == "number") {
		for (var i = 0; i < arguments[0].length; i++) {
			if (arguments[0][i]["age"] == arguments[1]) {
				result[k] = arguments[0][i];
				k++;
			}
		}
		if (k == 0) {
			return false;
		}
		return result;
	}
	else if (typeof(arguments[1]) == "string") {
		for (var i = 0; i < arguments[0].length; i++) {
			if (arguments[0][i]["name"] == arguments[1]) {
				return arguments[0][i];
			}
		}
		return false;
	}
	else if (typeof(arguments[1]) == "object") {
		for (var i = 0; i < arguments[0].length; i++) {
			if ( (typeof(arguments[1]["age"]) == "undefined" || arguments[0][i]["age"] == arguments[1]["age"]) 
				&& (typeof(arguments[1]["name"]) == "undefined" || arguments[0][i]["name"] == arguments[1]["name"]) 
				&& (typeof(arguments[1]["hometown"]) == "undefined" || arguments[0][i]["hometown"] == arguments[1]["hometown"]) ) {
				result[k] = arguments[0][i];
				k++;
			}
		}
		if (k == 0) {
			return false;
		}
		return result;
	}
	else {
		return false;
	}
}
