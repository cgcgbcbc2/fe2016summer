var Result = {
	"Switzerland": 1,
	"Poland": 1,
	"Croatia": 1,
	"Portugal": 1,
	"Wales": 1,
	"Northern Ireland": 1,
	"Hungary": 1,
	"Belgium": 1,
	"Germany": 1,
	"Slovakia": 1,
	"Italy": 1,
	"Spain": 1,
	"France": 1,
	"Republic of Ireland": 1,
	"England": 1,
	"Iceland": 1
};

var ResultTmp = {
	"Switzerland": 1,
	"Poland": 1,
	"Croatia": 1,
	"Portugal": 1,
	"Wales": 1,
	"Northern Ireland": 1,
	"Hungary": 1,
	"Belgium": 1,
	"Germany": 1,
	"Slovakia": 1,
	"Italy": 1,
	"Spain": 1,
	"France": 1,
	"Republic of Ireland": 1,
	"England": 1,
	"Iceland": 1
};

var place = {
	"Switzerland": 1,
	"Poland": 1,
	"Croatia": 1,
	"Portugal": 1,
	"Wales": 1,
	"Northern Ireland": 1,
	"Hungary": 1,
	"Belgium": 1,
	"Germany": 2,
	"Slovakia": 2,
	"Italy": 2,
	"Spain": 2,
	"France": 2,
	"Republic of Ireland": 2,
	"England": 2,
	"Iceland": 2
}

function getWinRate (teams, team1, team2) {
	return teams[team1] / (teams[team1] + teams[team2]);
}

function getPartRate (teams, team1, team2) {
	return Result[team1] * getWinRate(teams, team1, team2) * Result[team2];
}

function refresh () {
	Result["Switzerland"] = ResultTmp["Switzerland"];
	Result["Poland"] = ResultTmp["Poland"];
	Result["Croatia"] = ResultTmp["Croatia"];
	Result["Portugal"] = ResultTmp["Portugal"];
	Result["Wales"] = ResultTmp["Wales"];
	Result["Northern Ireland"] = ResultTmp["Northern Ireland"];
	Result["Hungary"] = ResultTmp["Hungary"];
	Result["Belgium"] = ResultTmp["Belgium"];
	Result["Germany"] = ResultTmp["Germany"];
	Result["Slovakia"] = ResultTmp["Slovakia"];
	Result["Italy"] = ResultTmp["Italy"];
	Result["Spain"] = ResultTmp["Spain"];
	Result["France"] = ResultTmp["France"];
	Result["Republic of Ireland"] = ResultTmp["Republic of Ireland"];
	Result["England"] = ResultTmp["England"];
	Result["Iceland"] = ResultTmp["Iceland"];
}

function clear () {
	Result["Switzerland"] = 1;
	Result["Poland"] = 1;
	Result["Croatia"] = 1;
	Result["Portugal"] = 1;
	Result["Wales"] = 1;
	Result["Northern Ireland"] = 1;
	Result["Hungary"] = 1;
	Result["Belgium"] = 1;
	Result["Germany"] = 1;
	Result["Slovakia"] = 1;
	Result["Italy"] = 1;
	Result["Spain"] = 1;
	Result["France"] = 1;
	Result["Republic of Ireland"] = 1;
	Result["England"] = 1;
	Result["Iceland"] = 1;
}

function forecast8 (teams) {
	ResultTmp["Switzerland"] = getPartRate(teams, "Switzerland", "Poland");
	ResultTmp["Poland"] = getPartRate(teams, "Poland", "Switzerland");
	ResultTmp["Croatia"] = getPartRate(teams, "Croatia", "Portugal");
	ResultTmp["Portugal"] = getPartRate(teams, "Portugal", "Croatia");
	ResultTmp["Wales"] = getPartRate(teams, "Wales", "Northern Ireland");
	ResultTmp["Northern Ireland"] = getPartRate(teams, "Northern Ireland", "Wales");
	ResultTmp["Hungary"] = getPartRate(teams, "Hungary", "Belgium");
	ResultTmp["Belgium"] = getPartRate(teams, "Belgium", "Hungary");
	ResultTmp["Germany"] = getPartRate(teams, "Germany", "Slovakia");
	ResultTmp["Slovakia"] = getPartRate(teams, "Slovakia", "Germany");
	ResultTmp["Italy"] = getPartRate(teams, "Italy", "Spain");
	ResultTmp["Spain"] = getPartRate(teams, "Spain", "Italy");
	ResultTmp["France"] = getPartRate(teams, "France", "Republic of Ireland");
	ResultTmp["Republic of Ireland"] = getPartRate(teams, "Republic of Ireland", "France");
	ResultTmp["England"] = getPartRate(teams, "England", "Iceland");
	ResultTmp["Iceland"] = getPartRate(teams, "Iceland", "England");
	refresh();
}

function forecast4 (teams) {
	ResultTmp["Switzerland"] = getPartRate(teams, "Switzerland", "Croatia") + getPartRate(teams, "Switzerland", "Portugal");
	ResultTmp["Poland"] = getPartRate(teams, "Poland", "Croatia") + getPartRate(teams, "Poland", "Portugal");
	ResultTmp["Croatia"] = getPartRate(teams, "Croatia", "Switzerland") + getPartRate(teams, "Croatia", "Poland");
	ResultTmp["Portugal"] = getPartRate(teams, "Portugal", "Switzerland") + getPartRate(teams, "Portugal", "Poland");
	ResultTmp["Wales"] = getPartRate(teams, "Wales", "Hungary") + getPartRate(teams, "Wales", "Belgium");
	ResultTmp["Northern Ireland"] = getPartRate(teams, "Northern Ireland", "Hungary") + getPartRate(teams, "Northern Ireland", "Belgium");
	ResultTmp["Hungary"] = getPartRate(teams, "Hungary", "Wales") + getPartRate(teams, "Hungary", "Northern Ireland");
	ResultTmp["Belgium"] = getPartRate(teams, "Belgium", "Wales") + getPartRate(teams, "Belgium", "Northern Ireland");
	ResultTmp["Germany"] = getPartRate(teams, "Germany", "Italy") + getPartRate(teams, "Germany", "Spain");
	ResultTmp["Slovakia"] = getPartRate(teams, "Slovakia", "Italy") + getPartRate(teams, "Slovakia", "Spain");
	ResultTmp["Italy"] = getPartRate(teams, "Italy", "Germany") + getPartRate(teams, "Italy", "Slovakia");
	ResultTmp["Spain"] = getPartRate(teams, "Spain", "Germany") + getPartRate(teams, "Spain", "Slovakia");
	ResultTmp["France"] = getPartRate(teams, "France", "England") + getPartRate(teams, "France", "Iceland");
	ResultTmp["Republic of Ireland"] = getPartRate(teams, "Republic of Ireland", "England") + getPartRate(teams, "Republic of Ireland", "Iceland");
	ResultTmp["England"] = getPartRate(teams, "England", "France") + getPartRate(teams, "England", "Republic of Ireland");
	ResultTmp["Iceland"] = getPartRate(teams, "Iceland", "France") + getPartRate(teams, "Iceland", "Republic of Ireland");
	refresh();
}

function forecast2 (teams) {
	ResultTmp["Switzerland"] = getPartRate(teams, "Switzerland", "Wales") + getPartRate(teams, "Switzerland", "Northern Ireland") + getPartRate(teams, "Switzerland", "Hungary") + getPartRate(teams, "Switzerland", "Belgium");
	ResultTmp["Poland"] = getPartRate(teams, "Poland", "Wales") + getPartRate(teams, "Poland", "Northern Ireland") + getPartRate(teams, "Poland", "Hungary") + getPartRate(teams, "Poland", "Belgium");
	ResultTmp["Croatia"] = getPartRate(teams, "Croatia", "Wales") + getPartRate(teams, "Croatia", "Northern Ireland") + getPartRate(teams, "Croatia", "Hungary") + getPartRate(teams, "Croatia", "Belgium");
	ResultTmp["Portugal"] = getPartRate(teams, "Portugal", "Wales") + getPartRate(teams, "Portugal", "Northern Ireland") + getPartRate(teams, "Portugal", "Hungary") + getPartRate(teams, "Portugal", "Belgium");
	ResultTmp["Wales"] = getPartRate(teams, "Wales", "Switzerland") + getPartRate(teams, "Wales", "Poland") + getPartRate(teams, "Wales", "Croatia") + getPartRate(teams, "Wales", "Portugal");
	ResultTmp["Northern Ireland"] = getPartRate(teams, "Northern Ireland", "Switzerland") + getPartRate(teams, "Northern Ireland", "Poland") + getPartRate(teams, "Northern Ireland", "Croatia") + getPartRate(teams, "Northern Ireland", "Portugal");
	ResultTmp["Hungary"] = getPartRate(teams, "Hungary", "Switzerland") + getPartRate(teams, "Hungary", "Poland") + getPartRate(teams, "Hungary", "Croatia") + getPartRate(teams, "Hungary", "Portugal");
	ResultTmp["Belgium"] = getPartRate(teams, "Belgium", "Switzerland") + getPartRate(teams, "Belgium", "Poland") + getPartRate(teams, "Belgium", "Croatia") + getPartRate(teams, "Belgium", "Portugal");
	ResultTmp["Germany"] = getPartRate(teams, "Germany", "France") + getPartRate(teams, "Germany", "Republic of Ireland") + getPartRate(teams, "Germany", "England") + getPartRate(teams, "Germany", "Iceland");
	ResultTmp["Slovakia"] = getPartRate(teams, "Slovakia", "France") + getPartRate(teams, "Slovakia", "Republic of Ireland") + getPartRate(teams, "Slovakia", "England") + getPartRate(teams, "Slovakia", "Iceland");
	ResultTmp["Italy"] = getPartRate(teams, "Italy", "France") + getPartRate(teams, "Italy", "Republic of Ireland") + getPartRate(teams, "Italy", "England") + getPartRate(teams, "Italy", "Iceland");
	ResultTmp["Spain"] = getPartRate(teams, "Spain", "France") + getPartRate(teams, "Spain", "Republic of Ireland") + getPartRate(teams, "Spain", "England") + getPartRate(teams, "Spain", "Iceland");
	ResultTmp["France"] = getPartRate(teams, "France", "Germany") + getPartRate(teams, "France", "Slovakia") + getPartRate(teams, "France", "Italy") + getPartRate(teams, "France", "Spain");
	ResultTmp["Republic of Ireland"] = getPartRate(teams, "Republic of Ireland", "Germany") + getPartRate(teams, "Republic of Ireland", "Slovakia") + getPartRate(teams, "Republic of Ireland", "Italy") + getPartRate(teams, "Republic of Ireland", "Spain");
	ResultTmp["England"] = getPartRate(teams, "England", "Germany") + getPartRate(teams, "England", "Slovakia") + getPartRate(teams, "England", "Italy") + getPartRate(teams, "England", "Spain");
	ResultTmp["Iceland"] = getPartRate(teams, "Iceland", "Germany") + getPartRate(teams, "Iceland", "Slovakia") + getPartRate(teams, "Iceland", "Italy") + getPartRate(teams, "Iceland", "Spain");
	refresh();
}

function forecast (teams, team) {
	clear();
	forecast8(teams);
	forecast4(teams);
	forecast2(teams);
	if (place[team] == 1) {
		return getPartRate(teams, team, "Germany") + getPartRate(teams, team, "Slovakia") + getPartRate(teams, team, "Italy") + getPartRate(teams, team, "Spain") + 
				getPartRate(teams, team, "France") + getPartRate(teams, team, "Republic of Ireland") + getPartRate(teams, team, "England") + getPartRate(teams, team, "Iceland");
	} else {
		return getPartRate(teams, team, "Switzerland") + getPartRate(teams, team, "Poland") + getPartRate(teams, team, "Croatia") + getPartRate(teams, team, "Portugal") + 
				getPartRate(teams, team, "Wales") + getPartRate(teams, team, "Northern Ireland") + getPartRate(teams, team, "Hungary") + getPartRate(teams, team, "Belgium");
	};
}

/* For Test!!
var teams = {
	"Switzerland": 1,
	"Poland": 2,
	"Croatia": 3,
	"Portugal": 4,
	"Wales": 5,
	"Northern Ireland": 6,
	"Hungary": 7,
	"Belgium": 8,
	"Germany": 9,
	"Slovakia": 10,
	"Italy": 11,
	"Spain": 12,
	"France": 13,
	"Republic of Ireland": 14,
	"England": 15,
	"Iceland": 16
};
console.log(forecast(teams, "Switzerland"));
console.log(forecast(teams, "Poland"));
console.log(forecast(teams, "Croatia"));
console.log(forecast(teams, "Portugal"));
console.log(forecast(teams, "Wales"));
console.log(forecast(teams, "Northern Ireland"));
console.log(forecast(teams, "Hungary"));
console.log(forecast(teams, "Belgium"));
console.log(forecast(teams, "Germany"));
console.log(forecast(teams, "Slovakia"));
console.log(forecast(teams, "Italy"));
console.log(forecast(teams, "Spain"));
console.log(forecast(teams, "France"));
console.log(forecast(teams, "Republic of Ireland"));
console.log(forecast(teams, "England"));
console.log(forecast(teams, "Iceland"));
*/
