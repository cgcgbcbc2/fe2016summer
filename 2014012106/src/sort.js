function bSort(num){
	for(var i = 0 ; i < num.length ; i ++ )
		for(var j = i + 1 ;j < num.length ; j ++){
			if(num[i] > num[j]){
				var tmp = num[i];
				num[i] = num[j];
				num[j] = tmp;
			}
		}
	return num;
}
function iSort(num){
	for(var i = 0 ; i < num.length ; i ++ )
		for(var j = 0 ;j < i ; j ++ ){
			if(num[i] > num[j]){
				var tmp = num[j];
				for(var k = j;k > i ;k--)
				{
					num[k] = num[k-1];
				}
				num[i] = tmp;
				break;
			}
		}
	return num;
}
function sSort(num){
	for(var i = 0 ; i < num.length ; i ++ ){
		var max = NEGATIVE_INFINITY;
		var mark;
		for(var j = i ;j < num.length ; j ++ ){
			if(num[j] > max){
				max = num[j];
				mark = j;
			}
		}
		var tmp = num[i];
		num[i] = num[mark];
		num[mark] = tmp;
	}
	return num;
}