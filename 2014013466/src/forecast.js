// the names of team.
var team_names = [
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

// team constructor, which construct a object with attribute index and p
function make_team(_index, _p){
	"use strict";
	this.index = _index;
	this.p = _p;
	return this;
}

// merge the tuple1 and tuple2 to one tuple with probability tuple p.
function pro_merge(tuple1, tuple2, P){
	"use strict";
	var tup = [];
	for(var i = 0; i < tuple1.length; i ++){
		var index_i = tuple1[i].index;
		var ans = 0;
		for(var j = 0; j < tuple2.length; j ++){
			var index_j = tuple2[j].index;
			ans += tuple2[j].p * P[index_i][index_j];
		}
		tup.push(new make_team(index_i, ans * tuple1[i].p));
	}
	for(var i = 0; i < tuple2.length; i ++){
		var index_i = tuple2[i].index;
		var ans = 0;
		for(var j = 0; j < tuple1.length; j ++){
			var index_j = tuple1[j].index;
			ans += tuple1[j].p * P[index_i][index_j];
		}
		tup.push(new make_team(index_i, ans * tuple2[i].p));
	}
	return tup;
}

function forecast(teams, query){
	"use strict";
	// Get strenth for every contry in order.
	var strength = [];
	for (var i = 0; i < team_names.length; i ++){
		strength.push(teams[team_names[i]]);
	}
	// calculate the probability of country i to defeat country j
	// which saved in p[i][j]
	var p = new Array(team_names.length);
	for(var i = 0; i < team_names.length; i ++){
		p[i] = new Array(team_names.length);
	}
	for(var i = 0; i < team_names.length; i ++){
		for(var j = 0; j < team_names.length; j ++){
			p[i][j] = strength[i] / (strength[i] + strength[j]);
		}
	}
	// calculate the init tuples.
	tuples = [];
	for(var i = 0; i < team_names.length / 2; i ++){
		var team1 = new make_team(i * 2, p[i*2][i*2+1]);
		var team2 = new make_team(i * 2 + 1, p[i*2+1][i*2]);
		tup = [team1, team2];
		tuples.push(tup);
	}
	// merge the tuples until the length of tuples is 1
	while(tuples.length > 1){
		var l = tuples.length;
		var tuples_new = [];
		for(var i = 0; i < l / 2; i ++){
			tuples_new.push(pro_merge(tuples[i*2], tuples[i*2+1], p));
		}
		tuples = tuples_new;
	}
	// return the answer.
	for(var i = 0; i < team_names.length; i ++){
		if(team_names[i] === query){
			return tuples[0][i].p;
		}
	}
}

// test code
var teams = {
	"Switzerland": 1,
	"Poland": 2,
	"Croatia": 3,
	"Portugal": 4,
	"Wales": 5,
	"Northern Ireland": 6,
	"Hungary": 7,
	"Belgium": 8,
	"Germany": 9,
	"Slovakia": 10,
	"Italy": 11,
	"Spain": 12,
	"France": 13,
	"Republic of Ireland": 14,
	"England": 15,
	"Iceland": 16
};

for(i = 0; i < team_names.length; i ++){
	console.log(forecast(teams, team_names[i]));
}