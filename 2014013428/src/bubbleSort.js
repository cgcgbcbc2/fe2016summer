
function bubbleSort(array) {
    var len = array.length;
    var i = 0, j = 0, temp = 0;
    for (j = 0; j < len - 1; j++) {
        for (i = 0; i < len - 1 - j; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    return array;
}