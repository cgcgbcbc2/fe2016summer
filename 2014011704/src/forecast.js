var names = [
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

function forecast(ability, nation) {

	function node(nation) {
		this.nations = [nation];
		this.gailv = [1];		
	}
	//检验输入国家正确
	if(names.indexOf(nation) === -1){
		throw "spelling mistake?";
	}
	
	function singlematch(a, b) {
		var upper = new Object();
		upper.nations = a.nations.concat(b.nations);
		var l = a.nations.length;
		upper.gailv = new Array(2 * l);
		var i = 0;
		for (i = 0; i < 2 * l; ++i) {
			upper.gailv[i] = 0;
		} 
		for (i = 0; i < l; ++i) {
			for (var j = 0; j < l; ++j) {
				var m = a.gailv[i] * b.gailv[j];
				if((ability[a.nations[i]] + ability[b.nations[j]]) === 0) {
					ability[a.nations[i]] = 0.5;
					ability[b.nations[j]] = 0.5;
				}
				else {
					ability[a.nations[i]] = ability[a.nations[i]] / ability[a.nations[i]] + ability[b.nations[j]];
					ability[b.nations[j]] = ability[b.nations[j]] / ability[a.nations[i]] + ability[b.nations[j]];
				}
				upper.gailv[i] += ability[a.nations[i]] * m;
				upper.gailv[l + j] += ability[b.nations[j]] * m;
			}
		}
		//console.log(upper)
		return upper;
	}

	var num = names.length;
	var nodes  = new Array(2 * num - 1);
	
	var i = 0;
	for (i = 0; i < num; ++i) {
		nodes[num - 1 + i] = new node(names[i]);
	}

	for (i = num - 2; i >= 0; --i) {
		nodes[i] = singlematch(nodes[2 * i + 1],  nodes[2 * i + 2]);
	}

	return nodes[0].gailv[names.indexOf(nation)];
}


//测试
function test() {
	var ability = {
		Switzerland: 1,
		Poland: 1,
		Croatia: 1,
		Portugal: 1,
		Wales: 1,
		'Northern Ireland': 1,
		Hungary: 1,
		Belgium: 1,
		Germany: 1,
		Slovakia: 1,
		Italy: 1,
		Spain: 1,
		France: 1,
		'Republic of Ireland': 1,
		England: 1,
		Iceland: 1
	};

	for (var v in names) {
		ability[names[v]] = 0;
	}
	ability['Switzerland'] = 1;
	console.log(forecast(ability, 'Switzerland'));
}