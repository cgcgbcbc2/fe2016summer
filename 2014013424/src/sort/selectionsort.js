// JavaScript Document
function selectionsort(array)
{
    var temp, mininal, minimali;
    for(var i = 0; i < array.length-1; i++)
    {
        minimal = array[i];
		minimali = i;
        for(var j = i + 1; j <= array.length-1; j++)
        {
            if(array[j] < minimal)
            {
               minimal = array[j];
			   minimali = j;
            }
        }   
        temp = array[i];
        array[i] = minimal;
        array[minimali] = temp;
    }
	return array;
}