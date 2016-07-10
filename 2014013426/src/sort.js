function bubbleSort()
{
	var A = arguments[0];
	var length = A.length;
	var temp = 0;
	for (var j = length - 1; j > 0; j--)
	{
		for (var i = 0; i < j; i++)
		{
			if (A[i] > A[i + 1])
			{
				temp = A[i];
				A[i] = A[i + 1];
				A[i + 1] = temp;
			}
		}
	}
	return A;
}

function insertionSort()
{
	var A = arguments[0];
	for (var j = 2; j <= A.length; j++)
	{
		key = A[j - 1];
		i = j - 1;
		while (i > 0 && A[i - 1] > key)
		{
			A[i] = A[i - 1];
			i--;
		}
		A[i] = key;
	}
	return A;
}

function selectSort()
{
	var A = arguments[0];
	var length = A.length;
	var result = new Array();
	while (length > 0)
	{
		var length;
		var minNum = Number.POSITIVE_INFINITY;
		var minPos = 0;
		for (var i = 0; i < length; i++)
		{
			if (A[i] < minNum)
			{
				minPos = i;
				minNum = A[i];
			}
		}
		A.splice(minPos, 1);
		result.push(minNum);
		length--;
	}
	return result;
}