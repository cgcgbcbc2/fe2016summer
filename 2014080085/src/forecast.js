"use strict";

var countries = [
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

var indexes = {
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

var winningRates = new Array;
var occurenceRates = new Array;

for(var i = 0; i < 16; i++){
	winningRates[i] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
}
for(var i = 1; i <= 31; i++){
	occurenceRates[i] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
}

function getWinningRate(strength1, strength2){
	var winningRate;

	if(strength1 == 0 && strength2 == 0){
		return 0.5;
	}
	else if(strength2 == 0){
		return 1;
	}
	winningRate = strength1 / (strength1 + strength2);

	return winningRate;
}//get the winning rate of the team with strength1

function getParent(child1, child2, parent){
	var status = 0;

	for(var i = 0; i < 16; i++){
		if(occurenceRates[child1][i] == 0 && occurenceRates[child2][i] == 0){
			continue;
		}
		else if(occurenceRates[child1][i] == 0){
			status = 2;
		}
		else{
			status = 1;
		}
		for(var j = 0; j < 16; j++){
			if(i == j)
				continue;
			if(status == 1){
				occurenceRates[parent][i] += occurenceRates[child1][i] * occurenceRates[child2][j] * winningRates[i][j];
			}
			if(status == 2){
				occurenceRates[parent][i] += occurenceRates[child2][i] * occurenceRates[child1][j] * winningRates[i][j];
			}
		}
		status = 0;
	}

	return 1;
}//get the occurence winningRates in parent node from the occurence winningRates in two child nodes

function forecast(strengths, country){	
	for(var i = 16; i <= 31; i++){
		occurenceRates[i][i - 16] = 1;
	}
	
	for(var i = 0; i < 16; i++){
		for(var j = 0; j < 16; j++){
			if(j == i){
				continue;
			}
			winningRates[i][j] = getWinningRate(strengths[countries[i]], strengths[countries[j]]);
			winningRates[j][i] = 1 - winningRates[i][j];
		}
	}

	for(var j = 16; j > 1;){
		for(var i = j / 2; i < j; i++){
			getParent(i * 2, i * 2 + 1, i);
		}
		j = j / 2;
	}

	return occurenceRates[1][indexes[country]];
}