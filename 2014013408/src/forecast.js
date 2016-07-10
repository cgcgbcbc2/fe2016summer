/**
 * Created by Ma_Zi_jun on 2016/7/2.
 */
'use strict'
function forecast(teamSummary, ourTeamName){
    var teamNames = ["Switzerland", "Poland", "Croatia", "Portugal",
        "Wales", "Northern Ireland", "Hungary", "Belgium",
        "Germany", "Slovakia", "Italy", "Spain",
        "France", "Republic of Ireland", "England", "Iceland"];
    /* teamCapacity*/
    var teamCapacity = new Array(16);
    for (var tn in teamSummary){
        teamCapacity[teamNames.indexOf(tn)] = teamSummary[tn];
    }
    var ourTeamID = teamNames.indexOf(ourTeamName);
    console.log(teamCapacity.toString());
    console.log(ourTeamID);
}

forecast({England: 100, Germany: 50, France: 80}, "England");