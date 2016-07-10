function diff(set1, set2){
	var result = [];
	for (var i = 0, j; i < set2.length; i++){
		for (j = 0; j < set1.length; j++){
			if (set2[i].name == set1[j].name) break;
		}
		if (j == set1.length){
			result.splice(0, 0, set2[i]);
		}
	}
	return result;
}