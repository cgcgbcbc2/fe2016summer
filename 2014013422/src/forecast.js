/**
 * Created by yangs on 7/3/2016.
 */

var versus = function (strengthA, strengthB) {
  return (strengthA === 0 && strengthB === 0) ? 0.5 : (strengthA / (strengthA + strengthB));
};

var forecast = function (strength, country) {
  var teams = [
    'Switzerland',
    'Poland',

    'Croatia',
    'Portugal',

    'Wales',
    'Northern Ireland',

    'Hungary',
    'Belgium',

    'Germany',
    'Slovakia',

    'Italy',
    'Spain',

    'France',
    'Republic of Ireland',

    'England',
    'Iceland'
  ];

  var firstRound = teams.map(function (obj) {
    var index = teams.indexOf(obj);
    var flag = index % 2;
    var rObj = {};
    if (flag)
      rObj[obj] = versus(strength[obj], strength[teams[index - 1]]);
    else
      rObj[obj] = versus(strength[obj], strength[teams[index + 1]]);
    return rObj;
  });

  var secondRound = teams.map(function (obj) {
    var index = teams.indexOf(obj);
    var flag = index % 4;
    var rObj = {};
    switch (flag) {
      case 0:
        rObj[obj] = firstRound[index][obj] * (firstRound[index + 2][teams[index + 2]] * versus(strength[obj], strength[teams[index + 2]])
          + firstRound[index + 3][teams[index + 3]] * versus(strength[obj], strength[teams[index + 3]]));
        break;
      case 1:
        rObj[obj] = firstRound[index][obj] * (firstRound[index + 1][teams[index + 1]] * versus(strength[obj], strength[teams[index + 1]])
          + firstRound[index + 2][teams[index + 2]] * versus(strength[obj], strength[teams[index + 2]]));
        break;
      case 2:
        rObj[obj] = firstRound[index][obj] * (firstRound[index - 1][teams[index - 1]] * versus(strength[obj], strength[teams[index - 1]])
          + firstRound[index - 2][teams[index - 2]] * versus(strength[obj], strength[teams[index - 2]]));
        break;
      case 3:
        rObj[obj] = firstRound[index][obj] * (firstRound[index - 2][teams[index - 2]] * versus(strength[obj], strength[teams[index - 2]])
          + firstRound[index - 3][teams[index - 3]] * versus(strength[obj], strength[teams[index - 3]]));
        break;
    }
    return rObj;
  });

  var thirdRound = teams.map(function (obj) {
    var index = teams.indexOf(obj);
    var flag = index % 8;
    var rObj = {};
    switch (flag) {
      case 0:
        rObj[obj] = secondRound[index][obj] * (secondRound[index + 4][teams[index + 4]] * versus(strength[obj], strength[teams[index + 4]])
          + secondRound[index + 5][teams[index + 5]] * versus(strength[obj], strength[teams[index + 5]])
          + secondRound[index + 6][teams[index + 6]] * versus(strength[obj], strength[teams[index + 6]])
          + secondRound[index + 7][teams[index + 7]] * versus(strength[obj], strength[teams[index + 7]]));
        break;
      case 1:
        rObj[obj] = secondRound[index][obj] * (secondRound[index + 3][teams[index + 3]] * versus(strength[obj], strength[teams[index + 3]])
          + secondRound[index + 4][teams[index + 4]] * versus(strength[obj], strength[teams[index + 4]])
          + secondRound[index + 5][teams[index + 5]] * versus(strength[obj], strength[teams[index + 5]])
          + secondRound[index + 6][teams[index + 6]] * versus(strength[obj], strength[teams[index + 6]]));
        break;
      case 2:
        rObj[obj] = secondRound[index][obj] * (secondRound[index + 2][teams[index + 2]] * versus(strength[obj], strength[teams[index + 2]])
          + secondRound[index + 3][teams[index + 3]] * versus(strength[obj], strength[teams[index + 3]])
          + secondRound[index + 4][teams[index + 4]] * versus(strength[obj], strength[teams[index + 4]])
          + secondRound[index + 5][teams[index + 5]] * versus(strength[obj], strength[teams[index + 5]]));
        break;
      case 3:
        rObj[obj] = secondRound[index][obj] * (secondRound[index + 1][teams[index + 1]] * versus(strength[obj], strength[teams[index + 1]])
          + secondRound[index + 2][teams[index + 2]] * versus(strength[obj], strength[teams[index + 2]])
          + secondRound[index + 3][teams[index + 3]] * versus(strength[obj], strength[teams[index + 3]])
          + secondRound[index + 4][teams[index + 4]] * versus(strength[obj], strength[teams[index + 4]]));
        break;
      case 4:
        rObj[obj] = secondRound[index][obj] * (secondRound[index - 1][teams[index - 1]] * versus(strength[obj], strength[teams[index - 1]])
          + secondRound[index - 2][teams[index - 2]] * versus(strength[obj], strength[teams[index - 2]])
          + secondRound[index - 3][teams[index - 3]] * versus(strength[obj], strength[teams[index - 3]])
          + secondRound[index - 4][teams[index - 4]] * versus(strength[obj], strength[teams[index - 4]]));
        break;
      case 5:
        rObj[obj] = secondRound[index][obj] * (secondRound[index - 2][teams[index - 2]] * versus(strength[obj], strength[teams[index - 2]])
          + secondRound[index - 3][teams[index - 3]] * versus(strength[obj], strength[teams[index - 3]])
          + secondRound[index - 4][teams[index - 4]] * versus(strength[obj], strength[teams[index - 4]])
          + secondRound[index - 5][teams[index - 5]] * versus(strength[obj], strength[teams[index - 5]]));
        break;
      case 6:
        rObj[obj] = secondRound[index][obj] * (secondRound[index - 3][teams[index - 3]] * versus(strength[obj], strength[teams[index - 3]])
          + secondRound[index - 4][teams[index - 4]] * versus(strength[obj], strength[teams[index - 4]])
          + secondRound[index - 5][teams[index - 5]] * versus(strength[obj], strength[teams[index - 5]])
          + secondRound[index - 6][teams[index - 6]] * versus(strength[obj], strength[teams[index - 6]]));
        break;
      case 7:
        rObj[obj] = secondRound[index][obj] * (secondRound[index - 4][teams[index - 4]] * versus(strength[obj], strength[teams[index - 4]])
          + secondRound[index - 5][teams[index - 5]] * versus(strength[obj], strength[teams[index - 5]])
          + secondRound[index - 6][teams[index - 6]] * versus(strength[obj], strength[teams[index - 6]])
          + secondRound[index - 7][teams[index - 7]] * versus(strength[obj], strength[teams[index - 7]]));
        break;
    }
    return rObj;
  });

  var lastRound = teams.map(function (obj) {
    var index = teams.indexOf(obj);
    var flag = index % 16;
    var rObj = {};
    if (flag < 8) {
      var sumI = 0;
      for (var i = 8; i < 16; i++) {
        sumI += thirdRound[i][teams[i]] * versus(strength[obj], strength[teams[i]]);
      }
      rObj[obj] = thirdRound[index][obj] * sumI;
    } else {
      var sumJ = 0;
      for (var j = 0; j < 8; j++) {
        sumJ += thirdRound[j][teams[j]] * versus(strength[obj], strength[teams[j]]);
      }
      rObj[obj] = thirdRound[index][obj] * sumJ;
    }
    return rObj;
  });

  return lastRound[teams.indexOf(country)][country];
};
