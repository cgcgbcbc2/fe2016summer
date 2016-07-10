function search(){
	var temp = new Array();
	var n = 0;
	if(typeof arguments[1] == "number")
	{
		for(var i in arguments[0])
		{
			if(arguments[0][i].age == arguments[1])
			{
				temp[n] = arguments[0][i];
				n++;
			}
		}
		if(temp.length == 0)
			return false;
		else
			return temp;
	}
	if(typeof arguments[1] == "string")
	{
		for(var i in arguments[0])
		{
			if(arguments[0][i].name == arguments[1])
			{
				return arguments[0][i];
			}
		}
		return false;
	}
	if(typeof arguments[1] == "object")
	{
		for(var i in arguments[0])
		{
			if(typeof arguments[1].name == "undefined")
			{
				if(typeof arguments[1].age == "undefined")
				{
					if(typeof arguments[1].hometown == "undefined")
					{
						temp[n] = arguments[0][i];
						n++;
					}
					else if(arguments[0][i].hometown == arguments[1].hometown)
					{
						temp[n] = arguments[0][i];
						n++;
					}
				}
				else
				{
					if(typeof arguments[1].hometown == "undefined")
					{
						if(arguments[0][i].age == arguments[1].age)
						{
							temp[n] = arguments[0][i];
							n++;
						}
					}
					else{
						if(arguments[0][i].age == arguments[1].age && arguments[0][i].hometown == arguments[1].hometown)
						{
							temp[n] = arguments[0][i];
							n++;
						}
					}
				}
			}
			else{
				if(typeof arguments[1].age == "undefined")
				{
					if(typeof arguments[1].hometown == "undefined")
					{
						if(arguments[0][i].name == arguments[1].name)
						{
							temp[n] = arguments[0][i];
							n++;
						}
					}
					else{
						if(arguments[0][i].name == arguments[1].name && arguments[0][i].hometown == arguments[1].hometown)
						{
							temp[n] = arguments[0][i];
							n++;
						}
					}
				}
				else{
					if(typeof arguments[1].hometown == "undefined")
					{
						if(arguments[0][i].name == arguments[1].name && arguments[0][i].age == arguments[1].age)
						{
							temp[n] = arguments[0][i];
							n++;
						}
					}
					else{
						if(arguments[0][i].name == arguments[1].name && arguments[0][i].age == arguments[1].age && arguments[0][i].hometown == arguments[1].hometown)
						{
							temp[n] = arguments[0][i];
							n++;
						}
					}
				}
			}
		}
		if(temp.length == 0)
			return false;
		else
			return temp;
	}
}