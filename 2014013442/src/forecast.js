function forecast(teamWithPower, team){
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
	//match team with its power
	var power = [];
	for(var i = 0; i < 16; i++){
		power.push(teamWithPower[teams[i]]);
	}

	//get forecast team index
	var teamIndex;
	for(var i = 0; i < 16; i++){
		if(teams[i] == team){
			teamIndex = i;
			break;
		}
	}

	return winChampion(power, teamIndex);
}

function winInto8(power, winteam){
	var other;
	if(winteam % 2 == 0){
		other = winteam + 1;
	}
	else{
		other = winteam - 1;
	}
	return power[winteam] / (power[winteam] + power[other]);
}

function winInto4(power, winteam){
	var thisTeamWinInto8 = winInto8(power, winteam);

	var groupStart;

	if(winteam < 2){
		groupStart = 2;
	}
	else if(winteam >= 2 && winteam < 4){
		groupStart = 0;
	}
	else if(winteam >= 4 && winteam < 6){
		groupStart = 6;
	}
	else if(winteam >= 6 && winteam < 8){
		groupStart = 4;
	}
	else if(winteam >= 8 && winteam < 10){
		groupStart = 10;
	}
	else if(winteam >= 10 && winteam < 12){
		groupStart = 8;
	}
	else if(winteam >= 12 && winteam < 14){
		groupStart = 14;
	}
	else{
		groupStart = 12;
	}

	var winThisTurn = 0;

	for (var i = 0; i < 2; i++) {
		winThisTurn += thisTeamWinInto8 * winInto8(power, (groupStart + i)) * power[winteam] / (power[winteam] + power[i + groupStart]);	
	}

	return winThisTurn;
}

function winInto2(power, winteam){
	var thisTeamWinInto4 = winInto4(power, winteam);
	var groupStart;
	if(winteam < 4){
		groupStart = 4;
	}
	else if(winteam >= 4 && winteam < 8){
		groupStart = 0;
	}
	else if(winteam >= 8 && winteam < 12){
		groupStart = 12;
	}
	else{
		groupStart = 8;
	}

	var winThisTurn = 0;
	for(var i = 0; i < 4; i++){
		winThisTurn += thisTeamWinInto4 * winInto4(power, (groupStart + i)) * power[winteam] / (power[winteam] + power[groupStart + i]);
	}

	return winThisTurn;
}

function winChampion(power, winteam){
	var thisTeamWinInto2 = winInto2(power, winteam);
	var champion = 0;
	var groupStart = winteam < 8 ? 8 : 0;

	for(var i = 0; i < 8; i++){
		champion += winInto2(power,(i + groupStart)) * thisTeamWinInto2  * power[winteam] / (power[winteam] + power[i + groupStart]);
	}

	return champion;
}

// var teamInfo =
// 	{
// 		"Switzerland": 50,
// 		"Poland": 60,
// 		"Croatia": 70,
// 		"Portugal": 80,
// 		"Wales": 10,
// 		"Northern Ireland": 20,
// 		"Hungary": 10,
// 		"Belgium": 50,
// 		"Germany": 90,
// 		"Slovakia": 20,
// 		"Italy": 100,
// 		"Spain": 100,
// 		"France": 100,
// 		"Republic of Ireland": 100,
// 		"England": 100,
// 		"Iceland" : 100
// 	};

// var teamsName = [
// 	"Switzerland",
// 	"Poland",
// 	"Croatia",
// 	"Portugal",
// 	"Wales",
// 	"Northern Ireland",
// 	"Hungary",
// 	"Belgium",
// 	"Germany",
// 	"Slovakia",
// 	"Italy",
// 	"Spain",
// 	"France",
// 	"Republic of Ireland",
// 	"England",
// 	"Iceland"
// 	];

// var total = 0;
// var winTable = [];


// for(var i = 0; i < 16; i++){
// 	winTable.push(forecast(teamInfo, teamsName[i]));
// }
// console.log(total);
// console.log(winTable);
