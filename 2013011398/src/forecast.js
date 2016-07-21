var teamInfo= {
    "Switzerland": 100,
    "Poland": 100,
    "Croatia": 200,
    "Portugal": 200,
    "Wales": 300,
    "Northern Ireland": 300,
    "Hungary": 400,
    "Belgium": 400,
    "Germany": 200,
    "Slovakia": 200,
    "Italy": 200,
    "Spain": 200,
    "France": 200,
    "Republic of Ireland": 200,
    "England": 800,
    "Iceland": 800
};
function forecast(teams, name) {
    //用于记录队伍总数，起始为16支
    var teamsCount = 0;
    //计算传入参数中的队伍总数
    for(var c in teams){
        teamsCount++;
    }
    //两支球队时的情况
    if(teamsCount == 2){
        var tot = 0;
        for(var p in arguments[0]){
            tot += arguments[0][p];
        }
        return arguments[0][name] / tot;
    }
    //2^n支球队时的情况
    else {
        //用于将球队分为两组
        var newTeams1 = new Object();
        var newTeams2 = new Object();
        //新分的两组每组球队数则为原来的一半
        var newteamsCount = teamsCount / 2;
        //count用于保证分组时是均分，两边均为2^（n-1）支球队
        var count = 0;
        //flag记录目标球队是位于第一组还是位于第二组
        var flag = 0;
        //分组
        for(var x in teams){
            if(count < newteamsCount) {
                newTeams1[x] = teams[x];
                if(x == name){
                    flag = 1;
                }
            }
            else{
                newTeams2[x] = teams[x];
                if(x == name){
                    flag = 2;
                }
            }
            count++;
        }
        //如果目标球队在第一组
        if(flag == 1) {
            var sum = 0;
            for (var t in newTeams2) {
                sum += forecast(newTeams2, t) * (teams[name] / (teams[name] + newTeams2[t]));
            }
            return forecast(newTeams1,  name) * sum;
        }
        //如果目标球队在第二组
        if(flag == 2) {
            var sum = 0;
            for (var t in newTeams1) {
                sum += forecast(newTeams1, t) * (teams[name] / (teams[name] + newTeams1[t]));
            }
            return forecast(newTeams2, name) * sum;
        }
    }
}
console.log("answer:" + forecast(teamInfo, "England"));
