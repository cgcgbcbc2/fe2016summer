function diff(students1, students2) {
	var result = new Array();
	var k = 0;
	var flag = 0;
	for (var i = 0; i <　students2.length; i++) {
		for (var j = 0; j < students1.length; j++) {
			if (students2[i]["name"] == students1[j]["name"]) {
				flag = 1;
				break;
			}
		}
		if (flag == 0) {
			result[k] = students2[i];
			k++;
		}
		else {
			flag = 0;
		}
	}
	return result;
}
