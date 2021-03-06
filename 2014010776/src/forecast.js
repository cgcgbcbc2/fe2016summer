function getwin(winpro, ability, freq)
{
    var num1 = Math.pow(2, freq - 1), num2 = 16 / num1;
    //num1代表每第freq轮每组队伍个数，没进行一轮比赛，组人数翻倍一次，num2为组数
    var winpro1 = new Array(16);  //用来存储旧的胜率
    for(var i = 0; i < 16; i++)
        winpro1[i] = winpro[i];  //存储旧的胜率
    for(var j = 0; j < num2 / 2; j++)  //第2n组胜者向第2n+1组胜者进行挑战，所以num2需要除以2
    {
        var pos = j * num1 * 2, pro = 0;  //当前的位置和胜率
        for (var k = 0; k < num1; k++) {
            pro = 0;
            for (i = 0; i < num1; i++)
                /*对于第2j组第k队，需要与2j+1组的每一队比较，他们之间能在一起比赛的概率是二人的旧胜率乘积；
                 新胜率为自己能力值除以二人能力值之和，然后还要乘以第2j+1组的每一队胜率和自己胜率，将这num1个结果相加即为新胜率。
                 */
                pro += ability[pos + k] / (ability[pos + k] + ability[pos + num1 + i]) * winpro1[pos + num1 + i];
            winpro[pos + k] = pro * winpro1[pos + k];  //存储新胜率
        }
        var pos1 = j * num1 * 2 + num1;  //此处与上面同理，不过是第2j+1组第k队与第2j组的每一队进行比较。
        for (k = 0; k < num1; k++) {
            pro = 0;
            for (i = 0; i < num1; i++)
                pro += ability[pos1 + k] / (ability[pos1 + k] + ability[pos1 - num1 + i]) * winpro1[pos1 - num1 + i];
            winpro[pos1 + k] = pro * winpro1[pos1 + k];
        }
    }
}
function forecast(teamlist, teamname)
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
    var winpro = new Array(16), ability = new Array(16);
    for(var i = 0; i < 16; i++)
    {
        winpro[i] = 1;   //初始化每个队伍的胜率，未进行比赛时，胜率为1
        ability[i] = teamlist[teams[i]];  //初始化每个队伍的能力值
    }
    for(i = 1; i < 5; i++)
        getwin(winpro, ability, i);  //进行第i轮比赛，由于共有16个人，所以四轮比赛可以分出胜负
    /*var total = 0;
     for (i = 0; i < 16; i++)
     {
     console.log(winpro[i]);  //打印每组胜率
     total += winpro[i];
     }
     console.log(total);  */
    for(i = 0; i < 16; i++)
    {
        if(teams[i] == teamname)
            return winpro[i];
    }
    return 0;
}
