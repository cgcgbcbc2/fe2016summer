function search(student_info, student_searched)
{
    if(typeof(student_searched) == 'number')
	{
	    var result = new Array();
	    var i = student_info.length;
		for(var j = 0; j < i;j++)
		{
		    if(student_info[j].age == student_searched)
			{
			    result.push([student_info[j]]);
			}
		}
		if(result.length == 0)
		{
		    return false;
		}
		else
		{
		    return result;
		}
	}
	else if(typeof(student_searched) == 'string')
	{
	    var result;
		var i = student_info.length;
		for(var j = 0; j < i;j++)
		{
		    if(student_info[j].name == student_searched)
			{
			    result = student_info[j];
				break;
			}
		}
		if(result == undefined)
		{
		    return false;
		}
		else
		{
		    return result;
		}
	}
	else if(typeof(student_searched) == 'object')
	{
	    var result = new Array();
	    var i = student_info.length;
		if(student_searched.name != undefined)
		{
		    for(var j = 0; j < i;j++)
		    {
		        if(student_info[j].name == student_searched.name)
			    {
			         result.push([student_info[j]]);
			    }
		    }		
		}
		if(student_searched.age != undefined)
		{
		    for(var j = 0; j < i;j++)
		    {
		        if(student_info[j].age == student_searched.age)
			    {
			         result.push([student_info[j]]);
			    }
		    }		
		}
		if(student_searched.hometown != undefined)
		{
		    for(var j = 0; j < i;j++)
		    {
		        if(student_info[j].hometown == student_searched.hometown)
			    {
			         result.push([student_info[j]]);
			    }
		    }		
		}
		if(result.length == 0)
		{
		    return false;
		}
		else
		{
		    return result;
		}
	}
}