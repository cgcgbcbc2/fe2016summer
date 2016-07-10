	//存储队名的数组
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

	function forecast() {
		//队总数
		var teamSize = 16;
		//轮次
		var roundSize = 1;
		//存储概率
		var probability = new Array(teamSize);
		for(var i = 0; i < teamSize; ++i){
			probability[i] = 1;
		}

		//轮次循环
		for(var round = 1; round <= 4; ++round){
			var newProbability = new Array(teamSize);
			roundSize *= 2;
			//赛区循环
			for(var i = 0; i < teamSize/roundSize; ++i){
				//前半赛区队伍求获胜概率
				for(var j = i*roundSize; j < (i+0.5)*roundSize; ++j){
					newProbability[j] = 0;
					//与后半赛区按照概率求值累加
					for(var k = (i+0.5)*roundSize; k < (i+1)*roundSize; ++k){
						newProbability[j] += probability[j] * probability[k] 
						* arguments[0][teams[j]] / (arguments[0][teams[j]] + arguments[0][teams[k]]);
					}
				}
				//前半赛区队伍求获胜概率
				for(var j = (i+0.5)*roundSize; j < (i+1)*roundSize; ++j){
					newProbability[j] = 0;
					//与后半赛区按照概率求值累加
					for(var k = i*roundSize; k < (i+0.5)*roundSize; ++k){
						newProbability[j] += probability[j] * probability[k] 
						* arguments[0][teams[j]] / (arguments[0][teams[j]] + arguments[0][teams[k]]);
					}
				}
			}
			//队伍获胜概率更新
			for(var i = 0; i < teamSize; ++i){
				probability[i] = newProbability[i];
			}
		}
		return probability[teams.indexOf(arguments[1])];
	}