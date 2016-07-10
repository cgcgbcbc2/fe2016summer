// JavaScript Document
function forecast(ability, country)
{
	var able = new Array(16);
	var name = new Array(16);
	var posibility = 0;
	var posi = 1;
	var key;
	able[0] = ability["Switzerland"];
	name[0] = 'Switzerland';
	able[1] = ability["Poland"];
	name[1] = 'Poland';
	able[2] = ability["Croatia"];
	name[2] = 'Croatia';
	able[3] = ability["Portugal"];
	name[3] = 'Portugal';
	able[4] = ability["Wales"];
	name[4] = 'Wales';
	able[5] = ability["Northern Ireland"];
	name[5] = 'Northern Ireland';
	able[6] = ability["Hungary"];
	name[6] = 'Hungary';
	able[7] = ability["Belgium"];
	name[7] = 'Belgium';
	able[8] = ability["Germany"];
	name[8] = 'Germany';
	able[9] = ability["Slovakia"];
	name[9] = 'Slovakia';
	able[10] = ability["Italy"];
	name[10] = 'Italy';
	able[11] = ability["Spain"];
	name[11] = 'Spain';
	able[12] = ability["France"];
	name[12] = 'France'; 
	able[13] = ability["Republic of Ireland"];
	name[13] = 'Republic of Ireland';
	able[14] = ability["England"];
	name[14] = 'England';
	able[15] = ability["Iceland"];
	name[15] = 'Iceland';
	var countrynum = 0;
	for(var i = 0; i < 16; i++)
	{
		if(name[i] == country)
		{
			countrynum = i;
			break;
		}
	}
	var situation = new Array(15);
	var tempresult = new Array(15);
	var count = 0;
	var j = 0;
	<!--记录满足条件的个数-->
	<!--记录当前比赛获胜情况-->
	for(i = 0; i < 15; i++)
	{
		situation[i] = 0;
	}
	for(i = 0; i < 32678; i++)
	<!--共128种情况-->
	{
		<!--获得一种情况-->
		<!--下面判断冠军-->
		posi = 1;
		if(situation[0] == 0)
		{
			tempresult[0] = 0;
			posi = posi * (able[0] / (able[0] + able[1]));
		}
		else
		{
			tempresult[0] = 1;
			posi = posi * (able[1] / (able[0] + able[1]));
		}
		if(situation[1] == 0)
		{
			tempresult[1] = 2;
			posi = posi * (able[2] / (able[2] + able[3]));
		}
		else
		{
			tempresult[1] = 3;
			posi = posi * (able[3] / (able[2] + able[3]));
		}
		if(situation[2] == 0)
		{
			tempresult[2] = 4;
			posi = posi * (able[4] / (able[4] + able[5]));
		}
		else
		{
			tempresult[2] = 5;
			posi = posi * (able[5] / (able[4] + able[5]));
		}
		if(situation[3] == 0)
		{
			tempresult[3] = 6;
			posi = posi * (able[6] / (able[6] + able[7]));
		}
		else
		{
			tempresult[3] = 7;
			posi = posi * (able[7] / (able[6] + able[7]));
		}
		if(situation[4] == 0)
		{
			tempresult[4] = 8;
			posi = posi * (able[8] / (able[8] + able[9]));
		}
		else
		{
			tempresult[4] = 9;
			posi = posi * (able[9] / (able[8] + able[9]));
		}
		if(situation[5] == 0)
		{
			tempresult[5] = 10;
			posi = posi * (able[10] / (able[10] + able[11]));
		}
		else
		{
			tempresult[5] = 11;
			posi = posi * (able[11] / (able[10] + able[11]));
		}
		if(situation[6] == 0)
		{
			tempresult[6] = 12;
			posi = posi * (able[12] / (able[12] + able[13]));
		}
		else
		{
			tempresult[6] = 13;
			posi = posi * (able[13] / (able[12] + able[13]));
		}
		if(situation[7] == 0)
		{
			tempresult[7] = 14;
			posi = posi * (able[14] / (able[14] + able[15]));
		}
		else
		{
			tempresult[7] = 15;
			posi = posi * (able[15] / (able[14] + able[15]));
		}
		if(situation[8] == 0)
		{
			tempresult[8] = tempresult[0];
			posi = posi * (able[tempresult[0]] / (able[tempresult[0]] + able[tempresult[1]]));
		}
		else
		{
			tempresult[8] = tempresult[1];
			posi = posi * (able[tempresult[1]] / (able[tempresult[0]] + able[tempresult[1]]));
		}
		if(situation[9] == 0)
		{
			tempresult[9] = tempresult[2];
			posi = posi * (able[tempresult[2]] / (able[tempresult[2]] + able[tempresult[3]]));
		}
		else
		{
			tempresult[9] = tempresult[3];
			posi = posi * (able[tempresult[3]] / (able[tempresult[2]] + able[tempresult[3]]));
		}
		if(situation[10] == 0)
		{
			tempresult[10] = tempresult[4];
			posi = posi * (able[tempresult[4]] / (able[tempresult[4]] + able[tempresult[5]]));
		}
		else
		{
			tempresult[10] = tempresult[5];
			posi = posi * (able[tempresult[5]] / (able[tempresult[4]] + able[tempresult[5]]));
		}
		if(situation[11] == 0)
		{
			tempresult[11] = tempresult[6];
			posi = posi * (able[tempresult[6]] / (able[tempresult[6]] + able[tempresult[7]]));
		}
		else
		{
			tempresult[11] = tempresult[7];
			posi = posi * (able[tempresult[7]] / (able[tempresult[6]] + able[tempresult[7]]));
		}
		if(situation[12] == 0)
		{
			tempresult[12] = tempresult[8];
			posi = posi * (able[tempresult[8]] / (able[tempresult[8]] + able[tempresult[9]]));
		}
		else
		{
			tempresult[12] = tempresult[9];
			posi = posi * (able[tempresult[9]] / (able[tempresult[8]] + able[tempresult[9]]));
		}
		if(situation[13] == 0)
		{
			tempresult[13] = tempresult[10];
			posi = posi * (able[tempresult[10]] / (able[tempresult[10]] + able[tempresult[11]]));
		}
		else
		{
			tempresult[13] = tempresult[11];
			posi = posi * (able[tempresult[11]] / (able[tempresult[10]] + able[tempresult[11]]));
		}
		if(situation[14] == 0)
		{
			tempresult[14] = tempresult[12];
			posi = posi * (able[tempresult[12]] / (able[tempresult[12]] + able[tempresult[13]]));
		}
		else
		{
			tempresult[14] = tempresult[13];
			posi = posi * (able[tempresult[13]] / (able[tempresult[12]] + able[tempresult[13]]));
		}
		if(tempresult[14] == countrynum)
		{
			count = posi + count;
		}
		j = 0;
		while(situation[j] != 0)
		{
			situation[j] = 0;
			j++;
		}
		situation[j] = 1;
	}
	posibility = count;
	return posibility;
}