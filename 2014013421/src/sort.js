/*
向首兴
2016/7/2
*/

/*冒泡排序：
参数elements为待排序数组，排序后应为递增顺序*/
function bubble_sort(elements)
{
	var len = elements.length;
	var i, j, temp;
	for(i = 1;i < len;i++)
	{
		for(j = 0;j < len - i)
		{
			if((elements[j] > elements[j + 1]))
			{
				temp = elements[j];
				elements[j] = elements[j + 1];
				elements[j + 1] = temp;
			}
		}
	}
}

/*插入排序：
参数elements为待排序数组，排序后应为递增顺序*/
function insertion_sort(elements)
{
	var i, j, key;
	var len = elements.length;
	for(i = 1;i < len;i++) 
	{
		key = elements[i];
		j = i - 1;
		while(elements[j] > key && j >= 0)
		{
			elements[j + 1] = elements[j];
			j--;
		}
		elements[j + 1] = key;
	}
}

/*选择排序：
参数elements为待排序数组，排序后应为递增顺序*/
function selection_sort(elements)
{
	var len = elements.length;
	var i, j, key, _min;
	for(i = 0;i < len;i++)
	{
		key = i;
		_min = elements[i];
		for(j = i + 1;j < len;j++)
		{
			if(elements[j] < _min)
			{
				key = j;
				_min = elements[j];
			}
		}
		elements[key] = elements[i];
		elements[i] = _min;
	}
}