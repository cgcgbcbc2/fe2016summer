function bubbleSort(num)
{
//	console.log("bubbleSort");
//	var num = new Array(5, 1, 2, 4, 3);
//	for (var i = 0; i < num.length; i++)
//	{
//		console.log(num[i]);
//	}
	for (var i = 0; i < num.length; i++)
	{
		for (var j = num.length - 1; j > i; j--)
		{
			if (num[j] < num[j - 1])
			{
				var temp = num[j - 1];
				num[j - 1] = num[j];
				num[j] = temp;
			}
		}
	}
//	for (var i = 0; i < num.length; i++)
//	{
//		console.log(num[i]);
//	}
	return num;
}

function insertionSort(num)
{
//	console.log("insertionSort");
//	var num = new Array(5, 1, 2, 4, 3);
//	for (var i = 0; i < num.length; i++)
//	{
//		console.log(num[i]);
//	}
	for (var i = 1; i < num.length; i++)
	{
		var j = i - 1;
		while ((num[i] < num[j]) && (j >= 0))
		{
			j--;
		}
		var temp = num[i];
		for (var k = i - 1; k > j; k--)
		{
			num[k + 1] = num[k];
		}
		num[j + 1] = temp;
//		for (var t = 0; t < num.length; t++)
//		{
//			console.log(num[t]);
//		}
	}
//	for (var i = 0; i < num.length; i++)
//	{
//		console.log(num[i]);
//	}
	return num;
}

function selectionSort(num)
{
//	console.log("selectionSort");
//	var num = new Array(5, 1, 2, 4, 3);
//	for (var i = 0; i < num.length; i++)
//	{
//		console.log(num[i]);
//	}
	var min = Number.MAX_VALUE;
	var minIndex = 0;
	for (var i = 0; i < num.length; i++)
	{
		for (var j = i; j < num.length; j++)
		{
			if (num[j] < min)
			{
				minIndex = j;
				min = num[j];
			}
		}
		var temp = num[minIndex];
		num[minIndex] = num[i];
		num[i] = temp;
		min = Number.MAX_VALUE;
		minIndex = i + 1;
	}
//	for (var i = 0; i < num.length; i++)
//	{
//		console.log(num[i]);
//	}
	return num;
}
//bubbleSort();
//insertionSort();
////selectionSort();