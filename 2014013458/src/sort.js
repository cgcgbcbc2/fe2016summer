function INSERTION_SORT (A) {
	for(var j = 1; j < A.length;j++){
		var key = A[j];
		var i = j;
		while(A[i - 1] > key){
			A[i] = A[i - 1];
			i = i - 1;
		}
		A[i] = key;
	}

}

function SELECTION_SORT(A){
	var min;
	var key;
    for (var i = 0; i < A.length - 1; i++) {
    	min = i;
        for (var j = i + 1; j < A.length; j++) {
            if (A[j] < A[min]) {
                min = j;
            }
        }
        key = A[i];
        A[i] = A[min]
        A[min] = key;
    }
}

function BUBBLE_SORT(A){
	for (var i = 0; i < A.length - 1; i++) {
        for (var j = 0; j < A.length - 1 - i; j++) {
            if (A[j] > A[j + 1]) {
                var temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;
            }
        }
    }
}