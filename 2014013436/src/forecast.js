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
];

var index = {
	"Switzerland": 0,
	"Poland": 1,
	"Croatia": 2,
	"Portugal": 3,
	"Wales": 4,
	"Northern Ireland": 5,
	"Hungary": 6,
	"Belgium": 7,
	"Germany": 8,
	"Slovakia": 9,
	"Italy": 10,
	"Spain": 11,
	"France": 12,
	"Republic of Ireland": 13,
	"England": 14,
	"Iceland": 15
};

var final = new Array;
for(var i = 1; i <= 31; i ++) {
	final[i] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
}

var value = new Array;
for(var i = 0; i < 16; i ++) {
	value[i] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
}

//calcute win rate between 2 teams

function calculate(power1, power2) {
	var result;
	if(power1 == 0 && power2 == 0){
		return 0.5;
	}
	if(power1 == 0) {
		return 0;
	}
	if(power2 == 0) {
		return 1;
	}
	result = power1 / (power1 + power2);
	return result;
}

//merge 2 appear rate array

function merge(set1, set2, result) {
	var flag = -1;
	for(var i = 0; i < 16; i ++) {
		if (final[set1][i] == 0) {
			if (final[set2][i] == 0) {
				continue;
			}
			else {
				flag = 1;
			}
		}
		else {
			flag = 0;
		}
		for(var j = 0; j < 16; j ++) {
			if(i == j)
				continue;
			if (flag == 0) {
				final[result][i] += final[set1][i] * final[set2][j] * value[i][j];
			}
			if (flag == 1) {
				final[result][i] += final[set2][i] * final[set1][j] * value[i][j];
			}
		}
		flag = -1;
	}
	return result;
}

function forecast(data, country) {
	//init
	
	for(var i = 16; i <= 31; i ++) {
		final[i][i-16] = 1;
	}

	//calculate win rate between every 2 teams
	var powers = new Array;
	for(var i = 0; i < 16; i ++) {
		powers[i] = data[teams[i]];
	}
	
	for(var i = 0; i < 16; i ++) {
		for(var j = 0; j < 16; j ++) {
			if (j == i) {
				continue;
			}
			value[i][j] = calculate(powers[i], powers[j]);
			value[j][i] = 1 - value[i][j];
		}
	}
	//console.log(value);

	//merge rate set
	for (var j = 16; j > 1;) {
		for(var i = j/2; i < j; i ++) {
			merge(i*2,i*2+1, i);
		}
		j = j/2;
	}
	//get result
	var ind = index[country]; 
	return final[1][ind];
}