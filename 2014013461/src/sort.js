
//���贫�����������,����ֵ��һ����С�������е�����
function bubbleSort(){
	var arr = arguments[0];
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length - i - 1; j++){
			var temp = arr[j];
			if(arr[j] >= arr[j + 1] ){
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

bubbleSort([7,4,23,534,6,345,7,56]);

//��������,����һ�����飬����ֵ��һ����С�������е�����
function insertSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var temp = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > temp; j--)
			arr[j + 1] = arr[j];
		arr[j + 1] = temp;
	}
	return arr;
}

insertSort([7,4,23,534,6,345,7,56]);

//ѡ����������һ�����飬����ֵ��һ����С�������е�����
selectionSort = function() {
	var arr = arguments[0]
	var i, j, min;
	var temp;
	for (i = 0; i < arr.length - 1; i++) {
		min = i;
		for (j = i + 1; j < arr.length; j++)
			if (arr[min] > arr[j])
				min = j;
		temp = arr[min];
		arr[min] = arr[i];
		arr[i] = temp;
	}
	return arr;
};

selectionSort([7,4,23,534,6,345,7,56]);
