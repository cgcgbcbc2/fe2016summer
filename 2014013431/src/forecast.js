function cal(a,b){
    return a==b?0.5:a/(a+b);
}
function getcmp0(cmp,i){
    if (i / 2 == 0) {
        cmp[0] = 2;
        cmp[1] = 3;
    }
    if (i / 2 == 1) {
        cmp[0] = 0;
        cmp[1] = 1;
    }
    if (i / 2 == 2) {
        cmp[0] = 6;
        cmp[1] = 7;
    }
    if (i / 2 == 3) {
        cmp[0] = 4;
        cmp[1] = 5;
    }
    if (i / 2 == 4) {
        cmp[0] = 10;
        cmp[1] = 11;
    }
    if (i / 2 == 5) {
        cmp[0] = 8;
        cmp[1] = 9;
    }
    if (i / 2 == 6) {
        cmp[0] = 14;
        cmp[1] = 15;
    }
    if (i / 2 == 7) {
        cmp[0] = 12;
        cmp[1] = 13;
    }
}
function getcmp1(cmp,i){
    if (i / 4 == 0) {
        cmp[0] = 4;
        cmp[1] = 5;
        cmp[2] = 6;
        cmp[3] = 7;
    }
    if (i / 4 == 1) {
        cmp[0] = 0;
        cmp[1] = 1;
        cmp[2] = 2;
        cmp[3] = 3;
    }
    if (i / 4 == 2) {
        cmp[0] = 12;
        cmp[1] = 13;
        cmp[2] = 14;
        cmp[3] = 15;
    }
    if (i / 4 == 3) {
        cmp[0] = 8;
        cmp[1] = 9;
        cmp[2] = 10;
        cmp[3] = 11;
    }
    // console.log(cmp);
}
function getcmp2(cmp,i){
    if (i / 8 == 0) {
        cmp[0] = 8;
        cmp[1] = 9;
        cmp[2] = 10;
        cmp[3] = 11;
        cmp[4] = 12;
        cmp[5] = 13;
        cmp[6] = 14;
        cmp[7] = 15;
    }
    if (i / 8 == 1) {
        cmp[0] = 0;
        cmp[1] = 1;
        cmp[2] = 2;
        cmp[3] = 3;
        cmp[4] = 4;
        cmp[5] = 5;
        cmp[6] = 6;
        cmp[7] = 7;
    }
    // console.log(cmp);
    // console.log(i);
}
function forecast(team,country){
    var data = [
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
    var firstRound = new Array(16);
    for (var i = 0; i < firstRound.length; i++) {
        firstRound[i] = cal(team[data[i]],team[data[2 * parseInt(i/2) + (i+1)%2]]);
    }
    // console.log(firstRound);
    var cmp0 = new Array(2);
    var secondRound = new Array(16);
    for (var i = 0; i < secondRound.length; i++) {
        getcmp0(cmp0,i);
        secondRound[i] = firstRound[i] * (firstRound[cmp0[0]] * cal(team[data[i]],team[data[cmp0[0]]]) + 
            firstRound[cmp0[1]] * cal(team[data[i]],team[data[cmp0[1]]]));
    }
    // console.log(secondRound);
    var thirdRound = new Array(16);
    var cmp = new Array(4);
    for (var i = 0; i < thirdRound.length; i++) {
        getcmp1(cmp,i);
        thirdRound[i] = secondRound[i] * (secondRound[cmp[0]] * cal(team[data[i]],team[data[cmp[0]]])
        + secondRound[cmp[1]] * cal(team[data[i]],team[data[cmp[1]]]) + secondRound[cmp[2]] * cal(team[data[i]],team[data[cmp[2]]]) 
        + secondRound[cmp[3]] * cal(team[data[i]],team[data[cmp[3]]]));
    }
    // console.log(thirdRound);
    var lastRound = new Array(16);
    var cmp2 = new Array(8);
    for (var i = 0; i < lastRound.length; i++) {
        getcmp2(cmp2,i);
        lastRound[i] = thirdRound[i] * (thirdRound[cmp2[0]] * cal(team[data[i]],team[data[cmp2[0]]]) + thirdRound[cmp2[1]] * cal(team[data[i]],team[data[cmp2[1]]]) 
            + thirdRound[cmp2[2]] * cal(team[data[i]],team[data[cmp2[2]]]) + thirdRound[cmp2[3]] * cal(team[data[i]],team[data[cmp2[3]]]) 
            + thirdRound[cmp2[4]] * cal(team[data[i]],team[data[cmp2[4]]]) + thirdRound[cmp2[5]] * cal(team[data[i]],team[data[cmp2[5]]]) 
            + thirdRound[cmp2[6]] * cal(team[data[i]],team[data[cmp2[6]]]) + thirdRound[cmp2[7]] * cal(team[data[i]],team[data[cmp2[7]]])) 
    }
    // console.log(lastRound);
    return lastRound[data.indexOf(country)];
}
// (function(){
// 	var o = {
//         "Switzerland": 0,
//         "Poland": 110,
//         "Croatia": 120,
//         "Portugal": 130,
//         "Wales": 140,
//         "Northern Ireland": 150,
//         "Hungary": 160,
//         "Belgium": 170,
//         "Germany": 180,
//         "Slovakia": 190,
//         "Italy": 0,
//         "Spain": 0,
//         "France": 220,
//         "Republic of Ireland": 230,
//         "England": 240,
//         "Iceland": 250
//     };
//     // forecast(o,2);
// 	var d = [], k = Object.keys(o);
// 	for (var i = 0; i < k.length; i++) {
// 		d.push(forecast(o, k[i]));
// 	}
// 	console.log(d);
// 	var sum = 0.0;
// 	for (var j = 0; j < d.length; j++) {
// 		sum += d[j];
// 	}
// 	console.log(sum);
// })();