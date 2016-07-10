function forecast(strength,  country) {
	var num = 0;
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
	var winningChance = {
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
	var renewedWinningChance = {
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

	for (var i = 0; i < 16; i++) {
		if (teams[i] == country) {
			num = i;
			break;
		}
	}
	for (var i = 1; i < 16; i *= 2) {
		for (var j = 0; j < 16; j++) {
				var tempChance = 0;
				for (var k = 0; k < 16; k++) {
					if ((parseInt(j/2/i) == parseInt(k/2/i)) && (parseInt(j/i) != parseInt(k/i))) {
						tempChance += winningChance[teams[k]] * strength[teams[j]] / (strength[teams[j]] + strength[teams[k]]);
					}
				}
				renewedWinningChance[teams[j]] = winningChance[teams[j]] * tempChance;
				tempChance = 0;
		}
		for (var j = 0; j < 16; j++) {
			winningChance[teams[j]] = renewedWinningChance[teams[j]];
		}
	}

	return winningChance[country];
}