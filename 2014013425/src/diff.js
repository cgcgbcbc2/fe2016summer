function search (students, name) {
	for (var i = 0; i < students.length; i++) {
		if (students[i].name == name) {
			return true;
		};
	};
	return false;
};

function diff (students1, students2) {
	var result = new Array();
	for (var i = 0; i < students2.length; i++) {
		if (search(students1, students2[i].name) == false) {
			result.push(students2[i]);
		};
	};
	return result;
};

/* for test
var students1 = [{
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
	name: "Amy4",
	age: 23,
	hometown: "Mars"
}];

var students2 = [{
	name: "Amy1",
	age: 21,
	hometown: "Beijing"
}, {
	name: "Amy2",
	age: 22,
	hometown: "Tianjin"
}, {
	name: "Amy5",
	age: 21,
	hometown: "Shanghai"
}, {
	name: "Amy6",
	age: 23,
	hometown: "Mars"
}];

console.log(diff(students1, students2));
*/
