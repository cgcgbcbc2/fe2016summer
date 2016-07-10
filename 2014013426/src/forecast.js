function forecast()
{
	var strength = new Array(16);
	var quarter = new Array(16);
	var half = new Array(16);
	var final = new Array(16);
	var prob = new Array(16);
	var prob_each = new Array(16);
	var target;
	for (var i = 0; i < 16; i++)
	{
		quarter[i] = 0;
		half[i] = 0;
		final[i] = 0;
		prob[i] = 0;
	}
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
	for (var i = 0; i < 16; i++)
	{
		prob_each[i] = new Array(16);
	}
	for (var i = 0; i < 16; i++)
	{
		strength[i] = arguments[0][teams[i]];
	}
	for (var i = 0; i < 16; i++)
	{
		for (var j = 0; j < 16; j++)
		{
			if (strength[i] == 0 && strength[j] == 0)
			{
				prob_each[i][j] = 0.5;
			}
			else
			{
				prob_each[i][j] = strength[i] / (strength[i] + strength[j]);
			}
		}
	}
	for (var i = 0; i < 8; i++)
	{
		quarter[2 * i] = prob_each[2 * i][2 * i + 1];
		quarter[2 * i + 1] = prob_each[2 * i + 1][2 * i];
	}
	for (var i = 0; i < 4; i++)
	{
		half[4 * i] = quarter[4 * i] * (quarter[4 * i + 2] * prob_each[4 * i][4 * i + 2] + quarter[4 * i + 3] * prob_each[4 * i][4 * i + 3]);
		half[4 * i + 1] = quarter[4 * i + 1] * (quarter[4 * i + 2] * prob_each[4 * i + 1][4 * i + 2] + quarter[4 * i + 3] * prob_each[4 * i + 1][4 * i + 3]);
		half[4 * i + 2] = quarter[4 * i + 2] * (quarter[4 * i] * prob_each[4 * i + 2][4 * i] + quarter[4 * i + 1] * prob_each[4 * i + 2][4 * i + 1]);
		half[4 * i + 3] = quarter[4 * i + 3] * (quarter[4 * i] * prob_each[4 * i + 3][4 * i] + quarter[4 * i + 1] * prob_each[4 * i + 3][4 * i + 1]);
	}
	for (var i = 0; i < 2; i++)
	{
		for (var s = 0; s < 4; s++)
		{
			for (var j = 0; j < 4; j++)
			{
				final[8 * i + s] += half[8 * i + s] * (half[8 * i + 4 + j] * prob_each[8 * i + s][8 * i + 4 + j]);
				final[8 * i + s + 4] += half[8 * i + s + 4] * (half[8 * i + j] * prob_each[8 * i + s + 4][8 * i + j])
			}
		}
	}
	for (var i = 0; i < 8; i++)
	{
		for (var j = 0; j < 8; j++)
		{
			prob[i] += final[i] * final[j + 8] * prob_each[i][j + 8];
			prob[i + 8] += final[i + 8] * final[j] * prob_each[i + 8][j];
		}
	}
	for (var i = 0; i < 16; i++)
	{
		if (teams[i] == arguments[1])
		{
			target = i;
			break;
		}
	}
	return prob[i];
}