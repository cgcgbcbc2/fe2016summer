function Bubble_sort(array)
{
    var i = array.length;
    var j;
    var temp;
    while (i > 0)
	{
        for (j = 0; j < i - 1; j++)
		{
            if (array[j] > array[j + 1])
			{
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        i--;
    }
    return array;
}
 
function Insert_sort(array,first,last)
{
    var i;
    var j;
    var temp;
    for(i = first + 1;i < last;i++)
    {
        temp = array[i];
        j = i - 1;
        while((j >= 0)&&(array[j] > temp))
        {
            array[j + 1] = array[j];
            j--;
		}
    }
    if(j != i - 1)
    {
	array[j + 1] = temp;
    }
}

function swap(a,b)
{
    var temp;
    temp = a[0];
    a[0] = b[0];
    b[0] = temp;
}

function Select_sort(array,n)
{
    var i,j,min,m;
    for(i = 0;i < n - 1;i++)
    {
        min = i;
        for(j = i + 1;j < n;j++)
        {
            if(array[min] > array[j])
            {
                min = j;
            }
        }
        if(min != i)
        {
            swap([array[min]],[array[i]]);
        }
    }
}
 