function bubblesort()
{
	"use strict";
	var to_sort = arguments[0];

	for(var i = 0; i < to_sort.length; i++)
	{
		for(var j = to_sort.length - 1; j > i; j--)
		{
			if(to_sort[j] < to_sort[j - 1])
			{
				var temp = to_sort[j];
				to_sort[j] = to_sort[j - 1];
				to_sort[j - 1] = temp;
			}
		}
	}

	return to_sort;
}