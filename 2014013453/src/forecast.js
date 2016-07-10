
var teams = new Array();
teams[1] = "Switzerland";
teams[2] = "Poland";
teams[3] = "Croatia";
teams[4] = "Portugal";
teams[5] = "Wales";
teams[6] = "Northern Ireland";
teams[7] = "Hungary";
teams[8] = "Belgium";
teams[9] = "Germany";
teams[10] = "Slovakia";
teams[11] = "Italy";
teams[12] = "Spain";
teams[13] = "France";
teams[14] = "Republic of Ireland";
teams[15] = "England";
teams[16] = "Iceland";
/*
var ability = {
	"Switzerland":0,
	"Poland":20,
	"Croatia":120,
	"Portugal":180,
	"Wales":140,
	"Northern Ireland":160,
	"Hungary":50,
	"Belgium":30,
	"Germany":130,
	"Slovakia":30,
	"Italy":140,
	"Spain":150,
	"France":100,
	"Republic of Ireland":50,
	"England":90,
	"Iceland":300
};
*/

function p1_win (ability, teams, p1, p2) {
	if(ability[teams[p1]] == 0 && ability[teams[p2]]==0) return 0.5;
	return ability[teams[p1]]/(ability[teams[p1]]+ability[teams[p2]]);
}

function getIndex (teams, obj) {
	for(var i = 1; i <= 16;i++){
		if(teams[i] == obj){
			return i;
		}
	}
	return -1;
}

function my_forecast (ability,teams,p1, i) {
	if(p1 <= 0) return -1;

	switch(i){
	case 1:
		if(p1 % 2 != 0){
			return p1_win(ability,teams,p1,p1+1);
		}
		else if(p1 % 2 == 0){
			return p1_win(ability,teams,p1,p1-1);
		}
	break;

	case 2:
		var my_forecasthalf = my_forecast(ability,teams,p1, i - 1);
		var k = 0;
		var anotherSum = 0;
		if(p1 == 1 || p1 == 5 || p1 == 9 || p1 == 13){
			for(k = p1+2; k <= p1+3;k++){
				var anotherOnemy_forecasthalf = my_forecast(ability,teams,k, i - 1);
				var winAnother = anotherOnemy_forecasthalf*p1_win(ability, teams, p1, k);
				anotherSum += winAnother;
			}
		}
		else if(p1 == 2 || p1 == 6 || p1 == 10 || p1 == 14){
			for(k = p1+1; k <= p1+2;k++){
				var anotherOnemy_forecasthalf = my_forecast(ability,teams,k, i - 1);
				var winAnother = anotherOnemy_forecasthalf*p1_win(ability, teams, p1, k);
				anotherSum += winAnother;
			}
		}
		else if(p1 == 3 || p1 == 7 || p1 == 11 || p1 == 15){
			for(k = p1-2; k <= p1-1;k++){
				var anotherOnemy_forecasthalf = my_forecast(ability,teams,k, i - 1);
				var winAnother = anotherOnemy_forecasthalf*p1_win(ability, teams, p1, k);
				anotherSum += winAnother;
			}
		}
		else if(p1 == 4 || p1 == 8 || p1 == 12 || p1 == 16){
			for(k = p1-3; k <= p1-2;k++){
				var anotherOnemy_forecasthalf = my_forecast(ability,teams,k, i - 1);
				var winAnother = anotherOnemy_forecasthalf*p1_win(ability, teams, p1, k);
				anotherSum += winAnother;
			}
		}
		return anotherSum*my_forecasthalf;
	break;


	case 3:
		var my_forecasthalf = my_forecast(ability,teams,p1, i - 1);
		var k = 0;
		var anotherSum = 0;
		if(p1 <= 4){
			for(k = 5; k <= 8;k++){
				var anotherOnemy_forecasthalf = my_forecast(ability,teams,k, i - 1);
				var winAnother = anotherOnemy_forecasthalf*p1_win(ability, teams, p1, k);
				anotherSum += winAnother;
			}
		}
		else if(p1 > 4 && p1 <=8){
			for(k = 1; k <=4;k++){
				var anotherOnemy_forecasthalf = my_forecast(ability,teams,k, i - 1);
				var winAnother = anotherOnemy_forecasthalf*p1_win(ability, teams, p1, k);
				anotherSum += winAnother;
			}
		}
		else if(p1 > 8 && p1 <=12){
			for(k = 13; k <= 16;k++){
				var anotherOnemy_forecasthalf = my_forecast(ability,teams,k, i - 1);
				var winAnother = anotherOnemy_forecasthalf*p1_win(ability, teams, p1, k);
				anotherSum += winAnother;
			}
		}
		else if(p1 > 12 && p1 <=16){
			for(k = 9; k <=12;k++){
				var anotherOnemy_forecasthalf = my_forecast(ability,teams,k, i - 1);
				var winAnother = anotherOnemy_forecasthalf*p1_win(ability, teams, p1, k);
				anotherSum += winAnother;
			}
		}
		return anotherSum*my_forecasthalf;
	break;


	case 4:
		var my_forecasthalf = my_forecast(ability,teams,p1, i - 1);
		var k = 0;
		var anotherSum = 0;
		if(p1 <= 8){
			for(k = 9; k <=16;k++){
				var anotherOnemy_forecasthalf = my_forecast(ability,teams,k, i - 1);
				var winAnother = anotherOnemy_forecasthalf*p1_win(ability, teams, p1, k);
				anotherSum += winAnother;
			}
		}
		else if(p1 > 8){
			for(k = 1; k <=8;k++){
				var anotherOnemy_forecasthalf = my_forecast(ability,teams,k, i - 1);
				var winAnother = anotherOnemy_forecasthalf*p1_win(ability, teams, p1, k);
				anotherSum += winAnother;
			}
		}
		return anotherSum*my_forecasthalf;
	break;

	
	}
}

function forecast (ability,country) {
	var turns = 4;
	var p1 = getIndex(teams,country);
	return my_forecast(ability,teams,p1,turns);
	
}

//alert(forecast(ability,"Italy"));