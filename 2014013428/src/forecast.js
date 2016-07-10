//created by Zhangjie Cao


//预测函数
	function forecast(the_first_16_nations, nation_name){
		//算出每个队对每个队的胜率
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

		var required_team = 0;

		var i = 0;
		for (i = 0; i < 16; i++){
			if (nation_name == teams[i]){
				required_team = i;
				break;
			}
		}

		console.log(required_team);

		var teams_capicity = new Array();
		for (i = 0; i < 16; i++){
			teams_capicity[i] = the_first_16_nations[teams[i]];
		}

		console.log(teams_capicity);
		//算出每个队相对于其他队的胜率，相当于算出进8强的概率
		var wp_8 = new Array();
		for (i = 0; i < 16; i++)
		{
			var temp = new Array();
			for (j = 0; j < 16; j++)
			{
				if (i == j){
					temp.push(-1);
					continue;
				}
				temp.push(teams_capicity[i] / (teams_capicity[i] + teams_capicity[j]));
			}
			wp_8.push(temp);
		}

		console.log(wp_8);
		//算出每个队进四强概率
		var wp_4 = new Array();

		wp_4.push(wp_8[0][1] * (wp_8[0][2] * wp_8[2][3] + wp_8[0][3] * wp_8[3][2]));
		wp_4.push(wp_8[1][0] * (wp_8[1][2] * wp_8[2][3] + wp_8[1][3] * wp_8[3][2]));
		wp_4.push(wp_8[2][3] * (wp_8[2][0] * wp_8[0][1] + wp_8[2][1] * wp_8[1][0]));
		wp_4.push(wp_8[2][3] * (wp_8[2][0] * wp_8[0][1] + wp_8[2][1] * wp_8[1][0]));

		wp_4.push(wp_8[4][5] * (wp_8[4][6] * wp_8[6][7] + wp_8[4][7] * wp_8[7][6]));
		wp_4.push(wp_8[5][4] * (wp_8[5][6] * wp_8[6][7] + wp_8[5][7] * wp_8[7][6]));
		wp_4.push(wp_8[6][7] * (wp_8[6][4] * wp_8[4][5] + wp_8[6][5] * wp_8[5][4]));
		wp_4.push(wp_8[6][7] * (wp_8[6][4] * wp_8[4][5] + wp_8[6][5] * wp_8[5][4]));

		wp_4.push(wp_8[8][9] * (wp_8[8][10] * wp_8[10][11] + wp_8[8][11] * wp_8[11][10]));
		wp_4.push(wp_8[9][8] * (wp_8[9][10] * wp_8[10][11] + wp_8[9][11] * wp_8[11][10]));
		wp_4.push(wp_8[10][11] * (wp_8[10][8] * wp_8[8][9] + wp_8[10][9] * wp_8[9][8]));
		wp_4.push(wp_8[10][11] * (wp_8[10][8] * wp_8[8][9] + wp_8[10][9] * wp_8[9][8]));

		wp_4.push(wp_8[12][13] * (wp_8[12][14] * wp_8[14][15] + wp_8[12][15] * wp_8[15][14]));
		wp_4.push(wp_8[13][12] * (wp_8[13][14] * wp_8[14][15] + wp_8[13][15] * wp_8[15][14]));
		wp_4.push(wp_8[14][15] * (wp_8[14][12] * wp_8[12][13] + wp_8[14][13] * wp_8[13][12]));
		wp_4.push(wp_8[14][15] * (wp_8[14][12] * wp_8[12][13] + wp_8[14][13] * wp_8[13][12]));

		console.log(wp_4);

		//算出每个队进决赛概率
		var wp_2 = new Array();
		
		wp_2.push(wp_4[0] * (wp_8[0][4] * wp_4[4] + wp_8[0][5] * wp_4[5] + wp_8[0][6] * wp_4[6] + wp_8[0][7] * wp_4[7]));
		wp_2.push(wp_4[1] * (wp_8[1][4] * wp_4[4] + wp_8[1][5] * wp_4[5] + wp_8[1][6] * wp_4[6] + wp_8[1][7] * wp_4[7]));
		wp_2.push(wp_4[2] * (wp_8[2][4] * wp_4[4] + wp_8[2][5] * wp_4[5] + wp_8[2][6] * wp_4[6] + wp_8[2][7] * wp_4[7]));
		wp_2.push(wp_4[3] * (wp_8[3][4] * wp_4[4] + wp_8[3][5] * wp_4[5] + wp_8[3][6] * wp_4[6] + wp_8[3][7] * wp_4[7]));

		wp_2.push(wp_4[4] * (wp_8[4][0] * wp_4[0] + wp_8[4][1] * wp_4[1] + wp_8[4][2] * wp_4[2] + wp_8[4][3] * wp_4[3]));
		wp_2.push(wp_4[5] * (wp_8[5][0] * wp_4[0] + wp_8[5][1] * wp_4[1] + wp_8[5][2] * wp_4[2] + wp_8[5][3] * wp_4[3]));
		wp_2.push(wp_4[6] * (wp_8[6][0] * wp_4[0] + wp_8[6][1] * wp_4[1] + wp_8[6][2] * wp_4[2] + wp_8[6][3] * wp_4[3]));
		wp_2.push(wp_4[7] * (wp_8[7][0] * wp_4[0] + wp_8[7][1] * wp_4[1] + wp_8[7][2] * wp_4[2] + wp_8[7][3] * wp_4[3]));

		wp_2.push(wp_4[8] * (wp_8[8][12] * wp_4[12] + wp_8[8][13] * wp_4[13] + wp_8[8][14] * wp_4[14] + wp_8[8][15] * wp_4[15]));
		wp_2.push(wp_4[9] * (wp_8[9][12] * wp_4[12] + wp_8[9][13] * wp_4[13] + wp_8[9][14] * wp_4[14] + wp_8[9][15] * wp_4[15]));
		wp_2.push(wp_4[10] * (wp_8[10][12] * wp_4[12] + wp_8[10][13] * wp_4[13] + wp_8[10][14] * wp_4[14] + wp_8[10][15] * wp_4[15]));
		wp_2.push(wp_4[11] * (wp_8[11][12] * wp_4[12] + wp_8[11][13] * wp_4[13] + wp_8[11][14] * wp_4[14] + wp_8[11][15] * wp_4[15]));

		wp_2.push(wp_4[12] * (wp_8[12][8] * wp_4[8] + wp_8[12][9] * wp_4[9] + wp_8[12][10] * wp_4[10] + wp_8[12][11] * wp_4[11]));
		wp_2.push(wp_4[13] * (wp_8[13][8] * wp_4[8] + wp_8[13][9] * wp_4[9] + wp_8[13][10] * wp_4[10] + wp_8[13][11] * wp_4[11]));
		wp_2.push(wp_4[14] * (wp_8[14][8] * wp_4[8] + wp_8[14][9] * wp_4[9] + wp_8[14][10] * wp_4[10] + wp_8[14][11] * wp_4[11]));
		wp_2.push(wp_4[15] * (wp_8[15][8] * wp_4[8] + wp_8[15][9] * wp_4[9] + wp_8[15][10] * wp_4[10] + wp_8[15][11] * wp_4[11]));

		console.log(wp_2);
		//算出冠军概率
		var champion = new Array();
		champion.push(wp_2[0] * (wp_8[0][8] * wp_2[8] + wp_8[0][9] * wp_2[9] + wp_8[0][10] * wp_2[10] +wp_8[0][11] * wp_2[11] +
			          wp_8[0][12] * wp_2[12] + wp_8[0][13] * wp_2[13] + wp_8[0][14] * wp_2[14] + wp_8[0][15] * wp_2[15]));

		champion.push(wp_2[1] * (wp_8[1][8] * wp_2[8] + wp_8[1][9] * wp_2[9] + wp_8[1][10] * wp_2[10] +wp_8[1][11] * wp_2[11] +
			          wp_8[1][12] * wp_2[12] + wp_8[1][13] * wp_2[13] + wp_8[1][14] * wp_2[14] + wp_8[1][15] * wp_2[15]));

		champion.push(wp_2[2] * (wp_8[2][8] * wp_2[8] + wp_8[2][9] * wp_2[9] + wp_8[2][10] * wp_2[10] +wp_8[2][11] * wp_2[11] +
			          wp_8[2][12] * wp_2[12] + wp_8[2][13] * wp_2[13] + wp_8[2][14] * wp_2[14] + wp_8[2][15] * wp_2[15]));

		champion.push(wp_2[3] * (wp_8[3][8] * wp_2[8] + wp_8[3][9] * wp_2[9] + wp_8[3][10] * wp_2[10] +wp_8[3][11] * wp_2[11] +
			          wp_8[3][12] * wp_2[12] + wp_8[3][13] * wp_2[13] + wp_8[3][14] * wp_2[14] + wp_8[3][15] * wp_2[15]));

		champion.push(wp_2[4] * (wp_8[4][8] * wp_2[8] + wp_8[4][9] * wp_2[9] + wp_8[4][10] * wp_2[10] +wp_8[4][11] * wp_2[11] +
			          wp_8[4][12] * wp_2[12] + wp_8[4][13] * wp_2[13] + wp_8[4][14] * wp_2[14] + wp_8[4][15] * wp_2[15]));

		champion.push(wp_2[5] * (wp_8[5][8] * wp_2[8] + wp_8[5][9] * wp_2[9] + wp_8[5][10] * wp_2[10] +wp_8[5][11] * wp_2[11] +
			          wp_8[5][12] * wp_2[12] + wp_8[5][13] * wp_2[13] + wp_8[5][14] * wp_2[14] + wp_8[5][15] * wp_2[15]));

		champion.push(wp_2[6] * (wp_8[6][8] * wp_2[8] + wp_8[6][9] * wp_2[9] + wp_8[6][10] * wp_2[10] +wp_8[6][11] * wp_2[11] +
			          wp_8[6][12] * wp_2[12] + wp_8[6][13] * wp_2[13] + wp_8[6][14] * wp_2[14] + wp_8[6][15] * wp_2[15]));

		champion.push(wp_2[7] * (wp_8[7][8] * wp_2[8] + wp_8[7][9] * wp_2[9] + wp_8[7][10] * wp_2[10] +wp_8[7][11] * wp_2[11] +
			          wp_8[7][12] * wp_2[12] + wp_8[7][13] * wp_2[13] + wp_8[7][14] * wp_2[14] + wp_8[7][15] * wp_2[15]));

		champion.push(wp_2[8] * (wp_8[8][0] * wp_2[0] + wp_8[8][1] * wp_2[1] + wp_8[8][2] * wp_2[2] +wp_8[8][3] * wp_2[3] +
			          wp_8[8][4] * wp_2[4] + wp_8[8][5] * wp_2[5] + wp_8[8][6] * wp_2[6] + wp_8[8][7] * wp_2[7]));

		champion.push(wp_2[9] * (wp_8[9][0] * wp_2[0] + wp_8[9][1] * wp_2[1] + wp_8[9][2] * wp_2[2] +wp_8[9][3] * wp_2[3] +
			          wp_8[9][4] * wp_2[4] + wp_8[9][5] * wp_2[5] + wp_8[9][6] * wp_2[6] + wp_8[9][7] * wp_2[7]));

		champion.push(wp_2[10] * (wp_8[10][0] * wp_2[0] + wp_8[10][1] * wp_2[1] + wp_8[10][2] * wp_2[2] +wp_8[10][3] * wp_2[3] +
			          wp_8[10][4] * wp_2[4] + wp_8[10][5] * wp_2[5] + wp_8[10][6] * wp_2[6] + wp_8[10][7] * wp_2[7]));

		champion.push(wp_2[11] * (wp_8[11][0] * wp_2[0] + wp_8[11][1] * wp_2[1] + wp_8[11][2] * wp_2[2] +wp_8[11][3] * wp_2[3] +
			          wp_8[11][4] * wp_2[4] + wp_8[11][5] * wp_2[5] + wp_8[11][6] * wp_2[6] + wp_8[11][7] * wp_2[7]));

		champion.push(wp_2[12] * (wp_8[12][0] * wp_2[0] + wp_8[12][1] * wp_2[1] + wp_8[12][2] * wp_2[2] +wp_8[12][3] * wp_2[3] +
			          wp_8[12][4] * wp_2[4] + wp_8[12][5] * wp_2[5] + wp_8[12][6] * wp_2[6] + wp_8[12][7] * wp_2[7]));

		champion.push(wp_2[13] * (wp_8[13][0] * wp_2[0] + wp_8[13][1] * wp_2[1] + wp_8[13][2] * wp_2[2] +wp_8[13][3] * wp_2[3] +
			          wp_8[13][4] * wp_2[4] + wp_8[13][5] * wp_2[5] + wp_8[13][6] * wp_2[6] + wp_8[13][7] * wp_2[7]));

		champion.push(wp_2[14] * (wp_8[14][0] * wp_2[0] + wp_8[14][1] * wp_2[1] + wp_8[14][2] * wp_2[2] +wp_8[14][3] * wp_2[3] +
			          wp_8[14][4] * wp_2[4] + wp_8[14][5] * wp_2[5] + wp_8[14][6] * wp_2[6] + wp_8[14][7] * wp_2[7]));

		champion.push(wp_2[15] * (wp_8[15][0] * wp_2[0] + wp_8[15][1] * wp_2[1] + wp_8[15][2] * wp_2[2] +wp_8[15][3] * wp_2[3] +
			          wp_8[15][4] * wp_2[4] + wp_8[15][5] * wp_2[5] + wp_8[15][6] * wp_2[6] + wp_8[15][7] * wp_2[7]));

		console.log(champion[required_team]);
        return champion[required_team];
	}