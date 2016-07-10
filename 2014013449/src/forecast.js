var teamNames = ["Switzerland", "Poland", "Croatia", "Portugal", "Wales", "Northern Ireland", "Hungary",
    "Belgium", "Germany", "Slovakia", "Italy", "Spain", "France", "Republic of Ireland", "England", "Iceland"];

function power(index) {
    var result = 1;
    for (var i = 0; i < index; i++) {
        result *= 2;
    }
    return result;
}

function recursiveForecast(teamStrength, teamNumber, teamTern) {
    if (teamTern == 0) {
        return 1;
    }
    else {
        var count = power(teamTern-1);
        var start;
        if ((Math.floor(teamNumber / count) % 2) == 0) {
            start = Math.floor(teamNumber / count) * count + count;
        }
        else {
            start = Math.floor(teamNumber / count) * count - count;
        }
        var winPer = 0;
        for (var i = 0; i < count; i++) {
            winPer += recursiveForecast(teamStrength, teamNumber, teamTern - 1) * recursiveForecast(teamStrength, start + i, teamTern - 1)
                        * (teamStrength[teamNames[teamNumber]] / (teamStrength[teamNames[teamNumber]] + teamStrength[teamNames[start + i]]));
        }
        return winPer;
    }
}

function forecast(teamStrength, teamCode) {
    var teamNumber;
    for(var i = 0; i < teamNames.length; i++)
    {
        if (teamNames[i] == teamCode)
        {
            teamNumber = i;
            break;
        }
    }
    return recursiveForecast(teamStrength, teamNumber, 4);
}