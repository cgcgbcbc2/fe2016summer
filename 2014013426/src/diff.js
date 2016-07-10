function diff()
{
	var group1 = arguments[0];
	var group2 = arguments[1];
	var result = new Array();
	var length1 = group1.length;
	var length2 = group2.length;
	for (var i = 0; i < length2; i++)
	{
		var flag = 0;
		for (var j = 0; j < length1; j++)
		{
			if (group1[j].name == group2[i].name)
			{
				flag = 1;
				break;
			}
		}
		if (!flag)
		{
			result.push(group2[i]);
		}
		flag = 0;
	}
	return result;
}