function include(a, v) {
	for (x in a) {
		if (a[x].name == v.name) return true;
	}
	return false;
}
function diff() {
	var a = arguments[0];
	var b = arguments[1];

	var c = b.filter(function(v){ return !(include(a, v));});
	
	console.log(c);
  return c;
}


// 测试
// students1 = [
// 	{name: "A", age: 1, hometown: "m"},
// 	{name: "C", age: 4, hometown: "m"}
// ];

// students2 = [
// 	{name: "A", age: 1, hometown: "m"},
// 	{name: "B", age: 1, hometown: "n"},
// 	{name: "C", age: 4, hometown: "m"}
// ];

// diff(students1, students2);