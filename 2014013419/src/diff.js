function diff()
{
	var ans = new Array();
	var k = 0;
	for(var i = 0; i < arguments[1].length; i++)
	{
		var findflag = false;
		for(var j = 0; j < arguments[0].length; j++)
		{
			if(arguments[0][j].name === arguments[1][i].name)
			{
				findflag = true;
				break;
			}
		
		}
		if(findflag != true)
		{
			ans[k] = arguments[1][i];
			k++;
		}
	}
	return ans;
}