function bubble(array) {
for (var i = 0; i < array.length; i++) {
    for (var j = array.length; j > 0; j--) {
        if (array[j] < array[j - 1]) {
            var temp = array[j - 1];
            array[j - 1] = array[j];
            array[j] = temp;
        }
    }
}

function insert(array) {
    var temp;
    for (var i = 1; i < array.length; i++) {
        var temp = array[i];
        for (var j = i; j > 0 && temp < array[j - 1]; j--) {
            array[j] = array[j - 1];
        }
        array[j] = temp;
    }
}

function selectSort(array) {
    var min, temp; ;
    for (var i = 0; i < array.length; i++) {
        min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[min] > array[j])
                min = j;
        }
        if (min != i) {
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
}