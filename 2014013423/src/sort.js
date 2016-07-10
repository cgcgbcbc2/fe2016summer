"use strict";

//Merge sort
function merge_sort(array)
{   //End of recursion
    if (array.length<=1)
        return array;

    //Divide
    var sa1 = merge_sort(array.slice(0, array.length/2)),
        sa2 = merge_sort(array.slice(array.length/2, array.length));
    //Conquer
    var i = 0, j = 0;
    var result = [];
    while ((i<sa1.length)||(j<sa2.length))
    {   if (i>=sa1.length)
        {   result.push(sa2[j]);
            j++;
        }
        else if (j>=sa2.length)
        {   result.push(sa1[i]);
            i++;
        }
        else if (sa1[i]<sa2[j])
        {   result.push(sa1[i]);
            i++;
        }
        else
        {   result.push(sa2[j]);
            j++;
        }
    }
    return result;
}

//Insertion sort
function insert_sort(array)
{   var result = [];
    for (var i=0;i<array.length;i++)
    {   for (var j=0;j<result.length;j++)
            if (result[j]>array[i])
                break;
        result.splice(j, 0, array[i]);
    }
    return result;
}

//Selection sort
function select_sort(array)
{   var result = [];
    array = array.slice();

    while (array.length>0)
    {   var c_val = Infinity, c_index = -1;
        for (var i=0;i<array.length;i++)
            if (array[i]<c_val)
            {   c_val = array[i];
                c_index = i;
            }
        result.push(c_val);
        array.splice(c_index, 1);
    }
    return result;
}

//Export all functions in Node.js
if (exports)
{   exports.merge_sort = merge_sort;
    exports.insert_sort = insert_sort;
    exports.select_sort = select_sort;
}
