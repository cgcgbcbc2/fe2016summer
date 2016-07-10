"use strict";

//test array

var array = [12, 33 ,4 ,5 ,23, 532, 23, 44 ,1];

//bubble sort

function bubbleSort(array) {
	var swapped;
	do {
		swapped = false;
		for (var i = 0; i < array.length - 1; i ++) {
			if (array[i] > array[i + 1]) {
				var temp = array[i];
				array[i] = array[i+1];
				array[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
}

//insertion sort

function insertionSort(array) {
	var length = array.length;
	for(var i = 0; i < length; i++) {
		var temp = array[i];
		for(var j = i - 1; j >= 0 && (array[j] > temp); j --) {
			array[j+1] = array[j];
		}
		array[j + 1] = temp;
	}
}

//selection sort

function selectionSort(array) {
	var length = array.length;  
	for (var i = 0; i < length - 1; i ++) {
		var min = i; 
		for (var j = i + 1; j < length; j ++) {
			if(array[j] < array[min]) {
				min = j;
			}
		}
		if(min != i) {
			var temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}
	}
}