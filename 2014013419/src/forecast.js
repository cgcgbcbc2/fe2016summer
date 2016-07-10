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
function forecast()
{
	var info = arguments[0];
	var country = arguments[1];
	var pofwin = new Array();
	var temp = new Array();
	for(var i = 0; i < 16; i++)
	{
		pofwin[teams[i]] = 1;
	}
	for(var i = 2; i <= 16; i = i * 2)
	{
		for(var j = 0; j < 16/i; j++)
		{
			for(var k = 0; k < i; k++)
			{
				temp[teams[j*i+k]] = 0;
				if(k < i/2)
				{
					for(var m = 0; m < i/2; m++)
					{
						temp[teams[j*i+k]] = temp[teams[j*i+k]] + pofwin[teams[j*i+k]] * pofwin[teams[j*i+i/2+m]] * info[teams[j*i+k]] / (info[teams[j*i+k]] + info[teams[j*i+i/2+m]]);
					}
				}
				else
				{
					for(var m = 0; m < i/2; m++)
					{
						temp[teams[j*i+k]] = temp[teams[j*i+k]] + pofwin[teams[j*i+k]] * pofwin[teams[j*i+m]] * info[teams[j*i+k]] / (info[teams[j*i+k]] + info[teams[j*i+m]]);
					}
				}
			}
			for(var k = 0; k < i; k++)
			{
				pofwin[teams[j*i+k]] = temp[teams[j*i+k]];
			}
		}	
	}
	return pofwin[country];
}
