function INSERTION_SORT (ARRAY) {
	for(var j = 1; j < ARRAY.length;j++){
		var key = ARRAY[j];
		var i = j;
		while(ARRAY[i - 1] > key){
			ARRAY[i] = ARRAY[i - 1];
			i = i - 1;
		}
		ARRAY[i] = key;
	}

}

function SELECTION_SORT(ARRAY){
	var min;
	var key;
    for (var i = 0; i < ARRAY.length - 1; i++) {
    	min = i;
        for (var j = i + 1; j < ARRAY.length; j++) {
            if (ARRAY[j] < ARRAY[min]) {
                min = j;
            }
        }
        key = ARRAY[i];
        ARRAY[i] = ARRAY[min]
        ARRAY[min] = key;
    }
}

function BUBBLE_SORT(ARRAY){
	for (var i = 0; i < ARRAY.length - 1; i++) {
        for (var j = 0; j < ARRAY.length - 1 - i; j++) {
            if (ARRAY[j] > ARRAY[j + 1]) {
                var temp = ARRAY[j];
                ARRAY[j] = ARRAY[j + 1];
                ARRAY[j + 1] = temp;
            }
        }
    }
}