function search(data, query)
{
    if(typeof query == "number")
    {
        var ans1 = new Array();
        for(var t in data)
        {
            //console.log(data[t]);
            if(data[t]["age"] == query)
            {
                ans1.push(data[t]);
            }
        }
        if(ans1.length != 0)
            return ans1;
        else
            return false;
    }
    else if (typeof query == "string")
    {
        for(var t in data)
        {
            //console.log(data[t]);
            if(data[t]["name"] == query)
            {
                return data[t];
            }
        }
        return false;
    }
    else if(typeof query == "object")
    {
        var ans2 = new Array();
        for(var t in data)
        {
            if (query["name"] != undefined)
            {
                if(query["name"] != data[t]["name"])
                    continue;
            }
            if (query["age"] != undefined)
            {
                if(query["age"] != data[t]["age"])
                    continue;
            }
            if (query["hometown"] != undefined)
            {
                if(query["hometown"] != data[t]["hometown"])
                    continue;
            }
            ans2.push(data[t]);
        }
        if(ans2.length == 0)
        {
            return false;
        }
        else
        {
            return ans2;
        }
    }
}

/*var testdata = [{name:"yukeyi",age:19,hometown:"tianjin"},{name:"wuyining",age:18,hometown:"anhui"},{name:"liu",age:19,hometown:"guangzhou"},{name:"honda",age:26,hometown:"japan"},{name:"alan",age:25,hometown:"brazil"}]
console.log(search(testdata,"yukeyi"));
console.log(search(testdata,"ysh"));
console.log(search(testdata,"yukeyi"));
console.log(search(testdata,19));
console.log(search(testdata,18));
console.log(search(testdata,{}));
console.log(search(testdata,{name:"alan",hometown:"sdf"}));*/