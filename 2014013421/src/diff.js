/*
向首兴
2016/7/2
*/

function diff(students1, students2)
{
	if(arguments.length < 2)
	{
		return false;
	}
	if(typeof students1 != 'object' || typeof students2 != 'object')
	{
		return false;
	}
	var i, j, k;
	var result = new Array();
	k = 0;
	for(i = 0;i < students2.length;i++)
	{
		for(j = 0;j < students1.length;j++)
		{
			if(students1[j].name == students2[i].name)
			{
				break;
			}
		}
		if(j == students1.length)
		{
			result[k] = students2[i];
			k++;
		}
	}
	return result;
}