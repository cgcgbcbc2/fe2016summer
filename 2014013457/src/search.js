function search(arr, que)
{
	"use strict";
	var i, cnt = 0;
	var result = new Array();
	if(typeof(que) == "number")
	{
		for(i = 0; i < arr.length; i++)
		{
			if(arr[i].age == que)
			{
				result[cnt] = arr[i];
				cnt++;
			}
		}
	}
	else if(typeof(que) == "string")
	{
		for(i = 0; i < arr.length; i++)
		{
			if(arr[i].name == que)
			{
				return arr[i];
			}
		}
		return false;
	}
	else if(typeof(que) == "object")
	{
		for(i = 0; i < arr.length; i++)
		{
			arr[i].judge = 1;
		}
		if(que.hasOwnProperty('name'))
		{
			for(i = 0; i < arr.length; i++)
			{
				if(arr[i].name != que.name)
				{
					arr[i].judge = 0;
				}
			}
		}
		if(que.hasOwnProperty('age'))
		{
			for(i = 0; i < arr.length; i++)
			{
				if(arr[i].age != que.age)
				{
					arr[i].judge = 0;
				}
			}
		}
		if(que.hasOwnProperty('hometown'))
		{
			for(i = 0; i < arr.length; i++)
			{
				if(arr[i].hometown != que.hometown)
				{
					arr[i].judge = 0;
				}
			}
		}
		for(i = 0; i < arr.length; i++)
		{
			if(arr[i].judge == 1)
			{
				result[cnt] = arr[i];
				delete result[cnt].judge;
				cnt++;
			}
			delete arr[i].judge;
		}
	}
		
	if(result.length == 0)
		return false;
	else return result;
}