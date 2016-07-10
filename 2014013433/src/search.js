function search(info, searchInfo)
{
/*	var info = [
	{
		name: "cyf",
		age: 19,
		hometown: 'ShaoXing'
	},
	{
		name: "wgy",
		age: 19,
		hometown:'YunCheng'
	}
	];
	var searchInfo = {age: 19, hometown:"YunCheng"};
*/	
	if ((!searchInfo) && (typeof(searchInfo)!="undefined") && (searchInfo != 0))
	{
		return info;
	}
	var s = typeof(searchInfo);
	console.log(s);
	var x;
	var find = false;
	var result = new Array();
	if (s == "number")
	{
//		console.log("in number");
		for (var i = 0; i < info.length; i++)
		{
			//console.log(info[i].name);
			if (info[i].age == searchInfo)
			{
				result.push(info[i]);
//				console.log(info[i].name);
				find = true;
			}				
		}
		if (find == true)
		{
//			console.log(result.length);
//			for (var i = 0; i < result.length; i++)
//			{
//				console.log(result[i].name);
//			}
			return result;
		}
		else
		{
//			console.log("no");
			return false;
		}
	}
	else if (s == "string")
	{
//		console.log("in string");
		for (var i = 0; i < info.length; i++)
		{
			if ((info[i].hometown == searchInfo) || (info[i].name == searchInfo))
			{
//				console.log(info[i].name);
				return info[i];
			}				
		}
//		console.log("no");
		return false;
	}
	else if (s == "object")
	{
//		console.log("in object");
		var flag = true;
		for (var i = 0; i < info.length; i++)
		{
			for (var item in searchInfo)
			{
//				console.log(item);
//				console.log(info[i][item]);
//				console.log(searchInfo[item]);
				if (info[i][item] != searchInfo[item])
				{
					flag = false;
					break;
				}
			}
			if (flag == true)
			{
				result.push(info[i]);
//				console.log(info[i].name);
				find = true;
			}
			flag = true;
		}
		if (find == true)
		{
//			console.log(result.length);
//			for (var i = 0; i < result.length; i++)
//			{
//				console.log(result[i].name);
//			}
			return result;
		}
		else
		{
//			console.log("no");
			return false;
		}
	}
}
//search();