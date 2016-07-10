var selectSort = function(list) {
	for (i = 0; i < list.length; i++) {
		for (j = i + 1; j < list.length; j++) {
			if (list[i] > list[j]) {
				tmp = list[j];
				list[i] = list[j];
				list[j] = tmp;
			}
		}
	}
	return list;
}