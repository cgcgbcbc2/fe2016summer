function diff(infoOne, infoTwo)
{
/*	var infoOne = [
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
	
	var infoTwo = [
	{
		name: "cyf",
		age: 19,
		hometown: 'ShaoXing'
	},
	{
		name: "jhc",
		age: 19,
		hometown:'ShangHai'
	}
	];
*/	
	var ans = new Array();
	var i = 0, j = 0, notFound = true;
	for (i = 0; i < infoTwo.length; i++)
	{
		for (j = 0; j < infoOne.length; j++)
		{
			if (infoOne[j].name == infoTwo[i].name)
			{
				notFound = false;
				break;
			}
		}
		if (notFound == true)
		{
			ans.push(infoTwo[i]);
		}
		notFound = true;
	}
	if (ans.length == 0)
	{
//		console.log("no");
		return false;
	}
	else
	{
//		console.log(ans.length);
//		for (var i = 0; i < ans.length; i++)
//		{
//			console.log(ans[i].name);
//		}
//		return ans;	
	}
}
diff();