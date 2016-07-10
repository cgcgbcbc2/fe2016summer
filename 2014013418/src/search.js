function search()
{
	var res;                   
	var bl = false;  
	
	var i;
	if(typeof arguments[1] == "string")  //如果第二个参数为字符串
	{
		for(i in arguments[0])
		{
			if(arguments[0][i].name == arguments[1])
			{
				res = arguments[0][x];
				flag = true;
				break;
			}
		}
	}
	else if(typeof arguments[1] == "number")   //如果第二个参数为数字
	{
		res = new Array();
		for(i in arguments[0])
		{
			if(arguments[0][i].age == arguments[1])
			{
				res.push(arguments[0][i]);
				flag = true;
			}
		}
	}
	else			//如果第二个参数为对象
	{
		res = new Array();
		for(i in arguments[0])
		{
			if((arguments[0][i].name == arguments[1].name) || (!arguments[1].hasOwnProperty("name"))
			&& ((arguments[0][i].age == arguments[1].age) || !arguments[1].hasOwnProperty("age"))
			&& ((arguments[0][i].hometown == arguments[1].hometown) || !arguments[1].hasOwnProperty("hometown")))
			{
				res.push(arguments[0][i]);
				flag = true;
			}
		}
	}
	if(bl == true)
	{
		return res;
	}
	else
	{
		return false;
	}
}