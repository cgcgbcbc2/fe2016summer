function bubbleSort(items) 
{
  var length = items.length;
  var i, j, tmp;
  for (i = 0; i < length; i++) 
  {
    for (j = 0; j < (length - i - 1); j++) 
    {
      if(items[j] > items[j + 1]) 
      {
        tmp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = tmp; 
      }
    }        
  }
  return items;
}

function insertionSort(items) 
{
    var len = items.length, temp, i, j;
    for (i = 0; i < len; i++)
    {
      j = i;
      while (j > 0 && items[j] < items[j - 1])
      {
          temp = items[j];
          items[j] = items[j - 1];
          items[j - 1] = temp;
          j--;
      }
    }
    return items;
}

function selectionSort(items){

    var len = items.length, min, temp;
    for (i = 0; i < len; i++)
    {
        min = i;
        for (j = i + 1; j < len; j++)
        {
            if (items[j] < items[min])
            {
                min = j;
            }
        }
        if (i != min)
        {
            temp = items[i];
            items[i] = items[min];
            items[min] = temp;
        }
    }
    return items;
}