function bubbleSort (array) {
  var temp;
  var l = array.length;
  for (var i = 0; i < l; i++) {
    for (var j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}

function insertionSort (array) {
  var l = array.length;
  var i, j;
  for (i = 1; i < l; i++) {
    mark = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > mark) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = mark;
  }
  return array;
}

function selectionSort (array) {
  var l = array.length;
  var min;
  var mark;
  var temp;
  for (var i = 0; i < l; i++) {
    mark = i;
    min = array[i];
    for (var j = i + 1; j < l; j++) {
      if (min > array[j]) {
        min = array[j];
        mark = j;
      }
    }
    temp = array[i];
    array[i] = min;
    array[mark] = temp;
  }
  return array;
}
