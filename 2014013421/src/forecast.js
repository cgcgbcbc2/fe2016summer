/*
向首兴
2016/7/2
*/


function forecast(team_strength, preference)
{
	var names = ['Switzerland', 'Poland', 'Croatia', 'Portugal',
					  'Wales', 'Northern Ireland', 'Hungary', 'Belgium',
					  'Germany', 'Slovakia', 'Italy', 'Spain', 'France',
					  'Republic of Ireland', 'England', 'Iceland']; //存放队伍名称
	var strength = new Array();//存放队伍实力值
	var possibilities = new Array();//存放队伍到达当前轮的可能性
	var temp_possibilities = new Array();//用于更新可能性时暂存到达前一轮的可能性
	var prefer_index;//指定的队伍下标
	var possibilities_between_two_teams = new Array();//二维数组存放任意两队之间的比赛胜率
	
	for (var l = 0; l < names.length; l++) //初始化队伍实力值、队伍到达本轮即16强的可能性、指定队伍的下标
	{
		strength[l] = team_strength[names[l]];
		possibilities[l] = 1;
		if(names[l] == preference)
		{
			prefer_index = l;
		}
	};
	for (var l = 0; l < names.length; l++) //计算任意两队间的胜率，避免重复计算
	{
		possibilities_between_two_teams[l] = new Array();
		for (var m = 0; m < names.length; m++) 
		{
			possibilities_between_two_teams[l][m] = p_calculate(strength[l], strength[m]);
		};
	};

	for(var l = names.length / 2;l >= 1;l = l / 2)//模拟一轮一轮的战斗，16支队伍只需要4轮战斗
	{
		fight(l);
	}
	return possibilities[prefer_index];
	function p_calculate(strength1, strength2)//计算实力值为strength1的队伍战胜实力值为strength2的队伍的概率
	{
		if(strength1 == 0 && strength2 == 0)
		{
			return 0.5;
		}
		else
		{
			return strength1 / (strength1 + strength2);
		}
	}
	function fight(num)//模拟 “2*num强” 进 “num强” 的比赛
	{
		var i, j, k, temp;
		var n = 16 / num;//本轮中每一个对抗小组的人数
		for (i = 0; i < num; i++) 
		{
			if(prefer_index >= i * n && prefer_index < (i + 1) * n)//指定队伍在该对抗小组中，只需更新指定队伍胜率即可
			{
				if(prefer_index < n / 2 * (2 * i + 1))//指定队伍在该对抗小组的第一区，其对手为第二区所有队伍
				{
					temp = 0;
					for(j = n / 2 * (2 * i + 1);j < n * (i + 1);j++)
					{
						temp = temp + possibilities[j] * possibilities_between_two_teams[prefer_index][j];
					}
					possibilities[prefer_index] = possibilities[prefer_index] * temp;
				}
				else//指定队伍在该对抗小组的第二区，其对手为第一区所有队伍
				{
					temp = 0;
					for(j = n * i;j < n / 2 * (2 * i + 1);j++)
					{
						temp = temp + possibilities[j] * possibilities_between_two_teams[prefer_index][j];
					}
					possibilities[prefer_index] = possibilities[prefer_index] * temp;
				}
			}
			else//指定队伍不在该对抗小组中，每一区队伍的对手是另外一区的所有队伍，需更新所有队伍胜率
			{
				//保存当前胜率
				for(j = 0;j < names.length;j++)
				{
					temp_possibilities[j] = possibilities[j];
				}
				//更新第一区队伍的胜率
				for(j = n * i;j < n / 2 * (2 * i + 1);j++)
				{
					temp = 0;
					for(k = n / 2 * (2 * i + 1);k < n * (i + 1);k++)
					{
						temp = temp + temp_possibilities[k] * possibilities_between_two_teams[j][k];
					}
					possibilities[j] = temp_possibilities[j] * temp;
				}
				//更新第二区队伍的胜率
				for(j = n / 2 * (2 * i + 1);j < n * (i + 1);j++)
				{
					temp = 0;
					for(k = n * i;k < n / 2 * (2 * i + 1);k++)
					{
						temp = temp + temp_possibilities[k] * possibilities_between_two_teams[j][k];
					}
					possibilities[j] = temp_possibilities[j] * temp;
				}
			}
		};
	}

};

