function diff(mateInfo1, mateInfo2)
{
	var ans = [];
	for(var j = 0; j < mateInfo2.length; j++)
	{
		var ok = true;
		for(var i = 0; i < mateInfo1.length; i++)
		{
			if(mateInfo2[j].name === mateInfo1[i].name)
			{
				ok = false;
				break;
			}
		}
		if(ok === true)
		{
			ans.push(mateInfo2[j]);
		}
	}
	return ans;
}