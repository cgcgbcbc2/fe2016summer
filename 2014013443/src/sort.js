function bubble_sort(arr) {
    var i, j, tempExchangVal;
    for (i = arr.length; i > 0; i--) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tempExchangVal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempExchangVal;
            }
        }
    }
    return arr;
}

function select_sort(arr) {
	var i, j, temp, tempExchangVal;
	for(i = 0; i < arr.length-1; i++) {
        temp = i;
        for(j = i+1; j < arr.length; j++) {
            if(arr[temp] > arr[j])
                temp = j;
        }
        if(i != temp) {
            tempExchangVal = a[temp];
            a[temp] = a[i];
            a[i] = tempExchangVal;
        }
    }
    return arr;
}

function insertion_sort(arr) {
	var i, j, temp;
	for(i = 0; i < arr.length; i++) {
		temp = arr[i];
		j = i - 1;
		while((j >= 0) && (arr[j] > temp)) {
			arr[j]=arr[j+1];
			j--;
		}
		if(j != i-1) arr[j+1]=temp;
	}
 	return arr;
}


// 测试
// arr = [10, 4, 2, 1, 20];
// console.log(bubble_sort(arr));
// console.log(select_sort(arr));
// console.log(insertion_sort(arr));
