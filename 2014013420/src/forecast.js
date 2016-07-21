
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

(function forecast(data, team){
	var result = 0;
	//find out the team's num
	for(var i = 0; i < 16; i++){
		if(teams[i] === team){
			break;
		}
	}
	var farray  = new Array();//all teams' posibility of winning the first game 
	//the first game
	for(var j = 0; j < 16; j++)
	{
		if(j % 2 == 0)
		{
			farray[j] = data[teams[j]]/(data[teams[j]] + data[teams[j+1]]);
		}
		else
		{
			farray[j] = data[teams[j]]/(data[teams[j]] + data[teams[j-1]]);
		}
	}
	var sarray = new Array();//all teams' posibility of winning the second game 
	//the second game
	for(j = 0; j < 16; j++){
		if(j % 4 == 0){
			sarray[j] = farray[j]*(farray[j+2]*(data[teams[j]]/(data[teams[j]]+data[teams[j+2]])) + farray[j+3]*(data[teams[j]]/(data[teams[j]]+data[teams[j+3]])));
		}
		if(j % 4 == 1){
			sarray[j] = farray[j]*(farray[j+1]*(data[teams[j]]/(data[teams[j]]+data[teams[j+1]])) + farray[j+2]*(data[teams[j]]/(data[teams[j]]+data[teams[j+2]])));
		}
		if(j % 4 == 2){
			sarray[j] = farray[j]*(farray[j-1]*(data[teams[j]]/(data[teams[j]]+data[teams[j-1]])) + farray[j-2]*(data[teams[j]]/(data[teams[j]]+data[teams[j-2]])));
		}
		if(j % 4 == 3){
			sarray[j] = farray[j]*(farray[j-3]*(data[teams[j]]/(data[teams[j]]+data[teams[j-3]])) + farray[j-2]*(data[teams[j]]/(data[teams[j]]+data[teams[j-2]])));
		}
	}
	var tarray = new Array();//all teams' posibility of winning the third game 
	//the third game
	for(j = 0; j < 16; j++)
	{
		if(j % 8 = 0){
			tarray[j] = sarray[j]*(sarray[j+4]*(data[teams[j]]/(data[teams[j+4)) + sarray[j+5]*(data[teams[j]]/(data[teams[j+5)) + sarray[j+6]*(data[teams[j]]/(data[teams[j+6)) + sarray[j+7]*(data[teams[j]]/(data[teams[j+7)));
		}
		if(j % 8 = 1){
			tarray[j] = sarray[j]*(sarray[j+4]*(data[teams[j]]/(data[teams[j+4)) + sarray[j+5]*(data[teams[j]]/(data[teams[j+5)) + sarray[j+6]*(data[teams[j]]/(data[teams[j+6)) + sarray[j+3]*(data[teams[j]]/(data[teams[j+3)));
		}
		if(j % 8 = 2){
			tarray[j] = sarray[j]*(sarray[j+4]*(data[teams[j]]/(data[teams[j+4)) + sarray[j+5]*(data[teams[j]]/(data[teams[j+5)) + sarray[j+2]*(data[teams[j]]/(data[teams[j+2)) + sarray[j+3]*(data[teams[j]]/(data[teams[j+3)));
		}
		if(j % 8 = 3){
			tarray[j] = sarray[j]*(sarray[j+4]*(data[teams[j]]/(data[teams[j+4)) + sarray[j+1]*(data[teams[j]]/(data[teams[j+1)) + sarray[j+2]*(data[teams[j]]/(data[teams[j+2)) + sarray[j+3]*(data[teams[j]]/(data[teams[j+3)));
		}
		if(j % 8 = 4){
			tarray[j] = sarray[j]*(sarray[j-4]*(data[teams[j]]/(data[teams[j-4)) + sarray[j-1]*(data[teams[j]]/(data[teams[j-1)) + sarray[j-2]*(data[teams[j]]/(data[teams[j-2)) + sarray[j-3]*(data[teams[j]]/(data[teams[j-3)));
		}
		if(j % 8 = 5){
			tarray[j] = sarray[j]*(sarray[j-4]*(data[teams[j]]/(data[teams[j-4)) + sarray[j-5]*(data[teams[j]]/(data[teams[j-5)) + sarray[j-2]*(data[teams[j]]/(data[teams[j-2)) + sarray[j-3]*(data[teams[j]]/(data[teams[j-3)));
		}
		if(j % 8 = 6){
			tarray[j] = sarray[j]*(sarray[j-4]*(data[teams[j]]/(data[teams[j-4)) + sarray[j-5]*(data[teams[j]]/(data[teams[j-5)) + sarray[j-6]*(data[teams[j]]/(data[teams[j-6)) + sarray[j-3]*(data[teams[j]]/(data[teams[j-3)));
		}
		if(j % 8 = 7){
			tarray[j] = sarray[j]*(sarray[j-4]*(data[teams[j]]/(data[teams[j-4)) + sarray[j-5]*(data[teams[j]]/(data[teams[j-5)) + sarray[j-6]*(data[teams[j]]/(data[teams[j-6)) + sarray[j-7]*(data[teams[j]]/(data[teams[j-7)));
		}
	}
	//the final
	var temp = 0;
	if(i < 8){
		for(j = 8; j < 16; j++){
			temp += tarray[j]*(data[teams[i]]/(data[teams[i]]+data[teams[j]]));
		}
		result = tarray[i] * temp;
	}
	else{
		for(j = 0; j < 8; j++){
			temp += tarray[j]*(data[teams[i]]/(data[teams[i]]+data[teams[j]]));
		}
		result = tarray[i] * temp;
	}
	return result;
})



