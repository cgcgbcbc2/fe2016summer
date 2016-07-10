function calc(a,b)
{
	return a==b?0.5:a/(a+b);
}
function forecast(team, country)
{
	var table=["Switzerland","Poland","Croatia","Portugal","Wales","Northern Ireland","Hungary","Belgium",
		"Germany","Slovakia","Italy","Spain","France","Republic of Ireland","England","Iceland"];
	var firstTurn=new Array(16);
	for (var i = 0; i < firstTurn.length; i++) {
		firstTurn[i]= calc(team[table[i]],team[table[2*parseInt(i/2)+(i+1)%2]]);
	};
	var secondTurn =new Array(16);
	for (var i = 0; i < secondTurn.length; i++) {
		secondTurn[i]=firstTurn[i]*(
			(firstTurn[4*parseInt(i/4)+(i+2-i%2)%4]*calc(team[table[i]],team[table[4*parseInt(i/4)+(i+2-i%2)%4]]))
			+(firstTurn[4*parseInt(i/4)+(i+3-i%2)%4]*calc(team[table[i]],team[table[4*parseInt(i/4)+(i+3-i%2)%4]]))
			);
	};
	var thirdTurn = new Array(16);
	for (var i = 0; i < thirdTurn.length; i++) {
		thirdTurn[i]=secondTurn[i]*(
			(secondTurn[8*parseInt(i/8)+(i+4-i%4)%8]*calc(team[table[i]],team[table[8*parseInt(i/8)+(i+4-i%4)%8]]))
			+(secondTurn[8*parseInt(i/8)+(i+5-i%4)%8]*calc(team[table[i]],team[table[8*parseInt(i/8)+(i+5-i%4)%8]]))
			+(secondTurn[8*parseInt(i/8)+(i+6-i%4)%8]*calc(team[table[i]],team[table[8*parseInt(i/8)+(i+6-i%4)%8]]))
			+(secondTurn[8*parseInt(i/8)+(i+7-i%4)%8]*calc(team[table[i]],team[table[8*parseInt(i/8)+(i+7-i%4)%8]]))
			);
	};
	var i = table.indexOf(country);
	return thirdTurn[i]*(
		(thirdTurn[(i+8-i%8)%16]*calc(team[table[i]],team[table[(i+8-i%8)%16]]))
		+(thirdTurn[(i+9-i%8)%16]*calc(team[table[i]],team[table[(i+9-i%8)%16]]))
		+(thirdTurn[(i+10-i%8)%16]*calc(team[table[i]],team[table[(i+10-i%8)%16]]))
		+(thirdTurn[(i+11-i%8)%16]*calc(team[table[i]],team[table[(i+11-i%8)%16]]))
		+(thirdTurn[(i+12-i%8)%16]*calc(team[table[i]],team[table[(i+12-i%8)%16]]))
		+(thirdTurn[(i+13-i%8)%16]*calc(team[table[i]],team[table[(i+13-i%8)%16]]))
		+(thirdTurn[(i+14-i%8)%16]*calc(team[table[i]],team[table[(i+14-i%8)%16]]))
		+(thirdTurn[(i+15-i%8)%16]*calc(team[table[i]],team[table[(i+15-i%8)%16]]))
		);
}