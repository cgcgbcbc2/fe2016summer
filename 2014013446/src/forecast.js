function forecast(data, query) 
{
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

    var power = new Array(16);
    for (var i = 0; i < 16; i++)
        power[i] = data[teams[i]]; // get the power of every team

    if (teams.indexOf[query] == -1)
        return 0; // if query is not valid
    else {
        var win_rate = WinAmongGroup(power, 0, 16);
        return win_rate[teams.indexOf(query)];
    }
}

function WinBetweenTwo(data, to_win, versus) 
{
    return data[to_win] / (data[to_win] + data[versus]);
} // possibility for the first one to win between two people

function WinAmongGroup(power, left, right) // right is a upper bound
{
    if (right - left <= 2)
        return [WinBetweenTwo(power, left, right - 1), WinBetweenTwo(power, right - 1, left)];

    var combatPossi = []
    var middle = (left + right) / 2;

    var leftPossi = WinAmongGroup(power, left, middle);
    var rightPossi = WinAmongGroup(power, middle, right);

    for (var i = left; i < middle; i++) //left side possibility
    {
        var possi = 0;
        for (var j = middle; j < right; j++)
            possi += leftPossi[i - left] * WinBetweenTwo(power, i, j) * rightPossi[j - middle];
        combatPossi.push(possi);
    }

    for (var i = middle; i < right; i++) 
    {
        var possi = 0;
        for (var j = left; j < middle; j++)
            possi += rightPossi[i - middle] * WinBetweenTwo(power, i, j) * leftPossi[j - left];
        combatPossi.push(possi);
    }
    return combatPossi;
}
