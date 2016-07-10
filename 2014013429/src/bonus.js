function findStudent (student,name) {
	for (var i = 0; i < student.length; i++) {
		if (student[i].name==name) {
			return true;
		};
	};
	return false;
}
function diff (student1, student2) {
	var result = new Array();
	for (var i = 0; i < student2.length; i++) {
		if (!findStudent(student1,student2[i].name)) {
			result.push(student2[i])
		}
	};
	return result;
}
function BubbleSort(array) {
	var flag=false;
	while (!flag) {
		for (var i = 0; i < array.length-1; i++) {
			if (array[i] > array[i+1]) {
				var tmp = array[i];
				array[i]=array[i+1];
				array[i+1]=tmp;
			};
		};
		flag=true
		for (var i = 0; i < array.length-1; i++) {
			if (array[i] > array[i+1]) {
				flag=false;
				break;
			};
		};	
	}
	return array;
}

function InsertSort (array) {
	for (var i = 1; i < array.length; i++) {
		var j = i-1;
		for (; j >= 0; j--) {
			if(array[j]<array[i])
			{
				break;
			}
		};
		var tmp = array[i];
		for (var k = i - 1; k > j; k--) {
			array[k+1]=array[k];
		};
		array[j+1]=array[i];
	};
	return array;
}

function SelectSort (array) {
	for(var i=0; i<array.length; i++) {
        var min = array[i]; 
        var temp;
        var index = i;
        for(var j=i+1;j<array.length;j++) {
            if(array[j] < min){ 
                min = array[j]; 
                index = j;
            }       
        }       
        temp = array[i]; 
        array[i] = min;
        array[index]= temp;
    }
    return array;       
}
