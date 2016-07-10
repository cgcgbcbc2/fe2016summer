//冒泡排序
function bubbleSort(arr){
	var temp;
	for (var i = arr.length - 1; i > 0; i--){
		for (var j = 0; j < i; j++){
			if (arr[j] > arr[j + 1]){
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

//插入排序
function insertionSort(arr){
	if (arr.length <= 1) return arr;
	var temp, j;
	for (var i = 1; i < arr.length; i++){
		temp = arr[i];
		j = i;
		while (j > 0 && arr[j - 1] > temp){
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = temp;
	}
	return arr;
}

//选择排序
function selectionSort(arr){
	var index, min;
	for (var i = 0; i < arr.length; i++){
		min = arr[i];
		index = i;
		for (var j = i + 1; j < arr.length; j++){
			if (min > arr[j]){
				min = arr[j];
				index = j
			}
		}
		arr[index] = arr[i];
		arr[i] = min;
	}
	return arr;
}