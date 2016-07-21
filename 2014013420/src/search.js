
function getPropertyCount(o){  
   var n, count = 0;  
   for(n in o){  
      if(o.hasOwnProperty(n)){  
         count++;  
      }  
   }  
   return count;  
}

function search(data, target){
	var result = new Array();
	if(typeof target == 'string')
	{
		for(var i = 0; i < data.length; i++){
			if(data[i]["name"] == target["name"]){
				return data[i];
			}
		}
	}
	else if(typeof target == 'number'){
		for(i = 0; i < data.length; i++){
			if(data[i][age] == target[age])
				result.push(data[i]);
		}
	}
	else if(typeof target == 'object')
	{
		var flag = new Array();
		for(i = 0; i < data.length; i++)
			flag[i] = 0;
		if(target.hasOwnProperty("name"))
		{
			for(i = 0; i < data.length; i++){
			if(data[i]["name"] == target["name"])
				flag[i]++;
			}
		}
		if(target.hasOwnProperty("age"))
		{
			for(i = 0; i < data.length; i++){
			if(data[i]["age"] == target["age"])
				flag[i]++;
			}
		}
		if(target.hasOwnProperty("hometown"))
		{
			for(i = 0; i < data.length; i++){
			if(data[i]["hometown"] == target["hometown"])
				flag[i]++;
			}
		}
		for(i = 0; i < data.length; i++)
			if(flag[i] == getPropertyCount(target))
				result.push(data[i]);
	}
	if(result.length == 0)
		return false;
	return result;
}