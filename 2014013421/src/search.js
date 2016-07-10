/*
向首兴
2016/7/2
*/

function search(students, reference)
{
	if(typeof arguments[1] == 'number')//按照年龄查询
	{
		var result = new Array();
		var j = 0;
		for(var i = 0;i < students.length;i++) 
		{
				if(students[i].age == arguments[1])
				{
					result[j] = students[i];
					j++;
				}
		}
		if(j == 0)
		{
			return false;
		}
		else
		{
			return result;
		}
	}
	else if(typeof arguments[1] == 'string')//按照姓名查询
	{
		for(var i = 0;i < students.length;i++)
		{
			if(students[i].name == arguments[1])
			{
				return students[i];
			}
		}
		return false;
	}
	else if(typeof arguments[1] == 'object')//按照对象属性查询
	{
		var temp = new Array();
		var result = new Array();
		for(i = 0;i < students.length;i++)
		{
			temp[i] = 0;
		}
		var flag = 0;
		var i, j;
		if(typeof arguments[1].age != 'undefined')
		{
			flag++;
			for(i = 0;i < students.length;i++)
			{
				if(students[i].age == arguments[1].age)
				{
					temp[i] = temp[i] + 1;
				}
			}
		}
		if(typeof arguments[1].name != 'undefined')
		{
			flag++;
			for(i = 0;i < students.length;i++)
			{
				if(students[i].name == arguments[1].name)
				{
					temp[i] = temp[i] + 1;
				}
			}
		}
		if(typeof arguments[1].hometown != 'undefined')
		{
			flag++;
			for(i = 0;i < students.length;i++)
			{
				if(students[i].hometown == arguments[1].hometown)
				{
					temp[i] = temp[i] + 1;
				}
			}
		}
		if(flag == 0)
		{
			return false;
		}
		else
		{
			j = 0;

			for(i = 0;i < students.length;i++)
			{
				if(temp[i] == flag)
				{
					result[j] = students[i];
					j++;
				}
			}

			if(j == 0)
			{
				return false;
			}
			else
			{
				return result;
			}
		}
	}
	else
	{
		return false;
	}
}