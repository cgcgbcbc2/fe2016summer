//Bonus1-diff

(function() {
    'use strict';

    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    window.bubbleSort = function(array) {
        var i,
            j;
        for (i = 1; i < array.length; i++) {
            for (j = 0; j < array.length-i; j++) {
                if (array[j] > array[j+1]) {
                    swap(array, j, j+1);
                }
            }
        }
    };

    window.insertionSort = function(array) {
        var temp,
            i,
            j;
        for (i = 1; i < array.length; i++) {
            temp = array[i];
            for (j = i-1; j >= 0 && array[j] > temp; j--) {
                array[j+1] = array[j];
            }
            array[j+1] = temp;
        }
    };

    window.selectionSort = function(array) {
        var i,
            j,
            min;
        for (i = 0; i < array.length; i++) {
            min = i;
            for (j = i+1; j < array.length; j++) {
                if (array[min] > array[j]) {
                    min = j;
                }
            }
            swap(array, i, min);
        }
    };
})();
