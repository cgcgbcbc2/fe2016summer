var array = new Array();
array[1] = "Switzerland";
array[2] = "Poland";
array[3] = "Croatia";
array[4] = "Portugal";
array[5] = "Wales";
array[6] = "Northern Ireland";
array[7] = "Hungary";
array[8] = "Belgium";
array[9] = "Germany";
array[10] = "Slovakia";
array[11] = "Italy";
array[12] = "Spain";
array[13] = "France";
array[14] = "Republic of Ireland";
array[15] = "England";
array[16] = "Iceland";

function win2 (ability, array, ofA, ofB) {
	if(ability[array[ofA]] == 0 && ability[array[ofB]]==0) return 0.5;
	return ability[array[ofA]]/(ability[array[ofA]]+ability[array[ofB]]);
}

function searchOf (array, coun) {
	var i = 1;
	for(i = 1; i <= 16;i++){
		if(array[i] == coun){
			return i;
		}
	}
	return -1;
}

function winP (ability,array,ofA, i) {
	if(ofA == -1) return -1;
	if(i == 1){
		if(ofA % 2 != 0){
			return win2(ability,array,ofA,ofA+1);
		}
		else if(ofA % 2 == 0){
			return win2(ability,array,ofA,ofA-1);
		}
	}
	else if(i == 4){
		var winPhalf = winP(ability,array,ofA, i - 1);
		var k = 0;
		var anotherSum = 0;
		if(ofA <= 8){
			for(k = 9; k <=16;k++){
				var anotherOneWinPhalf = winP(ability,array,k, i - 1);
				var winAnother = anotherOneWinPhalf*win2(ability, array, ofA, k);
				anotherSum += winAnother;
			}
		}
		else if(ofA > 8){
			for(k = 1; k <=8;k++){
				var anotherOneWinPhalf = winP(ability,array,k, i - 1);
				var winAnother = anotherOneWinPhalf*win2(ability, array, ofA, k);
				anotherSum += winAnother;
			}
		}
		return anotherSum*winPhalf;
	}

	else if(i == 3){
		var winPhalf = winP(ability,array,ofA, i - 1);
		var k = 0;
		var anotherSum = 0;
		if(ofA <= 4){
			for(k = 5; k <= 8;k++){
				var anotherOneWinPhalf = winP(ability,array,k, i - 1);
				var winAnother = anotherOneWinPhalf*win2(ability, array, ofA, k);
				anotherSum += winAnother;
			}
		}
		else if(ofA > 4 && ofA <=8){
			for(k = 1; k <=4;k++){
				var anotherOneWinPhalf = winP(ability,array,k, i - 1);
				var winAnother = anotherOneWinPhalf*win2(ability, array, ofA, k);
				anotherSum += winAnother;
			}
		}
		else if(ofA > 8 && ofA <=12){
			for(k = 13; k <= 16;k++){
				var anotherOneWinPhalf = winP(ability,array,k, i - 1);
				var winAnother = anotherOneWinPhalf*win2(ability, array, ofA, k);
				anotherSum += winAnother;
			}
		}
		else if(ofA > 12 && ofA <=16){
			for(k = 9; k <=12;k++){
				var anotherOneWinPhalf = winP(ability,array,k, i - 1);
				var winAnother = anotherOneWinPhalf*win2(ability, array, ofA, k);
				anotherSum += winAnother;
			}
		}
		return anotherSum*winPhalf;
	}

	else if(i == 2){
		var winPhalf = winP(ability,array,ofA, i - 1);
		var k = 0;
		var anotherSum = 0;
		if(ofA == 1 || ofA == 5 || ofA == 9 || ofA == 13){
			for(k = ofA+2; k <= ofA+3;k++){
				var anotherOneWinPhalf = winP(ability,array,k, i - 1);
				var winAnother = anotherOneWinPhalf*win2(ability, array, ofA, k);
				anotherSum += winAnother;
			}
		}
		else if(ofA == 2 || ofA == 6 || ofA == 10 || ofA == 14){
			for(k = ofA+1; k <= ofA+2;k++){
				var anotherOneWinPhalf = winP(ability,array,k, i - 1);
				var winAnother = anotherOneWinPhalf*win2(ability, array, ofA, k);
				anotherSum += winAnother;
			}
		}
		else if(ofA == 3 || ofA == 7 || ofA == 11 || ofA == 15){
			for(k = ofA-2; k <= ofA-1;k++){
				var anotherOneWinPhalf = winP(ability,array,k, i - 1);
				var winAnother = anotherOneWinPhalf*win2(ability, array, ofA, k);
				anotherSum += winAnother;
			}
		}
		else if(ofA == 4 || ofA == 8 || ofA == 12 || ofA == 16){
			for(k = ofA-3; k <= ofA-2;k++){
				var anotherOneWinPhalf = winP(ability,array,k, i - 1);
				var winAnother = anotherOneWinPhalf*win2(ability, array, ofA, k);
				anotherSum += winAnother;
			}
		}
		return anotherSum*winPhalf;
	}
}

function forecast (ability,country) {
	var ofA = searchOf(array,country);
	var P = winP(ability,array,ofA, 4);
	return P;
}