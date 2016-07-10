function forecast(countryStrength, targetCountry)
{
	var countries = new Array("Switzerland", "Poland", "Croatia", "Portugal", "Wales", "Northern Ireland", "Hungary", "Belgium",
								"Germany", "Slovakia", "Italy", "Spain", "France", "Republic of Ireland", "England", "Iceland");
	var strength = new Array(16);
	var targetCountryIndex;
	var probablity;
/*	var targetCountry = "England";
	var countryStrength = {
	England: 83,
	Germany: 100,
	France: 96,
	Italy: 90,
	Belgium: 87,
	Hungary: 77,
	Portugal: 82,
	Switzerland: 80,
	Iceland: 80,
	Poland: 85,
	"Northern Ireland": 75,
	"Republic of Ireland": 75,
	Slovakia: 73,
	Croatia: 93,
	Spain: 88,
	Wales: 84
	}
*/
	function calculate(start, end, target)
	{
		var result = 0;
		if (end - start == 1)
		{
			return (strength[target] / (strength[start] + strength[end]));
		}
		else if (end - start == 3)
		{
			if (target - start <= 1)
			{
				for (var j = end - 1; j <= end; j++)
				{
					result += calculate(end - 1, end, j) * calculate(start, start + 1, target) * (strength[target] / (strength[target] + strength[j]));
				}
			}
			else
			{
				for (var j = start; j <= start + 1; j++)
				{
					result += calculate(start, start + 1, j) * calculate(end - 1, end, target) * (strength[target] / (strength[target] + strength[j]));
				}
			}
			return result;
		}
		else if (end - start == 7)
		{
			if (target - start <= 3)
			{
				for (var j = end - 3; j <= end; j++)
				{
					result += calculate(end - 3, end, j) * calculate(start, start + 3, target) * (strength[target] / (strength[target] + strength[j]));
				}
			}
			else
			{
				for (var j = start; j <= start + 3; j++)
				{
					result += calculate(start, start + 3, j) * calculate(end - 3, end, target) * (strength[target] / (strength[target] + strength[j]));
				}
			}
			return result;
		}
		else if (end - start == 15)
		{
			if (target - start <= 7)
			{
				for (var j = end - 7; j <= end; j++)
				{
					result += calculate(end - 7, end, j) * calculate(start, start + 7, target) * (strength[target] / (strength[target] + strength[j]));
				}
			}
			else
			{
				for (var j = start; j <= start + 7; j++)
				{
					result += calculate(start, start + 7, j) * calculate(end - 7, end, target) * (strength[target] / (strength[target] + strength[j]));
				}
			}
			return result;
		}
	}
	
	function findCountry(s)
	{
		for (i = 0; i < 16; i++)
		{
			if (countries[i] == s)
			{
				return i;
			}
		}
	}

	for (var k = 0; k < 16; k++)
	{
		strength[k] = countryStrength[countries[k]];
//		console.log(strength[k]);
	}
	targetCountryIndex = findCountry(targetCountry);
	probablity = calculate(0, 15, targetCountryIndex);
//	console.log(probablity);
//	console.log(targetCountryIndex);
	return probablity;
}
//forecast();