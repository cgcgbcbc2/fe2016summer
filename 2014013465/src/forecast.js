function forecast(power, country)
{
	"use strict";
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
	];    //十六强队名，队伍与序号一一对应


	var po = new Array(16); //序号与实力一一对应的数组
	var p = new Array(5);   //将每个国家比赛一定场次后的获胜概率记录下来
	for(i = 0; i < 5; ++i)
	{
		p[i] = new Array(16);
	}
	//将读到的实力值放入po
	var c;
	for(c in teams)
	{
		po[c]=power[teams[c]];
	}

	//循环序号
	var i = 0, j = 0, k = 0;
	//根据两个队伍i和j的实力算出本次比赛队伍i的获胜概率的函数
	var calcWin = function(i,j){return po[i]/(po[i]+po[j]);};

	//p[0][i]表示队伍i还没比赛时到目前为止的获胜概率，必为1
	for(i = 0; i < 16; ++i)
	{
		p[0][i] = 1;
	}

	//计算队伍j比了i次一直获胜的概率
	for(i = 1; i <= 4; ++i)
	{
		for(j = 0; j < 16; ++j)
		{
			p[i][j] = 0;
			var b = (j ^ (1<<(i-1))) & ~((1<<(i-1))-1);
			for(k = b; k < b + (1<<(i-1)); ++k)
			{

				p[i][j] += calcWin(j,k)*p[i-1][k];
			}
			p[i][j]*=p[i-1][j];
			
		}
	}

	//返回country对应序号的最终获胜概率
	return p[4][teams.indexOf(country)];
}
/*
var power = {
	Switzerland:100,
	Poland:90,
	Croatia:80,
	Portugal:70,
	Wales:60,
	["Northern Ireland"]:50,
	Hungary:40,
	Belgium:30,
	Germany:30,
	Slovakia:40,
	Italy:50,
	Spain:60,
	France:70,
	["Republic of Ireland"]:80,
	England:90,
	Iceland:100
};

console.log(forecast(power, "Switzerland"));
*/