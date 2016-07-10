function bubbleSort(){
	var length = arguments[0].length;
	var tmp;

	for(var i = length; i >= 2; --i){
		for(var j = 0; j  <= i-1; ++j){
			if(arguments[0][j] > arguments[0][i]){
				tmp = arguments[0][i];
				arguments[0][i] = arguments[0][j];
				arguments[0][j] = tmp;
			}
		}
	}
}

function  insertSort(){
	var length = arguments[0].length;
	var tmp;

	for(var i = 1; i < length; i++){
		tmp = arguments[0][i];
		for(var j = i; j > 0 && arguments[0][j-1] > tmp; j--){
			arguments[0][j] = arguments[0][j-1];
		}
		arguments[0][j] = tmp;
	}
}

function selectSort(){
	var length = arguments[0].length;
	var tmp;
	var min;

	for(var i = 0; i < length-1; ++i){
		min = i;
		for(var j = i+1; j < length; ++j){
			if(arguments[0][j] < arguments[0][min]){
				min = j;
			}
		}
		if(min != i){
			tmp = arguments[0][i];
			arguments[0][i] = arguments[0][min];
			arguments[0][min] = tmp;
		}
	}
}

function aaa(){
	return{
		test:1
	};
}
alert(typeof aaa());