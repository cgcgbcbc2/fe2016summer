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
];//编号从0到15,编号为偶数的先与比它大一的的国家进行八强比赛
//首先0到7号、8到15号需要分别决出两小组的四强；
//两小组组8个国家再决出二强；
//然后两小组的两个国家分别进行决赛；
//两小组分别决出小组冠军
//最终两小组冠军比赛，决出真正的冠军。
var pow = new Array;//各国能力值
var L_4 = new Array;//左边小组进入四强每个国家的几率
var R_4 = new Array;//右边小组进入四强每个国家的几率
var L_2 = new Array;//左边小组进入二强每个国家的几率
var R_2 = new Array;//右边小组进入二强每个国家的几率
var L_1 = new Array;//左边小组得到小组冠军的每个国家的几率
var R_1 = new Array;//右边小组得到小组冠军的每个国家的几率
var winner = new Array;//最终得到冠军的每个国家的几率

function findWinner()
{
	if(arguments[0] == "L_4")//计算左边小组进入四强每个国家的几率
	{
		for(var i = 0; i < 8; i ++)
		{
			if(i % 2 == 0)
			{
				L_4[i] = pow[i]/(pow[i] + pow[i + 1]);
			}
			else
			{
				L_4[i] = pow[i]/(pow[i] + pow[i - 1]);
			}
		}

	}
	else if(arguments[0] == "R_4")//计算右边小组进入四强每个国家的几率
	{
		for(var i = 8; i < 16; i ++)
		{
			if(i % 2 == 0)
			{
				R_4[i] = pow[i]/(pow[i] + pow[i + 1]);
			}
			else
			{
				R_4[i] = pow[i]/(pow[i] + pow[i - 1]);
			}
		}
	}
	else if(arguments[0] == "L_2")//计算左边小组进入二强每个国家的几率
	{
		for(var i = 0; i < 8; i ++)
		{
			if(i % 4 == 0)
			{
				L_2[i] = L_4[i] *(pow[i]/(pow[i]+pow[i+2]) + pow[i]/(pow[i]+pow[i+3]));
			}
			else if(i % 4 == 1)
			{
				L_2[i] = L_4[i] *(pow[i]/(pow[i]+pow[i+1]) + pow[i]/(pow[i]+pow[i+2]));
			}
			else if(i % 4 == 2)
			{
				L_2[i] = L_4[i] *(pow[i]/(pow[i]+pow[i-2]) + pow[i]/(pow[i]+pow[i-1]));
			}
			else if(i % 4 == 3)
			{
				L_2[i] = L_4[i] *(pow[i]/(pow[i]+pow[i-3]) + pow[i]/(pow[i]+pow[i-2]));
			}
		}
	}
	else if(arguments[0] == "R_2")
	{
		for(var i = 8; i < 16; i ++)
		{
			if(i % 4 == 0)
			{
				R_2[i] = R_4[i] *(pow[i]/(pow[i]+pow[i+2]) + pow[i]/(pow[i]+pow[i+3]));
			}
			else if(i % 4 == 1)
			{
				R_2[i] = R_4[i] *(pow[i]/(pow[i]+pow[i+1]) + pow[i]/(pow[i]+pow[i+2]));
			}
			else if(i % 4 == 2)
			{
				R_2[i] = R_4[i] *(pow[i]/(pow[i]+pow[i-2]) + pow[i]/(pow[i]+pow[i-1]));
			}
			else if(i % 4 == 3)
			{
				R_2[i] = R_4[i] *(pow[i]/(pow[i]+pow[i-3]) + pow[i]/(pow[i]+pow[i-2]));
			}
		}
	}
	else if(arguments[0] == "L_1")
	{
		for(var i = 0; i < 4; i ++)
		{
				for(var j = 4; j < 8; j ++ )
				{
					L_1[i] += L_2[i]* (pow[i] / (pow[i] + pow[j]))
				}
		}
		for(var i = 4; i < 8; i ++)
		{
				for(var j = 0; j < 4; j ++ )
				{
					L_1[i] += L_2[i]* (pow[i] / (pow[i] + pow[j]))
				}
		}
	}
	else if(arguments[0] == "R_1")
	{
		for(var i = 8; i < 12; i ++)
		{
				for(var j = 12; j < 16; j ++ )
				{
					R_1[i] += R_2[i]* (pow[i] / (pow[i] + pow[j]))
				}		
		}
		for(var i = 12; i < 16; i ++)
		{		
				for(var j = 8; j < 12; j ++ )
				{
					R_1[i] += R_2[i]* (pow[i] / (pow[i] + pow[j]))
				}
		}
	}
	else if(arguments[0] == "winner")
	{
		for(var i = 0; i < 16;i ++)
		{
			if(i < 8)
			{
				for(var j = 8; i < 16; i ++)
				{
					winner[i] += L_1[i]*(pow[i] / (pow[i] + pow[j]));
				}
			}
			else if(i > 8)
			{
				for(var j = 0; i < 8; i ++)
				{
					winner[i] += R_1[i]*(pow[i] / (pow[i] + pow[j]));
				}
			}
		}
	}
	return winner[i];
}
function forecast ()
{
	pow[0] = arguments[0]["Switzerland"]
	pow[1] = arguments[0]["Poland"]	
	pow[2] = arguments[0]["Croatia"]
	pow[3] = arguments[0]["Portugal"]
	pow[4] = arguments[0]["Wales"]
	pow[5] = arguments[0]["Northern Ireland"]
	pow[6] = arguments[0]["Hungary"]
	pow[7] = arguments[0]["Belgium"]
	pow[8] = arguments[0]["Germany"]
	pow[9] = arguments[0]["Slovakia"]
	pow[10] = arguments[0]["Italy"]
	pow[11] = arguments[0]["Spain"]
	pow[12] = arguments[0]["France"]
	pow[13] = arguments[0]["Republic of Ireland"]
	pow[14] = arguments[0]["England"]
	pow[15] = arguments[0]["Iceland"]
	findWinner("winner");
	for(var i = 0; i < 16; i ++)
	{
		if(teams[i] == arguments[1])
		{
			return winner[i];
		}
	}
}