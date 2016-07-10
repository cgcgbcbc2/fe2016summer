function forecast(){
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
    var temp = new Object;
    for(var i = 0; i < 16; i+=2) {
		if(arguments[0][teams[i + k]] + arguments[0][teams[i + j]] != 0){
			temp[teams[i]] = arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i + 1]]);
			temp[teams[i + 1]] = 1 - temp[teams[i]];
		}
        else{
			temp[teams[i]] = 0.5;
			temp[teams[i + 1]] = 1 - temp[teams[i]];
		}
    }
    var temp_1 = new Object;
    for(var a = 0; a < 16; a++){
        temp_1[teams[a]] = 0;
    }
    for(var i = 0; i < 16; i+=4){
        for(var k = 0; k < 2; k++){
            for(var j = 2; j < 4; j++) {
				if(arguments[0][teams[i + k]] + arguments[0][teams[i + j]] != 0){
					temp_1[teams[i + k]] += temp[teams[i + k]] * temp[teams[i + j]] * (arguments[0][teams[i + k]] / (arguments[0][teams[i + k]] + arguments[0][teams[i + j]]));
				}
                else{
					temp_1[teams[i + k]] += temp[teams[i + k]] * temp[teams[i + j]] * 0.5;
				}
            }
        }
        for(var k = 2; k < 4; k++){
            for(var j = 0; j < 2; j++) {
                if(arguments[0][teams[i + k]] + arguments[0][teams[i + j]] != 0){
					temp_1[teams[i + k]] += temp[teams[i + k]] * temp[teams[i + j]] * (arguments[0][teams[i + k]] / (arguments[0][teams[i + k]] + arguments[0][teams[i + j]]));
				}
                else{
					temp_1[teams[i + k]] += temp[teams[i + k]] * temp[teams[i + j]] * 0.5;
				}
            }
        }
    }
    var temp_2 = new Object;
    for(var a = 0; a < 16; a++){
        temp_2[teams[a]] = 0;
    }
    for(var i = 0; i < 16; i+=8){
        for(var k = 0; k < 4; k++) {
            for(var j = 4; j < 8; j++) {
                if(arguments[0][teams[i + k]] + arguments[0][teams[i + j]] != 0){
					temp_2[teams[i + k]] += temp_1[teams[i + k]] * temp_1[teams[i + j]] * (arguments[0][teams[i + k]] / (arguments[0][teams[i + k]] + arguments[0][teams[i + j]]));
				}
                else{
					temp_2[teams[i + k]] += temp_1[teams[i + k]] * temp_1[teams[i + j]] * 0.5;
				}
            }
        }
        for(var k = 4; k < 8; k++) {
            for(var j = 0; j < 4; j++) {
                if(arguments[0][teams[i + k]] + arguments[0][teams[i + j]] != 0){
					temp_2[teams[i + k]] += temp_1[teams[i + k]] * temp_1[teams[i + j]] * (arguments[0][teams[i + k]] / (arguments[0][teams[i + k]] + arguments[0][teams[i + j]]));
				}
                else{
					temp_2[teams[i + k]] += temp_1[teams[i + k]] * temp_1[teams[i + j]] * 0.5;
				}
            }
        }
    }
    var temp_3 = new Object;
    for(var a = 0; a < 16; a++){
        temp_3[teams[a]] = 0;
    }
    for(var i = 0; i < 16; i += 16)
    {
        for(var k = 0; k < 8; k++) {
            for(var j = 8; j < 16; j++) {
                if(arguments[0][teams[i + k]] + arguments[0][teams[i + j]] != 0){
					temp_3[teams[i + k]] += temp_2[teams[i + k]] * temp_2[teams[i + j]] * (arguments[0][teams[i + k]] / (arguments[0][teams[i + k]] + arguments[0][teams[i + j]]));
				}
                else{
					temp_3[teams[i + k]] += temp_2[teams[i + k]] * temp_2[teams[i + j]] * 0.5;
				}
            }
        }
        for(var k = 8; k < 16; k++) {
            for(var j = 0; j < 8; j++) {
                if(arguments[0][teams[i + k]] + arguments[0][teams[i + j]] != 0){
					temp_3[teams[i + k]] += temp_2[teams[i + k]] * temp_2[teams[i + j]] * (arguments[0][teams[i + k]] / (arguments[0][teams[i + k]] + arguments[0][teams[i + j]]));
				}
                else{
					temp_3[teams[i + k]] += temp_2[teams[i + k]] * temp_2[teams[i + j]] * 0.5;
				}
            }
        }
    }
    return temp_3[arguments[1]];
}