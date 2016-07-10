function diff()
{
	var x,y;
	var flag = 0;
	var res = new Array;
	for (x in argument[1]) 
	{
		flag = 0;
		for (y in argument[0]) 
		{
			if (argument[1][x].name == argument[0][y].name) 
			{
				flag = 1;
			}
		}
		if(flag == 0)
		res.push(argument[1][x]);
	}
	return res;
}