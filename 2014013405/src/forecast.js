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
    var chance_8 = new Object;           //进入八强的概率
    for(var i = 0; i < 16; i++){
        if(i % 2 == 0){
            if(arguments[0][teams[i]] + arguments[0][teams[i+1]] != 0){
            chance_8[teams[i]] = arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+1]]);
            }
            else{
            chance_8[teams[i]] = 0.5;
            }
        }
        else{
            chance_8[teams[i]] = 1 - chance_8[teams[i-1]];
        }
            
    }
    
    
    var chance_4 = new Object;           //进入四强的概率
    for(var i = 0; i < 16; i++){
        chance_4[teams[i]] = 0;
    }
    for(var i = 0; i < 16; i++){
        if(i % 4 == 0){
            for(var j = 2; j < 4; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_4[teams[i]] += chance_8[teams[i]] * chance_8[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_4[teams[i]] += chance_8[teams[i]] * chance_8[teams[i+j]] * 0.5;
                }
            }
        }
        if(i % 4 == 1){
            for(var j = 1; j < 3; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_4[teams[i]] += chance_8[teams[i]] * chance_8[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_4[teams[i]] += chance_8[teams[i]] * chance_8[teams[i+j]] * 0.5;
                }
            }
        }
        if(i % 4 == 2){
            for(var j = 1; j < 3; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_4[teams[i]] += chance_8[teams[i]] * chance_8[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_4[teams[i]] += chance_8[teams[i]] * chance_8[teams[i-j]] * 0.5;
                }
            }
        }
        if(i % 4 == 3){
            for(var j = 2; j < 4; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_4[teams[i]] += chance_8[teams[i]] * chance_8[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_4[teams[i]] += chance_8[teams[i]] * chance_8[teams[i-j]] * 0.5;
                }
            }
        }
    }
    
    var chance_2 = new Object;         //进入决赛概率
    for(var i = 0; i < 16; i++){
        chance_2[teams[i]] = 0;
    }
    for(var i = 0; i < 16; i++){
        if(i % 8 == 0){
            for(var j = 4; j < 8; j++){
               if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i+j]] * 0.5;
                } 
            }
        }
        if(i % 8 == 1){
            for(var j = 3; j < 7; j++){
               if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i+j]] * 0.5;
                } 
            }
        }
        if(i % 8 == 2){
            for(var j = 2; j < 6; j++){
               if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i+j]] * 0.5;
                } 
            }
        }
        if(i % 8 == 3){
            for(var j = 1; j < 5; j++){
               if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i+j]] * 0.5;
                } 
            }
        }
        if(i % 8 == 4){
            for(var j = 1; j < 5; j++){
               if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i-j]] * 0.5;
                } 
            }
        }
        if(i % 8 == 5){
            for(var j = 2; j < 6; j++){
               if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i-j]] * 0.5;
                } 
            }
        }
        if(i % 8 == 6){
            for(var j = 3; j < 7; j++){
               if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i-j]] * 0.5;
                } 
            }
        }
        if(i % 8 == 7){
            for(var j = 4; j < 8; j++){
               if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_2[teams[i]] += chance_4[teams[i]] * chance_4[teams[i-j]] * 0.5;
                } 
            }
        }
    }
    
       
    var chance_1 = new Object;          //获得冠军概率
    for(var i = 0; i < 16; i++){
        chance_1[teams[i]] = 0;
    }
    for(var i = 0; i < 16; i++){
        if(i % 16 == 0){
            for(var j = 8; j < 16; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 1){
            for(var j = 7; j < 15; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 2){
            for(var j = 6; j < 14; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * 0.5;
                }  
            }
        }
        if(i % 16 == 3){
            for(var j = 5; j < 13; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 4){
            for(var j = 4; j < 12; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 5){
            for(var j = 3; j < 11; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * 0.5;
                }  
            }
        }
        if(i % 16 == 6){
            for(var j = 2; j < 10; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 7){
            for(var j = 1; j < 9; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i+j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i+j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i+j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 8){
            for(var j = 1; j < 9; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 9){
            for(var j = 2; j < 10; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * 0.5;
                }  
            }
        }
        if(i % 16 == 10){
            for(var j = 3; j < 11; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 11){
            for(var j = 4; j < 12; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 12){
            for(var j = 5; j < 13; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 13){
            for(var j = 6; j < 14; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 14){
            for(var j = 7; j < 15; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * 0.5;
                } 
            }
        }
        if(i % 16 == 15){
            for(var j = 8; j < 16; j++){
                if(arguments[0][teams[i]] + arguments[0][teams[i-j]] != 0){
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * (arguments[0][teams[i]] / (arguments[0][teams[i]] + arguments[0][teams[i-j]]));
                }
                else{
                    chance_1[teams[i]] += chance_2[teams[i]] * chance_2[teams[i-j]] * 0.5;
                } 
            }
        }
    }
  
    return chance_1[arguments[1]];

}
