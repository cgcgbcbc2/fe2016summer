function search(mateInfo, param)
{
	if(typeof param === 'number') 
	{
		var ans = [];
		for(var i = 0; i < mateInfo.length; i++)
		{
			if(mateInfo[i].age === param)
			{
				ans.push(mateInfo[i]);
			}
		}
		return ans.length === 0 ? false : ans;
	}
	else if(typeof param === 'string')
	{
		for(var i = 0; i < mateInfo.length; i++)
		{
			if(mateInfo[i].name === param)
			{
				return mateInfo[i];
			}
		}
		return false;
	}
	else if(typeof param === 'object')
	{
		var ans = [];
		for(var i = 0; i < mateInfo.length; i++)
		{
			if((mateInfo[i].name === param.name || typeof param.name === 'undefined') &&
				(mateInfo[i].age === param.age || typeof param.age === 'undefined') &&
				(mateInfo[i].hometown === param.hometown || typeof param.hometown === 'undefined'))
			{
				ans.push(mateInfo[i]);
			}
		}
		return ans.length === 0 ? false : ans;
	}
}