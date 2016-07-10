//冒泡
function bubble(data)
{
    var n = data.length;
    for(var i = n;i > 0;i--)
    {
        for(var j = 0;j < i;j++)
        {
            if(data[j] > data[j+1])
            {
                var temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
    return data;
}

//插入
function insert(data)
{
    var n = data.length;
    for(var i = 1;i < n;i++)
    {
        for(var j = i;j>0;j--)
        {
            if(data[j] < data[j-1])
            {
                var temp = data[j];
                data[j] = data[j-1];
                data[j-1] = temp;
            }
            else
                break;
        }
    }
    return data;
}

//选择
function select(data)
{
    var n = data.length;
    var min;
    var minnum;
    for(var i = 0;i < n;i++)
    {
        min = 1000000;
        for(var j = i;j<n;j++)
        {
            if(data[j] < min)
            {
                min = data[j];
                minnum = j;
            }
        }
        var temp = data[minnum];
        data[minnum] = data[i];
        data[i] = temp;
    }
    return data;
}

//var testdata = [4,8,2,6,9,1,3,5,2,76,3,6];
//console.log(select(testdata));