function BubbleSort(arr)
{
	for(var i = 0; i < arr.length; i++)
	{
		for(var j = arr.length - 2; j >= i; j--)
			if(arr[j + 1] < arr[j])
			{
                var k = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = k;
			}
	}
}
function InsertSort(arr)
{
	for(var i = 0; i < arr.length; i++)
	{
		var num = arr[i], j = 0;
		for(j = i; j > 0; j--)  //对第i个数进行插入
		{	
			if(num < arr[j - 1])
				arr[j] = arr[j - 1];
			else
				break;
		}
		arr[j] = num;
	}
}
function SelectSort(arr)
{
	for(var i = 0; i < arr.length; i++)
	{
		var min = i;
		for(var j = i + 1; j < arr.length; j++)   //从剩下的元素里面选择最小的
			if(arr[j] < arr[min])
                min = j;
        if(i != min)  //如果最小的和当前位置不相等，交换
        {
        	var k = arr[min];
        	arr[min] = arr[i];
        	arr[i] = k;
        }
	}
}