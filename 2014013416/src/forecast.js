
infomation = new Object();

var win = new Array();
var winFrom8 = new Array();
var winFrom4 = new Array();
var winFinal = new Array();
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

function getWinFromTwo(num1, num2)
{
	var i = 0;
	var strength1,strength2;
	strength1 = infomation.arguments[num1];
	strength2 = infomation.arguments[num2];
	return strength1/(strength1 + strength2);
}

function getWin(searchNum)
{
	var i, k;
	for(i = 0; i <= 15; i++)
	{
		if(i % 4 == 0)
			winFrom8[i] = win[i][i+1] * win[i+2][i+3] * win[i][i+2] + win[i][i+1] * win[i+3][i+2] * win[i][i+3];
		if(i % 4 == 1)
			winFrom8[i] = win[i][i-1] * win[i+1][i+2] * win[i][i+1] + win[i][i-1] * win[i+2][i+1] * win[i][i+2];
		if(i % 4 == 2)
			winFrom8[i] = win[i][i+1] * win[i-1][i-2] * win[i][i-1] + win[i][i+1] * win[i-2][i-1] * win[i][i-2];
		if(i % 4 == 3)
			winFrom8[i] = win[i][i-1] * win[i-2][i-3] * win[i][i-2] + win[i][i-1] * win[i-3][i-2] * win[i][i-3];
	}
	for(i = 0; i <= 15; i++)
	{
		if((i >= 0 && i <= 3) || (i >= 8 && i<= 15))
		{
			winFrom4[i] = 0;
			for(k = i + 3; k <= i + 7; k++)
			{
				winFrom4[i] = winFrom4[i] + winFrom8[k] * winFrom8[i] * win[i][k]; 
			}
		}
		if((i >= 4 && i <= 7) || (i >= 12 && i<= 15))
		{
			winFrom4[i] = 0;
			for(k = i - 3; k <= i - 1; k++)
			{
				winFrom4[i] = winFrom4[i] + winFrom8[i] * winFrom8[k] * win[i][k];
			}
		}
	}
	for(i = 0; i <= 15; i++)
	{
		if(i <= 7)
		{
			winFinal[i] = 0;
			for(k = 8; k <= 15; k++)
			{
				winFinal[i] = winFinal[i] + winFrom4[i] * winFrom4[k]* win[i][k];
			}
		}
		if(i >= 8)
		{
			winFinal[i] = 0;
			for(k = 0; k <= 7; k++)
			{
				winFinal[i] = winFinal[i] + winFrom4[i] * winFrom4[k]* win[i][k];
			}
		}
	}
	return winFinal[searchNum];
}

function forecast(infomation,country)
{
	var searchNum;
	for(var i = 0; i <= 15;i++)
	{
		for(var k = 0; k <= 15; k++)
		{
			win[i][k] = getWinFromTwo(i, k);
		}
	}
	for(var l = 0; l <= 15; l++)
	{
		if(team[l] = country)
		{
			searchNum = l;
			break;
		}
	}
	return getWin(searchNum);
}