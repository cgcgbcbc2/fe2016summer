// JavaScript Document
function bubblesort(array) 
{
    var i, j, temp;
    for(i = array.length; i >= 1; i--) 
	{
        for (j = 0; j < i - 1; j++) 
		{
            if (array[j + 1] < array[j]) 
			{
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
 
    }
    return array;
}