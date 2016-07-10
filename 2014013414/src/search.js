
function search()
{
	var Len = arguments[0].length;
	var  info = new Array();
	if(typeof arguments[1] === "number")//第一种情况，判断年龄
	{
		for(var i = 0; i < Len; i ++)
		{
			if(arguments[0][i].age == arguments[1])
			{
				info.push(arguments[0][i]);
			}
		}
		if (info.length == 0)
		{
			return false;
		}
		else 
		{
			return info;
		}
	}
	else if(typeof arguments[1] === "string")//第二种情况，判断名字
	{
		for(var i = 0; i < Len; i ++)
		{
			if(arguments[0][i].name === arguments[1])
			{
					info.push(arguments[0][i]);
					break;//找到第一个同学即可
			}
		}
		if (info.length === 0)
		{
			return false;
		}
		else 
		{
			return info;
		}
	}
	else if(typeof arguments[1] === "object")//第三种情况，判断对象
	{
		var info2 = Object.keys(arguments[1]);
		
		if(info2.length === 1)//只含有一个信息的对象
		{
			var info3 = new Array();
			for(var i = 0; i < info2.length; i ++)
			{
				if(info2[i] == "name")
				{
					info3.push(info2[i]);
				}
				else if (info2[i] == "age")
				{
					info3.push(info2[i]);
				}
				else if (info2[i] == "hometwon")
				{
					info3.push(info2[i]);
				}
			}
			for(var i = 0; i < Len; i ++)
			{

				if(arguments[0][i][info3[0]] === arguments[1][info3[0]])
				{

					info.push(arguments[0][i]);
				}
			}
			if (info.length === 0)
			{
				return false;
			}
			else
			{
				return info;
			}			
		}
		else if(info2.length === 2)//含有2个信息
		{
			if(info2[0] === "name")
			{
				if(info2[1] === "age")//含有name和age
				{
					for(var i = 0; i < Len; i ++)
					{
						if(arguments[0][i].name === arguments[1].name)
						{
							if(arguments[0][i].age === arguments[1].age)
							{
								info.push(arguments[0][i]);
							}
						}
					}
				}
				else if(info2[1] === "hometown")//含有name和hometown
				{
					for(var i = 0; i < Len; i ++)
					{
						if(arguments[0][i].name === arguments[1].name)
						{
							if(arguments[0][i].hometown === arguments[1].hometown)
							{
								info.push(arguments[0][i]);
							}
						}
					}
				}
			}
			else if(info2[0] === "age")//含有age和hometown
			{
				for(var i = 0; i < Len; i ++)
				{
					if(arguments[0][i].age === arguments[1].age)
						{
							if(arguments[0][i].hometown === arguments[1].hometown)
							{
								info.push(arguments[0][i]);
							}
						}
				}
			}
			if(info.length === 0)
			{
				return false;
			}
			else 
			{
				return info;
			}
		}
		else if(info2.length === 3)//包含全部信息
		{
			for(var i = 0; i < Len; i++)
			{
				if(arguments[0][i].name === arguments[1].name)
				{
					if(arguments[0][i].age === arguments[1].age)
					{
						if(arguments[0][i].hometown === arguments[1].hometown)
						{
							info.push(arguments[0][i]);
						}
					}
				}
			}
			if(info.length === 0)
			{
				return false;
			}
			else 
			{
				return info;
			}
		}
	}
}
