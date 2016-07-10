function search()
{
	var students = arguments[0];
	var info = arguments[1];
	
	if(typeof info === "number")
	{
		var ans = new Array();
		var findflag = false;
		var j = 0;
		for(var i = 0; i < students.length; i++)
		{
			if(students[i].age === info)
			{
				findflag = true;
				ans[j] = students[i];
				j++;
			}
		}
		if(findflag === true)
			return ans;
		else return false;
	}
	if(typeof info === "string")
	{
		for(var i = 0; i < students.length; i++)
		{
			if(students[i].name === info)
			{
				return students[i];
			}
		}
		return false;	
	}
	if(typeof info === "object")
	{
		var ans = new Array();
		var findflag = false;
		var j = 0;
		for(var i = 0; i < students.length; i++)
		{
			if((typeof info.age === "undefined" || students[i].age === info.age) 
			&& (typeof info.name === "undefined" || students[i].name === info.name) 
			&& (typeof info.hometown === "undefined" || students[i].hometown === info.hometown))
			{
				findflag = true;
				ans[j] = students[i];
				j++;
			}
		}
		if(findflag === true)
			return ans;
		else return false;
	}
}

