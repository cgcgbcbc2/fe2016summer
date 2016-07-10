function bubble_sort(arr)
{
	"use strict";
	var i, j, temp;
	for(i = 0; i < arr.length - 1; i++)
	{
		for(j = 0; j < arr.length - i - 1; j++)
		{
			if (arr[j + 1] < arr[j])
			{
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

function select_sort(arr)
{
	"use strict";
	var i, j, temp, min;
	for(i = 0; i < arr.length - 1; i++)
	{
		min = i;
		for(j = i + 1; j < arr.length; j++)
		{
			if (arr[j] < arr[min])
			{
				min = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	return arr;
}

function insert_sort(arr)
{
	"use strict";
	var i, j, key;
	for(i = 1; i < arr.length; i++)
	{
		key = arr[i];
		j = i;
		while(j >= 0 && arr[j - 1] > key)
		{
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = key;
	}
	return arr;
}