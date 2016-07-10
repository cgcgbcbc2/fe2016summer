function search() 
{
    var result = new Array();
    var data = arguments[0];
    var query = arguments[1];

    switch (typeof query) 
    {
        case "number":
            for (var i = 0; i < data.length; i++) 
            {
                if (data[i]["age"] == query)
                    result.push(data[i]);
            }
            break;

        case "string":
            for (var i = 0; i < data.length; i++)
             {
                if (data[i]["name"] == query) 
                {
                    result.push(data[i]);
                    break;
                }
            }
            break;

        default:
        if (query.hasOwnProperty("name"))    // name
        {
            var query_name = query["name"];
            for (var i = 0; i < data.length; i++)
                if (data[i]["name"] == query_name)
                    result.push(data[i]);

            if (query.hasOwnProperty("age"))       // name and age
            {
                var query_age = query["age"];
                for (var i = 0; i < result.length; i++)
                    if (result[i]["age"] != query_age)
                        result.splice(i, 1);

                if (query.hasOwnProperty("hometown")) {    // name, age and hometown
                    var query_hometown = query["hometown"];
                    for (var i = 0; i < result.length; i++)
                        if (result[i]["hometown"] != query_hometown)
                            result.splice(i, 1);
                }
            } 

            else if (query.hasOwnProperty("hometown"))      //name and hometown
            {
                var query_hometown = query["hometown"];
                for (var i = 0; i < result.length; i++) {
                    if (result[i]["hometown"] != query_hometown)
                        result.splice(i, 1);
                }
            }
        } 

        else 
        {
            if (query.hasOwnProperty("age"))       // age
            {
                var query_age = query["age"];
                for (var i = 0; i < data.length;i ++)
                	if(data[i]["age"] == query_age)
                		result.push(data[i]);

                if(query.hasOwnProperty("hometown"))      // age and hometown
                {
                	var query_hometown = query["hometown"];
                	for(var i = 0;i < result.length;i ++)
                		if(result[i]["hometown"] != query_hometown)
                			result.splice(i, 1);
                }
            }
        }
        break;
    }

    return result;
}

// var info = [{name: "Tom", age:12, hometown: "China"},
//             {name: "Will", age:18, hometown: "England"},
//             {name: "Jack", age:18, hometown: "France"},
//             {name: "Tom", age: 14, hometown: "Italy"},
//             {name: "Chen", age: 30, hometown: "China"}];
// var query = ["Tom", 18, {name:"Tom", age: 18}, {age: 18, hometown: "England"}];

// for(i = 0;i < 4;i ++)
// {
//     console.log(search(info, query[i]));
//     result = [];
//     console.log("---------------");
//  }   