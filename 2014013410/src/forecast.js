
		var p = new Array();
		var p8 = new Array();
		var p4 = new Array();
		var p2 = new Array();
		var p1 = new Array();
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
			
		function cal()
		{
			if(arguments[0] == 'p8') 
			{
				for(var i =0; i<16; i++)
				{
					if(i % 2 == 0)
					{
						p8[i] = p[i] / (p[i]+p[i+1]);
					}
					else
					{
						p8[i] = p[i] / (p[i]+p[i-1]);
					}
				}
			}
			else if(arguments[0] == 'p4')
			{
				for(var i =0; i<16; i++)
				{
					if( i % 4 == 0)
					{					
							p4[i] += p8[i+2] * p[i] / (p[i]+p[i+2]) + p8[i+3] * p[i] / (p[i]+p[i+3]);
					}
					if( i % 4 == 1)
					{					
							p4[i] += p8[i+1] * p[i] / (p[i]+p[i+1]) + p8[i+2] * p[i] / (p[i]+p[i+2]);
					}
					if( i % 4 == 2)
					{					
							p4[i] += p8[i-2] * p[i] / (p[i]+p[i-2]) + p8[i-1] * p[i] / (p[i]+p[i-1]);
					}
					if( i % 4 == 3)
					{					
							p4[i] += p8[i-3] * p[i] / (p[i]+p[i-3]) + p8[i-2] * p[i] / (p[i]+p[i-2]);
					}
				}
			}
			else if(arguments[0] == 'p2')
			{
				for(var i =0; i<16; i++)
				{
					p2[i] = 0.0;
					if( i >= 0 && i < 4)
					{
						for(var j = 4; j <8; j++)
						{
							p2[i] += p4[j] * p[i] / (p[i] + p[j]);
						}
					}
					else if(i < 8)
					{
						for(var j = 0; j <4; j++)
						{
							p2[i] += p4[j] * p[i] / (p[i] + p[j]);
						}
					}
					else if(i <12)
					{
						for(var j = 12; j < 16; j++)
						{
							p2[i] += p4[j] * p[i] / (p[i] + p[j]);
						}
					}
					else if(i <16)
					{
						for(var j = 8; j < 12; j++)
						{
							p2[i] += p4[j] * p[i] / (p[i] + p[j]);
						}
					}
				}
			}
			else if(arguments[0] == 'p1')
			{
				for(i = 0; i <16; i++)
				{
					if(i <8)
					{
						for(var j=8; j<16; j++)
						{
							p1[i] += p2[j] * p[i] / (p[i] + p[j]);
						}
					}
					else
					{
						for(var j=0; j<8; j++)
						{
							p1[i] += p2[j] * p[i] / (p[i] + p[j]);
						}
					}
				}
			}
			return 0;
		}
		function forecast()
		{
			p[0] = arguments[0]["Switzerland"];
			p[1] = arguments[0]["Poland"];
			p[2] = arguments[0]["Croatia"];
			p[3] = arguments[0]["Portugal"]
			p[4] = arguments[0]["Wales"];
			p[5] = arguments[0]["Northern Ireland"];
			p[6] = arguments[0]["Hungary"];
			p[7] = arguments[0]["Belgium"];
			p[8] = arguments[0]["Germany"];
			p[9] = arguments[0]["Slovakia"];
			p[10] = arguments[0]["Italy"];
			p[11] = arguments[0]["Spain"];
			p[12] = arguments[0]["France"];
			p[13] = arguments[0]["Republic of Ireland"];
			p[14] = arguments[0]["England"];
			p[15] = arguments[0]["Iceland"];
			cal('p8');
			cal('p4');
			cal('p2');
			cal('p1');
			for(var i =0; i <16; i++)
			{
				if(teams[i] == arguments[1])
				{
					return p1[i];
				}
			}
		}
