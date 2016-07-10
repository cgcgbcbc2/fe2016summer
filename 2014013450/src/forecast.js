function forecast(cap,team)
{
    var teamname = ["Switzerland","Poland","Croatia","Portugal","Wales","Northern Ireland","Hungary","Belgium","Germany","Slovakia","Italy","Spain","France","Republic of Ireland","England","Iceland"];
    var level = new Array(16);
    var level1 = new Array(16);
    var level2 = new Array(16);
    var level3 = new Array(16);
    var level4 = new Array(16);
    var level5 = new Array(16);
    for(var t in cap)
    {
        //console.log(t);
        level[teamname.indexOf(t)] = cap[t];
    }
    for(var s = 0;s < 16;s++)
    {
        level1[s] = 1;
    }
    computelevel(level1,level2,1,level);
    computelevel(level2,level3,2,level);
    computelevel(level3,level4,4,level);
    computelevel(level4,level5,8,level);
    return level5[teamname.indexOf(team)];
}

function computelevel(lowlevel,highlevel,level,capacity)
{
    for(var i = 0;i < 8/level;i++)
    {
        for(var j = i*level*2;j < (i+1)*2*level;j++)
        {
            highlevel[j] = 0;
            if(j < level*(2*i+1))
            {
                for(var t = level*(2*i+1);t < level*(2*i+2);t++)
                {
                    highlevel[j] += lowlevel[j]*lowlevel[t]*fight(capacity[j],capacity[t]);
                }
            }
            else
            {
                for(var t = level*(2*i);t < level*(2*i+1);t++)
                {
                    highlevel[j] += lowlevel[j]*lowlevel[t]*fight(capacity[j],capacity[t]);
                }
            }
        }
    }
}

function fight(a,b)
{
    if(a == 0 && b == 0)
        return 0.5;
    return (a/(a+b));
}

/*var sum = 0;
var tn = ["Switzerland","Poland","Croatia","Portugal","Wales","Northern Ireland","Hungary","Belgium","Germany","Slovakia","Italy","Spain","France","Republic of Ireland","England","Iceland"];
for(var i = 0;i < 16;i++) {
    var answer = forecast({
        "Switzerland": 50,
        "Poland": 55,
        "Croatia": 75,
        "Portugal": 77,
        "Wales": 60,
        "Northern Ireland": 30,
        "Hungary": 35,
        "Belgium": 82,
        "Germany": 90,
        "Slovakia": 57,
        "Italy": 80,
       "Spain": 88,
        "France": 85,
        "Republic of Ireland": 35,
        "England": 75,
        "Iceland": 46
    }, tn[i]);
    sum+=answer;
    console.log(answer);
}
console.log(sum);*/


