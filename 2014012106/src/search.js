function search(infoForm,key){
	var result = [];
	if(key instanceof Object)
	{
		var count = 0;
		var flag = true;
		for(var i = 0;i < infoForm.length ;i ++){
			flag = true;
			for(tag in key){
				if(!(tag in infoForm[i]))
					return false;
				if(infoForm[i][tag] != key[tag]){
					flag = false;
					break;
				}
			}
			if(flag){
				result[count] = infoForm[i];
				count ++;
			}
		}
		if(count == 0)
			return false;
		else 
			return result;
	}
	
	if(!isNaN(key))
	{
		var count = 0;
		for(var i = 0;i < infoForm.length ;i ++){
			if(infoForm[i].age == key){
				result[count] = infoForm[i];
				count ++;
			}
		}
		if(count == 0){
			return false;
		}
		else{
			return result;
		}
	}
	for(var i = 0;i < infoForm.length ;i ++){
		if(infoForm[i].name == key){
				return infoForm[i]
			}
		}
	return false;
}

function diff(form1,form2){
	var result = [];
	var count = 0;
	for(var i = 0;i < form1.length ;i ++){
		if(search(form2,form1[i]) == false){
			result[count] = form1[i];
			count ++;
		}
	}
	for(var i = 0;i < form2.length ;i ++){
		if(search(form1,form2[i]) == false){
			result[count] = form1[i];
			count ++;
		}
	}
	return result;
}


