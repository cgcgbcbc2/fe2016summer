function forecast(powerty,team){
	var power = {
	0 : "Switzerland" ,
	1 : "Poland" ,
	2 : "Croatia" ,
	3 : "Portugal" ,
	4 : "Wales" ,
	5 : "Northern Ireland" ,
	6 : "Hungary" ,
	7 : "Belgium" ,
	8 : "Germany" ,
	9 : "Slovakia" ,
	10 : "Italy" ,
	11 : "Spain" ,
	12 : "France" ,
	13 : "Republic of Ireland" ,
	14 : "England" ,
	15 : "Iceland" ,
	Switzerland : 0,
	Poland : 0,
	Croatia : 0,
	Portugal : 0,
	Wales : 0,
	"Northern Ireland" : 0,
	Hungary : 0,
	Belgium : 0,
	Germany : 0,
	Slovakia : 0,
	Italy : 0,
	Spain : 0,
	France : 0,
	"Republic of Ireland" : 0,
	England : 0,
	Iceland : 0,
	eighth : [],
	fourth : [],
	almostWinner : []
};
	function calcPower(team1,team2){
	if((typeof(team1)=="string")){
		x = power[team1][0];
		y = power[team2][0];
	}
	else{
		x = team1;
		y = team2;
	}
	if(x<=0&&y>0)
		return y;
	if(x>0&&y<=0)
		return x;
	if(x<=0&&y<=0)
		return 0
	return (x*x+y*y)/(x+y);
}
	var count = 0;
	for (x in powerty){
		power[x] = [powerty[x],count];
		count ++;
		}
	power.eighth[0] = calcPower("Switzerland","Poland");	
	power.eighth[1] = calcPower("Croatia","Portugal");
	power.eighth[2] = calcPower("Wales","Northern Ireland");
	power.eighth[3] = calcPower("Hungary","Belgium");
	power.eighth[4] = calcPower("Germany","Slovakia");
	power.eighth[5] = calcPower("Italy","Spain");
	power.eighth[6] = calcPower("France","Republic of Ireland");
	power.eighth[7] = calcPower("England","Iceland");
	
	
	var pos = power[team][1];
	var nextPos = Math.floor(pos/2);
	if(pos == nextPos*2){
		var opp = pos + 1;
	}
	else{
		var opp = pos - 1;
	}
	var x = power[team][0],y = power[power[opp]][0],z = power.eighth[nextPos];
	var win1 = (z-y)/(x-y);
	power.eighth[nextPos] = power[team][0];
	
	for(var i = 0; i < 4; i ++){
		power.fourth[i]=calcPower(power.eighth[2*i],power.eighth[2*i + 1]);
	}
	if(win1==0)
		return 0;
	
	pos = nextPos ;
	nextPos = Math.floor(pos/2);
	if(pos == nextPos*2){
		var opp = pos + 1;
	}
	else{
		var opp = pos - 1;
	}
	x = power.eighth[pos], y = power.eighth[opp],z = power.fourth[nextPos];
	var win2 = (z-y)/(x-y);
	power.fourth[nextPos] = x;
	for(var i = 0; i < 2; i ++){
		power.almostWinner[i]=calcPower(power.fourth[2*i],power.fourth[2*i + 1]);
	}
	if(win2==0)
		return 0;
	
	pos = nextPos ;
	nextPos = Math.floor(pos/2);
	if(pos == nextPos*2){
		var opp = pos + 1;
	}
	else{
		var opp = pos - 1;
	}
	x = power.fourth[pos], y = power.fourth[opp],z = power.almostWinner[nextPos];
	var win3 = (z-y)/(x-y);
	power.almostWinner[nextPos] = x;
	if(win3==0)
		return 0;
	
	

	var win4 = power.almostWinner[0]/(power.almostWinner[0] +  power.almostWinner[1]);
	if(nextPos == 1)
		win4 = 1 - win4;
	
	return win1*win2*win3*win4;
}



