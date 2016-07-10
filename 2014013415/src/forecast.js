var ability = {
    'Switzerland': 80,
    'Poland': 70,
    'Croatia': 75,
    'Portugal': 85,
    'Wales': 85,
    'NorthIreland': 90,
    'Hungary': 75,
    'Belgium': 80,
    'Germany': 100,
    'Slovakia': 70,
    'Italy': 100,
    'Spain': 95,
    'France': 90,
    'Ireland': 80,
    'England': 90,
    'Iceland': 75
};
var countries = new Array;
countries[0] = 'Switzerland';
countries[1] = 'Poland';
countries[2] = 'Croatia';
countries[3] = 'Portugal';
countries[4] = 'Wales';
countries[5] = 'NorthIreland';
countries[6] = 'Hungary';
countries[7] = 'Belgium';
countries[8] = 'Germany';
countries[9] = 'Slovakia';
countries[10] = 'Italy';
countries[11] = 'Spain';
countries[12] = 'France';
countries[13] = 'Ireland';
countries[14] = 'England';
countries[15] = 'Iceland';

<!--求a与b比赛a的胜率-->
function adefeat1(a, b) {
    if (ability[countries[a]] == 0 && ability[countries[b]] == 0)
        return 0.5;
    else
        return ability[countries[a]] / (ability[countries[a]] + ability[countries[b]]);
}

<!--求a在四人中的胜率-->
function adefeat4(a) {
    var num = a % 4;
    if (num == 0)
        return adefeat1(a, a + 1) * (adefeat1(a + 2, a + 3) * adefeat1(a, a + 2) + adefeat1(a + 3, a + 2) * adefeat1(a, a + 3));
    else if (num == 1)
        return adefeat1(a, a - 1) * (adefeat1(a + 1, a + 2) * adefeat1(a, a + 1) + adefeat1(a + 2, a + 1) * adefeat1(a, a + 2));
    else if (num == 2)
        return adefeat1(a, a + 1) * (adefeat1(a - 2, a - 1) * adefeat1(a, a - 2) + adefeat1(a - 1, a - 2) * adefeat1(a, a - 1));
    else if (num == 3)
        return adefeat1(a, a - 1) * (adefeat1(a - 3, a - 2) * adefeat1(a, a - 3) + adefeat1(a - 2, a - 3) * adefeat1(a, a - 2));
}

<!--求a在八人中的胜率-->
function adefeat8(a) {
    var num = parseInt(a / 4);
    var winPerc = 0;
    if (num == 0) {
        for (var i = 4; i < 8; i++) {
            winPerc += adefeat4(i) * adefeat1(a, i);
        }
    } else if (num == 1) {
        for (var i = 0; i < 4; i++) {
            winPerc += adefeat4(i) * adefeat1(a, i);
        }
    } else if (num == 2) {
        for (var i = 12; i < 16; i++) {
            winPerc += adefeat4(i) * adefeat1(a, i);
        }
    } else if (num == 3) {
        for (var i = 8; i < 12; i++) {
            winPerc += adefeat4(i) * adefeat1(a, i);
        }
    }
    winPerc *= adefeat4(a);
    return winPerc;
}

<!--求a的最终胜率-->
function awin(a) {
    var num = parseInt(a / 8);
    var winPerc = 0;
    if (num == 0) {
        for (var i = 8; i < 16; i++) {
            winPerc += adefeat8(i) * adefeat1(a, i);
        }
    } else {
        for (var i = 0; i < 8; i++) {
            winPerc += adefeat8(i) * adefeat1(a, i);
        }
    }
    winPerc *= adefeat8(a);
    return winPerc;
}

function forecast(ability, country) {
    var num = countries.indexOf(country);
    if (num == -1)
        return false;
    return awin(num);
}
