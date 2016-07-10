function diff(del, arr)
{
	"use strict";
	var i, j, cnt = 0;
	var result = new Array();
	for(i = 0; i < arr.length; i++)
	{
		arr[i].judge = 1;
	}
	for(i = 0; i < del.length; i++)
	{
		for(j = 0; j < arr.length; j++)
		{
			if(arr[j].name == del[i].name)
			{
				arr[j].judge = 0;
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
	return result;
}