function bubbleSort(nums)
{
	if(!(nums instanceof Array))
	{
		alert("The argument must be an array!");
		return;
	}
	for(var i = 0; i < nums.length; i++)
	{
		for(var j = nums.length; j > i; j--)
		{
			if(nums[j] < nums[j - 1])
			{
				var tem = nums[j];
				nums[j] = nums[j - 1];
				nums[j - 1] = tem;
			}
		}
	}
}

function insertionSort(nums)
{
	if(!(nums instanceof Array))
	{
		alert("The argument must be an array!");
		return;
	}
	for(var j = 1; j < nums.length; j++)
	{
		var tem = nums[j];
		var i = j - 1;
		while(i >= 0 && nums[i] > tem)
		{
			nums[i + 1] = nums[i];
			i--;
		}
		nums[i + 1] = tem;
	}
}

function selectionSort(nums)
{
	if(!(nums instanceof Array))
	{
		alert("The argument must be an array!");
		return;
	}
	for(var i = 0; i < nums.length; i++)
	{
		var temid = i;
		for(var j = i + 1; j < nums.length; j++)
		{
			if(nums[j] < nums[temid])
			{
				temid = j;
			}
		}
		var tem = nums[temid];
		nums[temid] = nums[i];
		nums[i] = tem;
	}
}