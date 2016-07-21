
function search()
{
	var resultArray = null;
	if(!(arguments[0] instanceof Array))
	{
		return;
	}
	for(var i = 0; i < arguments[0].length; i++)
	{
		if((!arguments[0][i].hasOwnProperty("name")) || (!arguments[0][i].hasOwnProperty("age"))||(!arguments[0][i].hasOwnProperty("hometown")))
		{
			return;
		}
	}
    if(typeof arguments[1] == "number")
	{
		resultArray = new Array();
		for(var i = 0; i < arguments[0].length; i++)
		{
			if(arguments[0][i].age == arguments[1])
			{
				resultArray.push(arguments[0][i]);
			}
		}
		if(resultArray.length == 0)
		{
			return false;
		}
		else
		{
			return resultArray;
		}
	}
	else if(typeof arguments[1] == "string")
	{
		for(var i = 0; i < arguments[0].length; i++)
		{
			if(arguments[0][i].name == arguments[1])
			{
				return arguments[0][i];
			}
		}
		return false;
	}
	else
	{
		if((!arguments[1].hasOwnProperty("name")) && (!arguments[1].hasOwnProperty("age"))&&(!arguments[1].hasOwnProperty("hometown")))
		{
			return;
		}
		resultArray = new Array();
		for(var i = 0; i < arguments[0].length; i++)
		{
			if((!arguments[1].hasOwnProperty("name") || (arguments[0][i].name == arguments[1].name))
				&& (!arguments[1].hasOwnProperty("age") || (arguments[0][i].age == arguments[1].age))
				&& (!arguments[1].hasOwnProperty("hometown") || (arguments[0][i].hometown == arguments[1].hometown)))
			{
				resultArray.push(arguments[0][i]);	
			}
		}
		if(resultArray.length==0)
		{
			return false;
		}
		else
		{
			return resultArray;
		}
	}
	return;
	
}

