function bubbleSort(array) {
	var temp = 0;
	for (var i = 0; i　< array.length - 1; i++) {
		for (var j = array.length - 1; j > i; j--) {
			if (array[j] < array[j-1]) {
				temp = array[j];
				array[j] = array[j-1];
				array[j-1] = temp;
			}
		}
	}
	return array;
}

function insertionSort(array) {
	for (var j = 1; j < array.length; j++) {
		var key = array[j];
		var i = j - 1;
		while (i >= 0 && array[i] > key) {
			array[i+1] = array[i];
			i--;
		}
		array[i+1] = key;
	}
	return array;
}

function selectionSort(array) {
	var temp = 0;
	var k = 0;
	for (var i = 0; i < array.length - 1; i++) {
		k = i;
		for (var j = i; j < array.length; j++) {
			if (array[j] < array[k]) {
				k = j;
			}
		}
		temp = array[i];
		array[i] = array[k];
		array[k] = temp;
	}
	return array;
}