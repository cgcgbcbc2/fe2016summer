function search(){
	var list = arguments[0];

	// 若第二个参数类型为number
	if (typeof arguments[1] == "number") { 
		for (x in list) {
			if (list[x].age == arguments[1]) return list[x];
		}
		return false;
	}
	// 若第二个参数类型为string
	else if (typeof arguments[1] == "string") {
		for (x in list) {
			if (list[x].name == arguments[1]) return list[x];
		}
		return false;
	}
	// 若第二个参数类型为object
	else if (typeof arguments[1] == "object") {
		var result_list = new Array();
		for (x in list) {
			var flag = true;  // flag用于标记是否这个学生的属性全部满足查询项
			for (attr in arguments[1]) {
				if (arguments[1][attr] != list[x][attr]) {flag = false; break; }
			}
			if (flag) result_list.push(list[x]);
		}
		if (result_list.length > 0) return result_list;
		else return false;
	}
	return false;
}



// 测试
// students = [
// 	{name: "A", age: 1, hometown: "m"},
// 	{name: "B", age: 1, hometown: "n"},
// 	{name: "C", age: 4, hometown: "m"}
// ];

// var q1 = search(students, 4);
// var q2 = search(students, "B");
// var q3 = search(students, {hometown: "m"});
// var q4 = search(students, {age: 1, hometown: "m"});
// var q4 = search(students, {age: 4, hometown: "n"});
// var q5 = search(students, {});

