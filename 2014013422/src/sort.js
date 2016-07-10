/**
 * Created by yangs on 7/3/2016.
 */

var bubbleSort = function (array) {
  for (var i = 0, l = array.length; i < l; i++) {
    for (var j = i; j > 0; j--) {
      if (array[j] - array[j - 1] < 0) {
        array[j] = array[j] ^ array[j - 1];
        array[j - 1] = array[j] ^ array[j - 1];
        array[j] = array[j] ^ array[j - 1];
      }
    }
  }
  return array;
};

var insertionSort = function (array) {
  for (var i = 1; i < array.length; i++) {
    var key = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
};

var selectionSort = function (array) {
  var len = array.length;
  for (var i = 0; i < len - 1; i++) {
    var min = array[i];
    for (var j = i + 1; j < len; j++) {
      if (array[j] < min) {
        min = min ^ array[j];
        array[j] = min ^ array[j];
        min = min ^ array[j];

      }
    }
    array[i] = min;
  }
  return array;
};
