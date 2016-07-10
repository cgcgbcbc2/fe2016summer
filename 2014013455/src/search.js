function search()
{
	var i;
	var res = new Array(0);
	var flag = 0;
	if (typeof arguments[1] == 'number') 
	{
		for (i = 0; i < arguments[0].length; i++) 
		{
			if (arguments[0][i].age == arguments[1]) 
			{
				flag = 1;
				res.push(arguments[0][i]);
			}
		}
		if (flag == 0) 
		{
			return false;
		}
		else return res;
	}
	if (typeof arguments[1] == 'string') 
	{
		for (i = 0; i < arguments[0].length; i++) 
		{
			if (arguments[0][i].name == arguments[1]) 
			{
				flag = 1;
				return arguments[0][i];
			}
		}
		if (flag == 0) 
		{
			return false;
		}
	}
	if (typeof arguments[1] == 'object') 
	{
		flag = 0;
		for (i = 0; i < arguments[0].length; i++) 
		{
			if ((!arguments[1].hasOwnProperty('name') || (arguments[0][i].name == arguments[1].name)) 
				&& (!arguments[1].hasOwnProperty('age') || (arguments[0][i].age == arguments[1].age)) 
				&& (!arguments[1].hasOwnProperty('hometown') || (arguments[0][i].hometown == arguments[1].hometown)))
			{
				flag = 1;
				res.push(arguments[0][i]);
			}

		}
		if (flag == 0) 
		{
			return false;
		}
		else return res;
	}
}