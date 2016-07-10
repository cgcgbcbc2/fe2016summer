function selectSort(array)
{
    var i = 0;
    var j = 0;
    var min = 0;
    var temp = 0;
    var len = array.length;

    for(i = 0; i < len - 1; i++)
    {
        min = i;
        for (j = i + 1; j < len; j++){
            if (array[min] > array[j])
                min = j;
        }

        if (min != i)
        {
            temp = array[min];
            array[min] = array[i];
            array[i] = temp;
        }
    }

    return(array);
}