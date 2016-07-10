function diff(a, b){
	var NamesInA = {};
	var studentList = [];
	for(var i in a){
		NamesInA[a[i].name] = true;
	}
	for(var i in b){
		if(!NamesInA[b[i].name]){
			studentList.push(b[i]);
		}
	}
	return studentList;
}