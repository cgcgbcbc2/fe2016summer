function bubble_sort (arr) {
	var tmp;
	for (var i = 0; i < arr.length; i++) {
		for (var j = arr.length - 1; j >= i + 1; j--) {
			if (arr[j] < arr[j - 1]) {
				tmp =  arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = tmp;
			};
		};
	};
	return arr;
};

function insert_sort (arr) {
	var tmp;
	for (var i = 1; i < arr.length; i++) {
		for (var j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				tmp =  arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = tmp;
			} else {
				break;
			};
		};
	};
	return arr;
};

function select_sort (arr) {
	var tmp, min;
	for (var i = 0; i < arr.length; i++) {
		min = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			};
		};
		if (min != i) {
			tmp =  arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		};
	};
	return arr;
};

/* for test
var arr = [21, 12, 12450, 12, 1, -1, 55, 9, 13, 450];
console.log(bubble_sort(arr));
*/
