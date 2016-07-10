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

var attr = {
	"Switzerland" : 50,
	"Poland" : 50,
	"Croatia" : 50,
	"Portugal" : 50,
	"Wales" : 50,
	"Northern Ireland" : 50,
	"Hungary" : 50,
	"Belgium" : 50,
	"Germany" : 50,
	"Slovakia" : 50,
	"Italy" : 50,
	"Spain" : 50,
	"France" : 50,
	"Republic of Ireland" : 50,
	"England" : 50,
	"Iceland" : 50
};

//获取a对b的比赛中，a的胜率，a，b表示队伍所在的数组位置
function getWinPer2(a, b){
	if (attr[teams[a]] == 0 && attr[teams[b]] == 0) return 0.5;
	return attr[teams[a]] / (attr[teams[a]] + attr[teams[b]]);
}

//获取a在它所在的4人组中出线的概率
function getWinPer4(a){
	var number = a % 4;
	switch(number)
	{
		case 0:
		return getWinPer2(a, a + 1) * (getWinPer2(a + 2, a + 3) * getWinPer2(a, a + 2)
			+ getWinPer2(a + 3, a + 2) * getWinPer2(a, a + 3));
		case 1:
		return getWinPer2(a, a - 1) * (getWinPer2(a + 1, a + 2) * getWinPer2(a, a + 1)
			+ getWinPer2(a + 2, a + 1) * getWinPer2(a, a + 2));
		case 2:
		return getWinPer2(a, a + 1) * (getWinPer2(a - 2, a - 1) * getWinPer2(a, a - 2)
			+ getWinPer2(a - 1, a - 2) * getWinPer2(a, a - 1));
		case 3:
		return getWinPer2(a, a - 1) * (getWinPer2(a - 3, a - 2) * getWinPer2(a, a - 3)
			+ getWinPer2(a - 2, a - 3) * getWinPer2(a, a - 2));
	}
}

//获取a在它所在的8人组中出线的概率
function getWinPer8(a){
	var base1 = parseInt(a / 8) * 8, base2, winPer = 0;

	if (a % 8 < 4) base2 = 4;
	else base2 = 0;

	for (var i = base2; i < base2 + 4; i++)
	{
		winPer += getWinPer4(base1 + i) * getWinPer2(a, base1 + i);
	}
	winPer *= getWinPer4(a);
	return  winPer;
}

//获取a在16组中最终胜出的概率
function getWinPer16(a){
	var base, winPer = 0;
	if (parseInt(a / 8)) base = 0;
	else base = 1;
	for (var i = 0; i < 8; i++){
		winPer += getWinPer8(base + i) * getWinPer2(a, base + i);
	}
	winPer *= getWinPer8(a);
	return winPer;
}

function forecast(attr, name) {
	var number = teams.indexOf(name);
	if (number == -1){
		console.log('Wrong Name!');
		return;
	}
	return getWinPer16(number);
}