// bonus 2

// 冒泡
function buble_sort(A){
	"use strict";
	var l = A.length;
	for(var i = 0; i < l; i ++){
		for(var j = 0; j < l-i; j ++){
			if(A[j+1] < A[j]){
				var tmp = A[j+1];
				A[j+1]  = A[j];
				A[j]    = tmp;
			}
		}
	}
	return A;
}

// 插入
function insert_sort(A){
	"use strict";
	var l = A.length;
	for(var i = 1; i < l; i ++){
		var j = i;
		while(j > 0 && A[j] < A[j-1]){
			var tmp = A[j];
			A[j]    = A[j-1];
			A[j-1]  = A[j];
			j --;
		}
	}
	return A;
}

// 选择
function choose_sort(A){
	"use strict";
	var l = A.length;
	for (var i = 0; i < l - 1; i++) {
		var index_min = i;
		for (var j = i + 1; j < A.length; j++) {
			if(A[j] < A[index_min]){
				index_min = j;
			}
		}
		if(index_min != i){
			var tmp      = A[i];
			A[i]         = A[index_min];
			A[index_min] = tmp;
		}
	}
	return A;
}