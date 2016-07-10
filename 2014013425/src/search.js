function search () {
	var students = arguments[0];
	var type = typeof arguments[1];
	if (type === "number") {
		var result = new Array();
		for (var i = 0; i < students.length; i++) {
			if (students[i].age == arguments[1]) {
				result.push(students[i]);
			};
		};
		if (result.length > 0) {
			return result;
		} else {
			return false;
		};
	} else if (type === "string") {
		for (var i = 0; i < students.length; i++) {
			if (students[i].name == arguments[1]) {
				return students[i];
			};
		};
		return false;
	} else {
		var result = new Array();
		for (var i = 0; i < students.length; i++) {
			if (typeof arguments[1].name != "undefined" && arguments[1].name != students[i].name) {
				continue;
			};
			if (typeof arguments[1].age != "undefined" && arguments[1].age != students[i].age) {
				continue;
			};
			if (typeof arguments[1].hometown != "undefined" && arguments[1].hometown != students[i].hometown) {
				continue;
			};
			result.push(students[i]);
		};
		if (result.length > 0) {
			return result;
		} else {
			return false;
		};
	};
	return;
};

/* for test
var students = [{
	name: "Amy1",
	age: 21,
	hometown: "Beijing"
}, {
	name: "Amy2",
	age: 22,
	hometown: "Tianjin"
}, {
	name: "Amy3",
	age: 21,
	hometown: "Shanghai"
}, {
	name: "Amy1",
	age: 23,
	hometown: "Mars"
}];
search(students, 21);
*/
