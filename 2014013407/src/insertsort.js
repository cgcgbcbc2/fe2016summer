function insertsort()
{
	"use strict";
	var to_sort = arguments[0];

	for(var i = 1; i < to_sort.length; i++)
	{
		var key = to_sort[i];
		var j = i - 1;
		for(; j >= 0; j--)
		{
			if(to_sort[j] > key)
			{
				to_sort[j + 1] = to_sort[j];
			}
			else
			{
				break;
			}
		}
		to_sort[j + 1] = key;
 	}

 	return to_sort;
}