function diff(data1,data2)
{
    var ans = new Array();
    for(var t in data2)
    {
        var flag = 1;
        for(var i in data1)
        {
            if (data2[t]["name"] == data1[i]["name"])
            {
                flag = 0;
            }
        }
        if(flag == 1)
        {
            ans.push(data2[t]);
        }
    }
    return ans;
}

//var testdata1 = [{name:"yukeyi",age:19,hometown:"tianjin"},{name:"wuyining",age:18,hometown:"anhui"},{name:"liu",age:19,hometown:"guangzhou"},{name:"honda",age:26,hometown:"japan"},{name:"alan",age:25,hometown:"brazil"}];
//var testdata2 = [{name:"yukeyi",age:19,hometown:"tiann"},{name:"sdfsd",age:18,hometown:"anhui"},{name:"liu",age:19,hometown:"guangzhou"},{name:"honda",age:26,hometown:"japan"},{name:"fuck",age:25,hometown:"brazil"}];
//console.log(diff(testdata1,testdata2));