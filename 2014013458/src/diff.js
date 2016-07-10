function diff (infoArray1,infoArray2) {
	var searchedArray = new Array();
	var k = 0;
	for(var i = 0; i < infoArray2.length;i++){
		var objectIn2 = infoArray2[i];
		for(var j = 0; j < infoArray1.length;j++){
			if(objectIn2.name == infoArray1[j].name) break;
		}
		if(j == infoArray1.length){
			searchedArray[k] = objectIn2;
			k++;
		}
	}
	return searchedArray;
}