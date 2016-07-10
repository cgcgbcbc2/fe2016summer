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

function forecast(ability, teamName){
	var firstWiner = {};
	var secondwiner = {};
	var thirdwiner = {};
	var i = 0, j = 0;
	//first winner probability
	for(i = 0; i < 16; i++)
	{
		if(i % 2 === 0){
			if(ability[teams[i + 1]] + ability[teams[i]] === 0){
				firstWiner[teams[i]] = 0.5;
			}
			else{
				firstWiner[teams[i]] = ability[teams[i]] / (ability[teams[i + 1]] + ability[teams[i]]);
			}
		}
		else{
			if(ability[teams[i - 1]] + ability[teams[i]] === 0){
				firstWiner[teams[i]] = 0.5;
			}
			else{
				firstWiner[teams[i]] = ability[teams[i]] / (ability[teams[i - 1]] + ability[teams[i]]);
			}
		}
	}

	//second winner probability
	for(i = 0; i < 16; i++)
	{
		var sec_num = i % 4;
		var sec_oca = (i - sec_num) / 4;
		if(sec_num < 2){
			if(ability[teams[sec_oca * 4 + 2]] + ability[teams[i]] === 0){
				if(ability[teams[sec_oca * 4 + 3]] + ability[teams[i]] === 0){
					secondwiner[teams[i]] = firstWiner[teams[i]] * (firstWiner[teams[sec_oca * 4 + 2]] * 0.5 + firstWiner[teams[sec_oca * 4 + 3]] * 0.5);
				}
				else{
					secondwiner[teams[i]] = firstWiner[teams[i]] * (firstWiner[teams[sec_oca * 4 + 2]] * 0.5 + firstWiner[teams[sec_oca * 4 + 3]] * (ability[teams[i]] / (ability[teams[sec_oca * 4 + 3]] + ability[teams[i]])));
				}
			}

			else{
				if(ability[teams[sec_oca * 4 + 3]] + ability[teams[i]] === 0){
					secondwiner[teams[i]] = firstWiner[teams[i]] * (firstWiner[teams[sec_oca * 4 + 2]] * (ability[teams[i]] / (ability[teams[sec_oca * 4 + 2]] + ability[teams[i]])) + firstWiner[teams[sec_oca * 4 + 3]] * 0.5);
				}
				else{
					secondwiner[teams[i]] = firstWiner[teams[i]] * (firstWiner[teams[sec_oca * 4 + 2]] * (ability[teams[i]] / (ability[teams[sec_oca * 4 + 2]] + ability[teams[i]])) + firstWiner[teams[sec_oca * 4 + 3]] * (ability[teams[i]] / (ability[teams[sec_oca * 4 + 3]] + ability[teams[i]])));
				}
			}
		}
		else{
			if(ability[teams[sec_oca * 4]] + ability[teams[i]] === 0){
				if(ability[teams[sec_oca * 4 + 1]] + ability[teams[i]] === 0){
					secondwiner[teams[i]] = firstWiner[teams[i]] * (firstWiner[teams[sec_oca * 4]] * 0.5 + firstWiner[teams[sec_oca * 4 + 1]] * 0.5);
				}
				else{
					secondwiner[teams[i]] = firstWiner[teams[i]] * (firstWiner[teams[sec_oca * 4]] * 0.5 + firstWiner[teams[sec_oca * 4 + 1]] * (ability[teams[i]] / (ability[teams[sec_oca * 4 + 1]] + ability[teams[i]])));
				}
			}

			else{
				if(ability[teams[sec_oca * 4 + 1]] + ability[teams[i]] === 0){
					secondwiner[teams[i]] = firstWiner[teams[i]] * (firstWiner[teams[sec_oca * 4]] * (ability[teams[i]] / (ability[teams[sec_oca * 4]] + ability[teams[i]])) + firstWiner[teams[sec_oca * 4 + 1]] * 0.5);
				}
				else{
					secondwiner[teams[i]] = firstWiner[teams[i]] * (firstWiner[teams[sec_oca * 4]] * (ability[teams[i]] / (ability[teams[sec_oca * 4]] + ability[teams[i]])) + firstWiner[teams[sec_oca * 4 + 1]] * (ability[teams[i]] / (ability[teams[sec_oca * 4 + 1]] + ability[teams[i]])));
				}
			}
		}
	}

	//third winner probability
	for(i = 0; i < 16; i++)
	{
		var thd_oca = (i - i % 4) / 4;
		if(thd_oca === 0){
			thirdwiner[teams[i]] = 0;
			for(j = 4; j < 8; j++){
				if(ability[teams[j]] + ability[teams[i]] === 0){
					thirdwiner[teams[i]] += secondwiner[teams[j]] * 0.5;
				}
				else{
					thirdwiner[teams[i]] += secondwiner[teams[j]] * (ability[teams[i]] / (ability[teams[j]] + ability[teams[i]]));
				}
			}
			thirdwiner[teams[i]] *= secondwiner[teams[i]];
		}
		else if(thd_oca === 1){
			thirdwiner[teams[i]] = 0;
			for(j = 0; j < 4; j++){
				if(ability[teams[j]] + ability[teams[i]] === 0){
					thirdwiner[teams[i]] += secondwiner[teams[j]] * 0.5;
				}
				else{
					thirdwiner[teams[i]] += secondwiner[teams[j]] * (ability[teams[i]] / (ability[teams[j]] + ability[teams[i]]));
				}
			}
			thirdwiner[teams[i]] *= secondwiner[teams[i]];
		}
		else if(thd_oca === 2){
			thirdwiner[teams[i]] = 0;
			for(j = 12; j < 16; j++){
				if(ability[teams[j]] + ability[teams[i]] === 0){
					thirdwiner[teams[i]] += secondwiner[teams[j]] * 0.5;
				}
				else{
					thirdwiner[teams[i]] += secondwiner[teams[j]] * (ability[teams[i]] / (ability[teams[j]] + ability[teams[i]]));
				}
			}
			thirdwiner[teams[i]] *= secondwiner[teams[i]];
		}
		else{
			thirdwiner[teams[i]] = 0;
			for(j = 8; j < 12; j++){
				if(ability[teams[j]] + ability[teams[i]] === 0){
					thirdwiner[teams[i]] += secondwiner[teams[j]] * 0.5;
				}
				else{
					thirdwiner[teams[i]] += secondwiner[teams[j]] * (ability[teams[i]] / (ability[teams[j]] + ability[teams[i]]));
				}
			}
			thirdwiner[teams[i]] *= secondwiner[teams[i]];
		}
	}

	var winPro = 0;
	var index = -1;
	for(i = 0; i < 16; i++){
		if(teams[i] === teamName){
			index = i;
			break;
		}
	}

	if(index === -1){
		return;
	}

	if(index < 8){
		winPro = 0;
		for(j = 8; j < 16; j++){
			if(ability[teams[j]] + ability[teams[index]] === 0){
				winPro += thirdwiner[teams[j]] * 0.5;
			}
			else{
				winPro += thirdwiner[teams[j]] * (ability[teams[index]] / (ability[teams[j]] + ability[teams[index]])); 
			}
		}
		winPro *= thirdwiner[teams[index]];
		return winPro;
	}
	else{
		winPro = 0;
		for(j = 0; j < 8; j++){
			if(ability[teams[j]] + ability[teams[index]] === 0){
				winPro += thirdwiner[teams[j]] * 0.5;
			}
			else{
				winPro += thirdwiner[teams[j]] * (ability[teams[index]] / (ability[teams[j]] + ability[teams[index]])); 
			}
		}
		winPro *= thirdwiner[teams[index]];
		return winPro;
	}
}