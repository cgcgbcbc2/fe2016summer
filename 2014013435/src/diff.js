function diff(){
	var result = new Array();
	var student1,student2;
	var flag = 0;
	for(student2 in arguments[1]){
		for(student1 in arguments[2]){
			if(student1.name == student2.name){
				flag=1;
			}
		}
		if(flag == 0){
			result[result.length] = student2;
		}
		flag = 0;
	}
	return(result);
}