function selectionsort()
{
	"use strict";
	var to_sort = arguments[0];

	for(var i = 0; i < to_sort.length; i++)
	{
		var smallest = i;
		for(var j = i + 1; j < to_sort.length; j++)
		{
			if(to_sort[j] < to_sort[smallest])
			{
				smallest = j;
			}
		}
		if(smallest != i)
		{
			var temp = to_sort[smallest];
			to_sort[smallest] = to_sort[i];
			to_sort[i] = temp;
		}
	}

	return to_sort;
}