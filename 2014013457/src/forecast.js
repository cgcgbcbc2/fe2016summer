function winIN(vs, l, r)
{
	"use strict";
	if(l + 1 == r)
	{
		return [vs[l][r], vs[r][l]];
	}
	else
	{
		var win1, win2;
		var i, j, m = (l + r - 1) / 2;
		win1 = winIN(vs, l, m);
		win2 = winIN(vs, m + 1, r);
		var win = new Array();
		for(i = 0; i <= m - l; i++)
		{
			win[i] = 0;
			for(j = 0; j <= r - m - 1; j++)
			{
				win[i] += win1[i] * win2[j] * vs[i + l][j + m + 1]; 
			}
		}
		for(j = 0; j <= r - m - 1; j++)
		{
			win[j + m - l + 1] = 0;
			for(i = 0; i <= m - l; i++)
			{
				win[j + m - l + 1] += win1[i] * win2[j] * vs[j + m + 1][i + l]; 
			}
		}
		return win;
	}
}

function forecast(cap, que)
{
	"use strict";
	var i, j, result;
	var arr = new Array();
	var vs = new Array();
	var teams = [
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
	for(i = 0; i < 16; i++)
	{
		arr[i] = cap[teams[i]];
	}
	for(i = 0; i < 16; i++)
	{
		vs[i] = new Array();
		for(j = 0; j < 16; j++)
		{
			vs[i][j] = arr[i] / (arr[i] + arr[j]);
		}
	}
	var win = winIN(vs, 0, 15);
	for(i = 0; i < 16; i++)
	{
		if(teams[i] == que)
		{
			result = win[i];
		}
	}
	return result;
}