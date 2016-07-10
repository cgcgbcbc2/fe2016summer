/*
最近欧洲杯热播,第二讲的讲师“樊中恺”也很喜欢看球。现在需要大家帮忙了,实现
一个方法forecast,帮助我预测一下冠军,帮助我赌球逆袭成功,要求提供如下功能:

1,参数有两个: 
第一个参数是一个对象,分别表示进入16强的各个队的能力值,键为下图的国家编码,
值为使用这个函数的球迷心目中这个国家的实力(一个非负整数),且实力和胜率成正
比(淘汰赛无平局), 如:
{
	England: 100, 
	Germany: 50, 
	French: 80, ...
}
第二个参数是使用这个函数的球迷希望获得的某支球队最终夺冠的概率,是某个国家
的代码(如England)。 

2,根据下图的对阵情况,返回第二个参数对应的国家能够取得最终冠军的概率。

var Teams = [
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
*/

// 
function match(team1, team2, abil) {
	result = new Object;
	for (t1 in team1) {
		for (t2 in team2) {
			prob1 = team1[t1] * team2[t2] * abil[t1] / (abil[t1] + abil[t2]);
			prob2 = team1[t1] * team2[t2] * abil[t2] / (abil[t1] + abil[t2]);
			if (result[t1] == undefined) {result[t1] = prob1;}
			else {result[t1] = result[t1] + prob1;}
			if (result[t2] == undefined) {result[t2] = prob2;}
			else {result[t2] = result[t2] + prob2;}
		}
	}
	return result;
}

function predict(abil, sched, country) {

	length = sched.length;
	round = 1;

	// validation
	for (var i = 0; i < sched.length; i++) {
		if (abil[sched[i]] == undefined) {
			alert(sched[i] + "'s stat not provided!");
			return;
		}
	}

	// initialization
	t = [];
	t[0] = [];
	for (i in sched) {
		a = new Object;
		a[sched[i]] = 1;
		t[0].push(a);
	}

	// proceed rounds
	while(length != 1) {
		t[round] = [];
		for (i = 0; i < length; i = i + 2) {
			t[round].push(match(t[round-1][i], t[round-1][i+1], abil));
		}
		round = round + 1;
		length = length / 2;
	}

	return t[round-1][0][country];
}

var sched = [
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

function forecast(teamabils, country) {
	return predict(teamabils, sched, country);
}



// for testing
// var a = {
// 	"Switzerland" : 100,
// 	"Poland" : 100,
// 	"Croatia" : 100,
// 	"Portugal" : 100,
// 	"Wales" : 100,
// 	"Northern Ireland" : 100,
// 	"Hungary" : 100,
// 	"Belgium" : 100,
// 	"Germany" : 100,
// 	"Slovakia" : 100,
// 	"Italy" : 100,
// 	"Spain" : 100,
// 	"France" : 100,
// 	"Republic of Ireland" : 100,
// 	"England" : 100,
// 	"Iceland" : 100
// }

// var teamInfo =
// {
// 	"Switzerland": 50,
// 	"Poland": 60,
// 	"Croatia": 70,
// 	"Portugal": 80,
// 	"Wales": 10,
// 	"Northern Ireland": 20,
// 	"Hungary": 10,
// 	"Belgium": 50,
// 	"Germany": 90,
// 	"Slovakia": 20,
// 	"Italy": 100,
// 	"Spain": 100,
// 	"France": 100,
// 	"Republic of Ireland": 100,
// 	"England": 100,
// 	"Iceland" : 100
// };

// c = "Iceland";

// console.log("Chance that " + c + " wins is " + forecast(teamInfo, c));
