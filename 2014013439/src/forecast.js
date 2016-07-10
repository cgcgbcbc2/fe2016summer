function forecast(teamInfo, nm) {
	"use strict"; 
	var myMap =	{
		"Switzerland": 			0,
		"Poland": 				1,
		"Croatia": 				2,
		"Portugal": 			3,
		"Wales": 				4,
		"Northern Ireland": 	5,
		"Hungary": 				6,
		"Belgium": 				7,
		"Germany": 				8,
		"Slovakia": 			9,
		"Italy": 				10,
		"Spain": 				11,
		"France": 				12,
		"Republic of Ireland": 	13,
		"England": 				14,
		"Iceland" : 			15,
	};

	var abl = new Array(16);
	var t = new Array();

	for(var i in teamInfo) {
		abl[myMap[i]] = teamInfo[i];
		t.push(new Array(16));
	}

	for(var i = 0; i < 16; i++) {
		for(var j = 0; j < 16; j++) {
			t[i][j] = abl[i] / (abl[i] + abl[j]);
		}
	}
	var res = calc(0, 16, t);
	return res[myMap[nm]];
}

function calc(l, r, t) {
	var len = r - l;
	var m = (l + r) / 2;


	if(len <= 2) {
		return [t[l][r - 1], t[r - 1][l]];
	}

	var rt = new Array(len);
	var tL = calc(l, m, t);
	var tR = calc(m, r, t);

	for(var i = l; i < m; i++) {
		var p = 0;
		for(var j = m; j < r; j++) {
			p += tL[i - l] * t[i][j] * tR[j - m];
		}
		rt[i - l] = p;
	}
	
	for(var j = m; j < r; j++) {
		var p = 0;
		for(var i = l; i < m; i++) {
			p += tR[j - m] * t[j][i] * tL[i - l];
		}
		rt[j - l] = p;
	}
	return rt;
}

if (exports) {  
    exports.forecast = forecast;
}
