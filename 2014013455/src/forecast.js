function forecast(power, team) 
{
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
		var i;
		var j;
		var k;
		var first = new Array(16);
		var half = new Array(16);
		var final = new Array(16);
		var champion = new Array(16);
		for (i = 0; i < 16; i++) 
		{
			first[i] = 0;
			if (i%2 == 0) first[i] = power[teams[i]] / (power[teams[i]] + power[teams[i+1]]);
			else first[i] = power[teams[i]] / (power[teams[i]] + power[teams[i-1]]);
		}
		for (j = 0; j < 16; j++) 
		{
			half[j] = 0;
			var a;
			if ((j % 4) <= 1) 
			{
				a = j - j % 4 + 2;
			}
			else
			{
				a = j - j % 4;
			}
			for (i = a; i <= a + 1; i++) 
			{
				half[j] += first[j] * first[i] * power[teams[j]] / (power[teams[i]] + power[teams[j]]);
			}
		}
		for (k = 0; k < 16; k++) 
		{
			var a;
			final[k] = 0;
			if (k % 8 <= 3) 
			{
				a = k - k % 8 + 4;
			}
			else
			{
				a = k - k % 8;
			}
			for (i = a; i <= a + 3; i++) 
			{
				final[k] += half[k] * half[i] * power[teams[k]] / (power[teams[i]] + power[teams[k]]);
			}
		}
		for (k = 0; k < 16; k++) 
		{
			var a;
			champion[k] = 0;
			if (k <= 7) 
			{
				a = 8;
			}
			else
			{
				a = 0;
			}
			for (i = a; i <= a + 7; i++) 
			{
				champion[k] += final[k] * final[i] * power[teams[k]] / (power[teams[i]] + power[teams[k]]);
			}
		}
		var index = teams.indexOf(team);
		return champion[index];
}