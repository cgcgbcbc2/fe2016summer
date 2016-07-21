


function winner(teamSore,country)
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
    function getCountryId(inputCountry)
	{
		for(var i=0; i < 16; i++)
		{
			if(teams[i]==inputCountry)
			{
				return i;
			}
		}
		return;
	}
   function getRate(input1,input2,inputScore)
   {
	return (inputScore[teams[input1]]/(inputScore[teams[input1]]+inputScore[teams[input2]]));
   }
	var scoreArray = new Array(5);
	for(var i=0;i<5;i++)
	{
		scoreArray[i]=new Array(16);
	}
	for(var i=0;i<16;i++)
	{
		scoreArray[0][i]=1;
	}
	calcAmount = 1;
    for(var i =1; i<5;i++)
	{
		calcAmount *= 2;
		for(var j = 0;j < 16 / calcAmount;j++)
		{
			for(var k =0; k < calcAmount; k++)
			{
				scoreArray[i][calcAmount*j+k]=0;
				if(k<(calcAmount/2))
				{
					for(var l =calcAmount/2; l < calcAmount;l++)
					{
						scoreArray[i][calcAmount*j+k] += scoreArray[i - 1][calcAmount*j+k]*scoreArray[i - 1][calcAmount*j+l]*getRate(calcAmount*j+k,calcAmount*j+l,teamSore);
					}
				}
				else
				{
					for(var l =0; l < calcAmount/2;l++)
					{
						scoreArray[i][calcAmount*j+k] += scoreArray[i - 1][calcAmount*j+k]*scoreArray[i - 1][calcAmount*j+l]*getRate(calcAmount*j+k,calcAmount*j+l,teamSore);
					}
				}
			}
		}
	}
	var countryId = getCountryId(country);
	return scoreArray[4][countryId];
}
