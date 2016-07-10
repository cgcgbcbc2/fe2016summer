var insertSort = function(list) {
	for (i = list.length; i >= 0; i--) {
		for (j = i; j >= 0; j++) {
			if (list[j - 1] > list[j]) {
				tmp = list[j];
				list[i] = list[j];
				list[j] = tmp;
			}
			else {
				break;
			}
		}
	}
	return list;
}