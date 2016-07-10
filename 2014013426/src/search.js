function search()
{
	var info = arguments[0];
	var result = new Array();
	var num_result = 0;
	if (typeof(arguments[1]) == "number")
	{
		while (info.length > 0)
		{
			var info_single = info.shift();
			if (info_single.age == arguments[1])
			{
				result.push(info_single);
				num_result++;
			}
		}
	}
	else if (typeof(arguments[1]) == "string")
	{
		while (info.length > 0)
		{
			var info_single = info.shift();
			if (info_single.name == arguments[1])
			{
				result.push(info_single);
				num_result++;
				break;
			}
		}
	}
	else if (typeof(arguments[1]) == "object")
	{
		var total_detail = Object.getOwnPropertyNames(arguments[1]).length;
		if (total_detail == 0)
		{
			while (info.length > 0)
			{
				var info_single = info.shift();
				result.push(info_single);
				num_result++;
			}
			if (num_result)
			{
				return result;
			}
			else
			{
				return false;
			}
		}
		else if (total_detail == 1)
		{
			if (arguments[1].hasOwnProperty('name'))
			{
				while (info.length > 0)
				{
					var info_single = info.shift();
					if (info_single.name == arguments[1].name)
					{
						result.push(info_single);
						num_result++;
					}
				}
			}
			else if (arguments[1].hasOwnProperty('age'))
			{
				while (info.length > 0)
				{
					var info_single = info.shift();
					if (info_single.age == arguments[1].age)
					{
						result.push(info_single);
						num_result++;
					}
				}
			}
			else
			{
				while (info.length > 0)
				{
					var info_single = info.shift();
					if (info_single.hometown == arguments[1].hometown)
					{
						result.push(info_single);
						num_result++;
					}
				}
			} 
		}
		else if (total_detail == 2)
		{
			if (!arguments[1].hasOwnProperty('name'))
			{
				while (info.length > 0)
				{
					var info_single = info.shift();
					if (info_single.age == arguments[1].age && info_single.hometown == arguments[1].hometown)
					{
						result.push(info_single);
						num_result++;
					}
				}
			}
			else if (!arguments[1].hasOwnProperty('age'))
			{
				while (info.length > 0)
				{
					var info_single = info.shift();
					if (info_single.name == arguments[1].name && info_single.hometown == arguments[1].hometown)
					{
						result.push(info_single);
						num_result++;
					}
				}
			}
			else
			{
				while (info.length > 0)
				{
					var info_single = info.shift();
					if (info_single.age == arguments[1].age && info_single.name == arguments[1].name)
					{
						result.push(info_single);
						num_result++;
					}
				}
			}
		}
		else if (total_detail == 3)
		{
			while (info.length > 0)
			{
				var info_single = info.shift();
				if (info_single.name == arguments[1].name && info_single.hometown == arguments[1].hometown && info_single.age == arguments[1].age)
				{
					result.push(info_single);
					num_result++;
				}
			}
		}
	}
	else if (typeof(arguments[1]) == "undefined")
	{
		while (info.length > 0)
		{
			var info_single = info.shift();
			result.push(info_single);
			num_result++;
		}
		if (num_result)
		{
			return result;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
	if (num_result)
	{
		return result;
	}
	else
	{
		return false;
	}
}