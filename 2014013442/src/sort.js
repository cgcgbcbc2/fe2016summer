function bubbleSort(elements){
	var temp;
	for (var i = 0; i < elements.length - 1; i++) {
		for (var j = 0; j < elements.length - 1 - i; j++){
			if(elements[j] > elements[j + 1]){
				temp = elements[j];
				elements[j] = elements[j + 1];
				elements[j + 1] = temp;
			}
		}
	};
}

function insertionSort(elements){
	var pivot;
	for(var i = 1; i < elements.length; i++){
		pivot = elements[i];
		var j;
		for(var j = i - 1; j >= 0; j--){
			if(elements[j] > pivot){
				elements[j + 1] = elements[j];
			}
			else{
				break;
			}
		}
		elements[j + 1] = pivot;

	}
}

function selectionSort(elements){
	var temp;
	for(var i = 0; i < elements.length - 1; i++){
		var min = elements[i];
		var minIndex = i;
		for(var j = i; j < elements.length; j++){
			if(elements[j] < min){
				min = elements[j];
				minIndex = j;
			}
		}
		temp = elements[i];
		elements[i] = min;
		elements[minIndex] = temp;
	}
}

// var array1 = [32,42,23,123,32,1,2,4];
// insertionSort(array1);
// console.log(array1);