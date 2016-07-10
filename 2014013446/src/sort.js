function bubble_sort(){
    var input_array = arguments[0];
    var len = input_array.length;

    for(var i = 0;i < len;i ++)
    {
        for(var j = i;j < len;j ++)
        {
            if(input_array[i] > input_array[j])
            {
                var tmp = input_array[i];
                input_array[i] = input_array[j];
                input_array[j] = tmp;
            }
        }
    }

    return input_array;
}

function insert_sort(){
    var input_array = arguments[0];
    var len = input_array.length;
    for(var j = 1;j < len;j ++)
    {
        var key = input_array[j];
        var i = j-1;
        while(i >= 0 && input_array[i] > key)
        {
            input_array[i+1] = input_array[i];
            i = i-1;
        }
        input_array[i+1] = key;
    }
    return input_array;
}

function select_sort()
{
    var input_array = arguments[0];
    var len = input_array.length;
    for(var i = 0;i < len;i ++)
    {
        var key = input_array[i];
        var k = i;
        for(var j = i+1;j < len;j ++)
        {
            if(key > input_array[j])
            {
                key = input_array[j];
                k = j;
            }
        }
        input_array[k] = input_array[i];
        input_array[i] = key;
    }

    return input_array;
}

// var arr = [3, 1, 5, 10, 23, 7, 8, 9, 50, 25, 6];
// console.log(bubble_sort(arr));
// console.log(insert_sort(arr));
// console.log(select_sort(arr));