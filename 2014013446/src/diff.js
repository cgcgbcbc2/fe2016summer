function diff(){
    var data1 = arguments[0];
    var data2 = arguments[1];
    var result = new Array();  // record elements exists in data2 but not in data1

    var name_list = new Array();
    for(var i = 0;i < data1.length;i ++)
        name_list.push(data1[i]["name"]);

    for(var i = 0;i < data2.length;i ++)
    {
        var tmp = data2[i]["name"];
        if(name_list.indexOf(tmp) == -1)
            result.push(data2[i]);
    }

    return result;
}

// var info1 = [{name: "Tom", age:12, hometown: "China"},
//             {name: "Will", age:18, hometown: "England"},
//             {name: "Jack", age:18, hometown: "France"},
//             {name: "Tom", age: 14, hometown: "Italy"},
//             {name: "Chen", age: 30, hometown: "China"}];

// var info2 = [{name: "Tom", age:12, hometown: "China"},
//             {name: "Willisp", age:18, hometown: "England"},
//             {name: "Jackson", age:18, hometown: "France"},
//             {name: "Tom", age: 14, hometown: "Italy"},
//             {name: "Damon", age: 30, hometown: "China"}];

// console.log(diff(info1, info2));