function forecast(TeamsPoins, Query)
{	
	var teams = 
	[
		"Switzerland",
		"Poland",
		"Croatia",
		"Portugal",
		"Wales",
		"Northern Ireland",
		"Hungary",
		"Belgium",
		"Germany",
		"Slovakia",
		"Italy",
		"Spain",
		"France",
		"Republic of Ireland",
		"England",
		"Iceland"
	];
	
	var tp = new Array(16);	     //各国实力
	var i;
	for(i = 0; i < 16; i++)
	{
		tp[i] = TeamsPoins[teams[i]];
	}
	var a = new Array(16);
	for(i = 0; i < 16; i++)
	{
		a[i] = new Array(5);       //16个队胜i场的概率
		a[i][0] = 1;
	}
	var j = 0, k = 0;
	var WinningChance = function(i,j)
	{
		return tp[i]/(tp[i] + tp[j]);
	};
	
	for(i = 1; i < 5; i++)
	{
		for(j = 0; j < 16; j++)
		{
			a[j][i] = 0;
			var s = (j ^ (1<<(i-1))) & ~((1<<(i-1))-1);
			for(k = s; k < s + (1<<(i-1)); k++)
			{
				a[j][i] += WinningChance(j,k)*a[k][i-1]
			}
			a[j][i]*=a[j][i-1];
		}
	}
	return a[teams.indexOF(Query)][4];
}