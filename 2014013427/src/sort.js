function bubbleSort(unsorted){
	var len = unsorted.length;
	for(var i = 0;  i < len; i++){
		for(var j = i;  j < len; j++){
			if(unsorted[i] > unsorted[j]){
				var temp = unsorted[i];
				unsorted[i] = unsorted[j];
				unsorted[j] = temp;
			}
		}
	}
}

function insertionSort(unsorted){
	var len = unsorted.length;
	for(var j = 1; j < len; j++){
		var key = unsorted[j];
		var i = j - 1;
		while(i >= 0 && unsorted[i] > key){
			unsorted[i + 1] = unsorted[i];
			i--;
		}
		unsorted[i + 1] = key;
	}
}

function selectionSort(unsorted){
	//the min key in unsorted[i...len-1]
	function selectMinKey(unsorted, i){
		var min = i;
		for(var j = i ; j < unsorted.length; j++){
			if(unsorted[j] < unsorted[min]){
				min = j;
			}
		}
		return min;
	}
	var len = unsorted.length;
	for(var i = 0; i < len; i++){
		var k = selectMinKey(unsorted, i);
		if(i !== k){
			var temp = unsorted[i];
			unsorted[i] = unsorted[k];
			unsorted[k] = temp;
		}
	}
}