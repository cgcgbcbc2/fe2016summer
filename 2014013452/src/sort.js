/*
将算法导论一书中的基本排序算法(冒泡,插入以及选择排序), 
用JavaScript实现一遍,要求代码优美。
*/

function insertion_sort(arr) {
	// preparation
	arglength = arguments.length;
	if (arglength == 1) {
		cmp = function(a, b) {
			return (a > b);
		}
	} else {
		cmp = arguments[1];
	}
	// sort
	for (var j = 1; j < arr.length; j++) {
		key = arr[j];
		i = j - 1;
		while (i >= 0 && cmp(arr[i],key)) {
			arr[i + 1] = arr[i];
			i = i-1;
		}
		arr[i + 1] = key; 
	}
};

function bubble_sort(arr) {
	// preparation
	arglength = arguments.length;
	if (arglength == 1) {
		cmp = function(a, b) {
			return (a > b);
		}
	} else {
		cmp = arguments[1];
	}
	// sort
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = arr.length - 1; j >= i; j--) {
			if (cmp(arr[j-1], arr[j])) {
				temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
			}
		}
	}
}

function selection_sort(arr) {
	// preparation
	arglength = arguments.length;
	if (arglength == 1) {
		cmp = function(a, b) {
			return (a > b);
		}
	} else {
		cmp = arguments[1];
	}
	// sort
	for (var i = 0; i < arr.length - 1; i++) {
		min = i;
		for (var j = i+1; j < arr.length; j++) {
			if (cmp(arr[min], arr[j])) {
				min = j;
			}
		}
		if (min != i) {
			temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;	
		}
	}
}

// for testing
// num = [1,2,3,4,8,7,5,4,3,2,7,3,3,7,3,2];
// function anotherSortFunction(obj1, obj2) {
// 	return (obj1 % 5) > (obj2 % 5);
// }