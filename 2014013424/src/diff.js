// JavaScript Document
function diff(information1, information2)
{
    var result = new Array();
    var i, j;
    var len1 = information1.length;
	var len2 = information2.length;
    for(i = 0; i < len2; i++)
	{
		for(j = 0; j < len1; j++)
		{
			if(information2[i].name == information1[j].name)
			{
				break;
			}
		}
		if(j == len1)
		{
			result.push(information2[i]);
		}		
	}
	if(result.length == 0)
	{
		return 'false';
	}
	else
    {
		return result;
	}
}