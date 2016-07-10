function diff(data1, data2){
	var myArray = new Array();
	var j = 0;
	var flag = 0;
	for (var i = data2.length - 1; i >= 0; i--) {
		for (var k = data1.length - 1; k >= 0; k--) {
			if (data2[i]['name'] == data1[k]['name']) {
				flag = 1;
			}
		}
		if (flag == 0) {
			myArray[j] = data2[i];
			j++;
		}
		flag = 1;
	}
	return myArray;
}