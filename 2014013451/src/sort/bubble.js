var bubbleSort = function(list) {
	for (i = 0; i < list.length; i++) {
		for (j = 0; j < list.length - i - 1; j++) {
			if (list[j] > list[j + 1]) {
				tmp = list[j];
				list[j] = list[j + 1];
				list[j + 1] = tmp;
			}
		}
	}
	return list;
}