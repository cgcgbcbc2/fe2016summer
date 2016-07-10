var forecast = function(info, query) {
	var teamInfo = {
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

	var res = 0;

	var strength = [
	50, 50, 50, 50, 
	50, 50, 50, 50,
	50, 50, 50, 50,
	50, 50, 50, 50,];

	for (var name in teamInfo) {
		strength[teamInfo[name]] = info[name];
	}

	query = teamInfo[query];

	var p = new Array(3);
	for (i = 0; i < 3; i++) {
		p[i] = new Array(16);
		for (j = 0; j < 16; j++) {
			p[i][j] = 0;
		}
	}

	var win = function(a, b) {
		return strength[a] / (strength[a] + strength[b]);
	}

	// top-8
	for (i = 0; i < 8; i++) {
		p[0][i * 2] = win(i * 2, i * 2 + 1);
		p[0][i * 2 + 1] = 1 - p[0][i * 2];
	}

	// top-4
	for (i = 0; i < 4; i++) {
		p[1][i * 4    ] = p[0][i * 4    ] * (p[0][i * 4 + 2] * win(i * 4    , i * 4 + 2) + p[0][i * 4 + 3] * win(i * 4    , i * 4 + 3));
		p[1][i * 4 + 1] = p[0][i * 4 + 1] * (p[0][i * 4 + 2] * win(i * 4 + 1, i * 4 + 2) + p[0][i * 4 + 3] * win(i * 4 + 1, i * 4 + 3));
		p[1][i * 4 + 2] = p[0][i * 4 + 2] * (p[0][i * 4    ] * win(i * 4 + 2, i * 4    ) + p[0][i * 4 + 1] * win(i * 4 + 2, i * 4 + 1));
		p[1][i * 4 + 3] = p[0][i * 4 + 3] * (p[0][i * 4    ] * win(i * 4 + 3, i * 4    ) + p[0][i * 4 + 1] * win(i * 4 + 3, i * 4 + 1));
	}

	// top-2
	for (i = 0; i < 2; i++) {
		for (j = i * 8; j < i * 8 + 4; j++) {
			for (k = i * 8 + 4; k < i * 8 + 8; k++) {
				p[2][j] += p[1][k] * win(j, k);
			}
			p[2][j] *= p[1][j];
		}
		for (j = i * 8 + 4; j < i * 8 + 8; j++) {
			for (k = i * 8; k < i * 8 + 4; k++) {
				p[2][j] += p[1][k] * win(j, k);
			}
			p[2][j] *= p[1][j];
		}
	}

	// first 8 or last 8?
	offset = query < 8 ? 8: 0;
	for (i = offset; i < offset + 8; i++) {
		res += p[2][i] * win(query, i);
	}
	res *= p[2][query];

	return res;
}