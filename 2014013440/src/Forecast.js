function forecast(teamInfo, country)
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
	var power = [];
	var len = 16;
	for(var i = 0; i < len; i++)
	{
		power.push(teamInfo[teams[i]]);
	}
	var beatTab = new Array();
	for(var i = 0; i < len; i++)
	{
		beatTab.push(new Array(len));
	}
	for(var i = 0; i < len; i++)
	{
		for(var j = 0; j < len; j++)
		{
			beatTab[i][j] = power[i] / (power[i] + power[j]);
		}
	}
	var winPoss = getWinPoss(0, len, beatTab);
	for(var i = 0; i < len; i++)
	{
		if(country === teams[i])
		{
			return winPoss[i];
		}
	}
}

function getWinPoss(l, r, beatTab)
{
	var len = r - l;
	if(len <= 2)
	{
		return [beatTab[l][r - 1], beatTab[r - 1][l]];
	}
	var possComb = [];
	var m = (l + r) / 2;
	var poss1 = getWinPoss(l, m, beatTab);
	var poss2 = getWinPoss(m, r, beatTab);
	for(var i = l; i < m; i++)
	{
		var poss = 0;
		for(var j = m; j < r; j++)
		{
			poss += poss1[i - l] * beatTab[i][j] * poss2[j - m];
		}
		possComb.push(poss);
	}
	for(var j = m; j < r; j++)
	{
		var poss = 0;
		for(var i = l; i < m; i++)
		{
			poss += poss2[j - m] * beatTab[j][i] * poss1[i - l];
		}
		possComb.push(poss);
	}
	return possComb;
}

// var teamInfo =
// 	{
// 		"Switzerland": 50,
// 		"Poland": 60,
// 		"Croatia": 70,
// 		"Portugal": 80,
// 		"Wales": 10,
// 		"Northern Ireland": 20,
// 		"Hungary": 10,
// 		"Belgium": 50,
// 		"Germany": 90,
// 		"Slovakia": 20,
// 		"Italy": 100,
// 		"Spain": 100,
// 		"France": 100,
// 		"Republic of Ireland": 100,
// 		"England": 100,
// 		"Iceland" : 100
// 	};
// var query = "Poland";
// forecast(teamInfo, query);