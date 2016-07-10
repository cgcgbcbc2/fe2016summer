var diff = function(item_1, item_2) {
	item_3 = new Array;
	for (i = 0; i < item_1.length; i++) {
		flag = 0;
		for (j = 0; j < item_2.length; j++) {
			if (item_1[i].name == item_2[j].name){
				flag = 1;
			}
		}
		if (flag == 0) {
			item_3.push(item_1[i]);
		}
	}
	return item_3;
}