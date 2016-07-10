
	function search()
	{
		if(typeof(arguments[1]) == 'number')
		{
			
			var sameAge = new Array();
			for(var i = 0; i < arguments[0].length; i++)
			{
				if(arguments[0][i].age == arguments[1])
				{
					sameAge.push(arguments[0][i]);
				}
			}
			if(sameAge.length == 0)
			{
				return false;
			}
			else
			{
				return sameAge;
			}
		}
		if(typeof(arguments[1]) == 'string')
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
		if(typeof(arguments[1]) == 'object')
		{
			var infomationNeed = new Array();
			var isOrNot = new Array();
			var length = 0;
			if(arguments[1].hasOwnProperty('name'))
			{
				length++;
				for(var i = 0; i < arguments[0].length; i++)
				{
					if(arguments[0][i].name == arguments[1].name)
					{
						isOrNot[i] = 1;
					}
					else
					{
						isOrNot[i] = 0;
					}
				}
			}
			if(arguments[1].hasOwnProperty('age'))
			{
				length++;
				for(var i = 0; i < arguments[0].length; i++)
				{
					if(arguments[0][i].age == arguments[1].age)
					{
						isOrNot[i] ++;
					}
					else
					{
						isOrNot[i] --;
					}
				}
			}
			if(arguments[1].hasOwnProperty('hometown'))
			{
				length++;
				for(var i = 0; i < arguments[0].length; i++)
				{
					if(arguments[0][i].hometown == arguments[1].hometown)
					{
						isOrNot[i] ++;
					}
					else
					{
						isOrNot[i] --;
					}
				}
			}
			for(var m = 0; m < arguments[0].length; m++)
			{
				if(isOrNot[m] == length)
				{
					infomationNeed.push(arguments[0][i])
				}
			}
			if(infomationNeed.length == 0)
			{return false}
			else
			{return infomationNeed;}
		}
	}
