function search(students , patten)
{
	var result = new Array();
	if (typeof(patten)=="number") 
	{
		for (var i = 0; i < students.length; i++) 
		{
			if (students[i].age==patten)
			{
				
				result.push(students[i]);
			}
		};
		if (result.length==0) {return false};
		return result;
	}
	else if (typeof(patten)=="string")
	{
		for (var i = 0; i < students.length; i++) 
		{
			if(students[i].name==patten)
			{
				return students[i];
			}
		};
		return false;
	}
	else
	{
		property = Object.getOwnPropertyNames(patten);
		if (property.length==0) {return students};
		for (var i = 0; i < students.length; i++) {
			flag = true;
			for (var j = 0; j < property.length; j++) {
				if (students[i][property[j]]!=patten[property[j]])
				{
					flag = false;
				}
			};
			if (flag) {result.push(students[i])};
		};
		if (result.length==0) {return false};
		return result;
	}
}