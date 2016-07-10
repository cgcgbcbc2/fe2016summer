function search (infoArray, searchMeta) {
	
	if(typeof searchMeta == "number"){
		var searchedArray = new Array();
		var i = 0;
		for(var j = 0; j < infoArray.length;j++){
			if(infoArray[j].age == searchMeta){
				searchedArray[i] = infoArray[j];
				i++;
			}
		}
		if(i == 0) return false;
		return searchedArray;
	}
	else if(typeof searchMeta == "string"){
		var searcedObject = new Object();
		for(var j = 0; j < infoArray.length;j++){
			
			if(infoArray[j].name == searchMeta){
				searcedObject = infoArray[j];
				return searcedObject;
			}
		}
		return false;
		
	}
	else if(typeof searchMeta == "object"){
		if(typeof searchMeta.name == "undefined" && typeof searchMeta.age == "undefined" && typeof searchMeta.hometown == "undefined"){
			return infoArray;
		}
		if(typeof searchMeta.name == "undefined"){
				searchMeta.name="";
		}
		if(typeof searchMeta.age == "undefined"){
				searchMeta.age=-1;
		}
		if(typeof searchMeta.hometown == "undefined"){
				searchMeta.hometown="";
		}
		var searchedArray = new Array();
		var i = 0;
		for(var j = 0; j < infoArray.length;j++){
			if(infoArray[j].name == searchMeta.name || infoArray[j].age == searchMeta.age || infoArray[j].hometown == searchMeta.hometown){
				if(infoArray[j].name != searchMeta.name && searchMeta.name != "") continue;
				if(infoArray[j].age != searchMeta.age && searchMeta.age != -1) continue;
				if(infoArray[j].hometown != searchMeta.hometown && searchMeta.hometown != "") continue;
				searchedArray[i] = infoArray[j];
				i++;
			}
		}
		if(i == 0) return false;
		return searchedArray;
	}
}